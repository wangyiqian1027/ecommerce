// Import required modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const cors = require('cors');
const cookieParser = require('cookie-parser')

// Create express app
const app = express();
const port = 3001;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 120000, secure: false }
}));
app.use(cors({
    origin: 'http://localhost:5173', methods: ['GET', 'POST'], credentials: true,
}));
console.log(process.env.DB_USER);
// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'elegancecraft',
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

////////////////// GET //////////////////

app.get('/authenticated', (req, res) => {
    const loggedIn = req.session.loggedIn || false;
    res.json({ authenticated: loggedIn });
});

app.get('/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) {
            console.log('Error fetching categories:', err);
            return res.status(500).json({ message: 'Failed to fetch categories' });
        }
        res.json(results);
    });
});

app.get('/products', (req, res) => {
    const { category_id, product_id } = req.query;
    let query = 'SELECT * FROM products';

    if (category_id) {
        query = `
            SELECT products.*, categories.name AS category_name
            FROM products
            INNER JOIN categories ON products.category_id = categories.category_id
            WHERE products.category_id = ?
        `;
    }

    if (product_id) {
        query = 'SELECT * FROM products WHERE product_id = ?';
    }

    db.query(query, [category_id || product_id], (err, results) => {
        if (err) {
            console.log('Error fetching products:', err);
            return res.status(500).json({ message: 'Failed to fetch products' });
        }
        res.json(results);
    });
});

app.get('/cart', (req, res) => {
    // const user_id = req.session.user_id;
    const user_id = req.query.user_id;
    console.log(user_id);
    if (!user_id) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    db.query('SELECT cart.*, products.name AS product_name, products.price AS product_price FROM cart INNER JOIN products ON cart.product_id = products.product_id WHERE cart.user_id = ?', [user_id], (err, results) => {
        if (err) {
            console.log('Error fetching cart data:', err);
            return res.status(500).json({ message: 'Failed to fetch cart data' });
        }
        res.json(results);
    });
});

app.get('/feature', (req, res) => {
    db.query('SELECT * FROM products ORDER BY RAND() LIMIT 1', (err, results) => {
        if (err) {
            console.log('Error fetching feature products:', err);
            return res.status(500).json({ message: 'Failed to fetch feature products' });
        }
        res.json(results);
    });
});

////////////////// POST //////////////////

app.post('/register', async (req, res) => {
    const { email, full_name, password, cpassword, address, phone_number } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    if (password !== cpassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.query('INSERT INTO users (email, password, full_name, address, phone_number) VALUES (?, ?, ?, ?, ?)', [email, hashedPassword, full_name, address, phone_number], (err, results) => {
            if (err) {
                console.log('Registration error:', err);
                return res.status(500).json({ message: 'Registration failed' });
            }

            return res.json({ message: 'Registration successful' });
        });
    } catch (error) {
        console.error('Hashing error:', error);
        return res.status(500).json({ message: 'Registration failed' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) throw err;

            if (results.length > 0) {
                const user = results[0];
                // const passwordMatch = await bcrypt.compare(password, user.password);
                const passwordMatch = (password === user.password);
                if (passwordMatch) {
                    req.session.loggedIn = true;
                    req.session.user_id = user.user_id;
                    return res.json({ message: 'Login successful', userid: user.user_id });
                    console.log(req.session.loggedIn + " " + req.session.user_id);
                } else {
                    return res.status(401).json({ message: 'Invalid credentials'});
                }
            } else {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Login failed' });
    }
});

app.post('/cart', async (req, res) => {
    const { product_id, quantity ,user_id } = req.body;
    // const user_id = req.session.user_id;
    if (!quantity) {
        return res.status(400).json({ message: 'Quantity is required' });
    }

    try {
        db.query('INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)', [user_id, product_id, quantity], (err, results) => {
            if (err) {
                console.log('Cart error:', err);
                return res.status(500).json({ message: 'Cart failed' });
            }

            return res.json({ message: 'Cart successful' });
        });
    } catch (error) {
        console.error('Cart error:', error);
        return res.status(500).json({ message: 'Cart failed' });
    }
});

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Session destruction error:', err);
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.json({ message: 'Logout successful' });
    });
});

////////////////// DELETE //////////////////

app.delete('/cart/:cart_id', (req, res) => {
    const { cart_id } = req.params;

    db.query('DELETE FROM cart WHERE cart_id = ?', [cart_id], (err, results) => {
        if (err) {
            console.log('Error deleting item from cart:', err);
            return res.status(500).json({ message: 'Failed to delete item from cart' });
        }
        res.json({ message: 'Item removed from cart successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

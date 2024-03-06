import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
    const [productData, setProductData] = useState([]);
    const routeImg = "../src/assets";
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleCart = async (e) => {
        e.preventDefault();
        try {
            var user_id = parseInt(localStorage.getItem("userid"));
            const response = await axios.post("http://localhost:3001/cart", {
                product_id: productData[0].product_id,
                quantity: 1,
                user_id: user_id
            });
            console.log(response.data);
            navigate("/cart/${productData[0].product_id}");
        } catch (error) {
            console.error("Cart error:", error);
        }
    };

    return (
        <>
            <div className="wrapper-container light">
                <div className="container-content">
                    <h2>All Products <sup>(total {productData.length})</sup></h2>
                    <p>
                        Explore our complete range of handcrafted accessories. Each piece is
                        a work of art, designed to elevate your style with elegance and
                        grace.
                    </p>
                </div>
                <div className="container-content triple">
                    {productData ? (
                        productData.map((product) => (
                            <div className="content-box" key={product.product_id}>
                                <img src={`${routeImg}/${product.img}`} alt={product.name} />
                                <div className="box-details">
                                    <h4>{product.name}</h4>
                                    <p>{product.price}</p>
                                    <div className="single">
                                        <Link to={`/product/${product.product_id}`} className="center"><button className="width">Explore</button></Link>
                                        {/* <Link to={`/cart/${product.product_id}`} className="center">Add to Cart</Link> */}
                                        {/* <button onClick={handleCart}>Add to Cart</button> */}
                                        <a href="#" onClick={handleCart} className="center">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h3>No products available</h3>
                    )}
                </div>
            </div>
        </>
    );
};

export default Products

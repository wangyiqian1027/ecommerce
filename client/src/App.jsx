import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Cart from "./pages/Cart"
import Shop from "./pages/Shop"
import Categories from "./pages/Categories"
import Category from "./pages/Category"
import Contact from "./pages/Contact"
import Checkout from "./pages/Checkout"
import "./App.scss"
import Product from "./pages/Product"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/category/:category_id" element={<Category />} />
                    <Route path="/product/:product_id" element={<Product />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart/:product_id" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

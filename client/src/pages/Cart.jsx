import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CartData from '../components/CartData';
import useAuth from '../components/Auth';

const Cart = () => {
    const navigate = useNavigate();
    const isAuthenticated = useAuth();

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         navigate("/login");
    //     }
    // }, [isAuthenticated, navigate]);

    console.log(isAuthenticated)

    return (
        <>
            <Header />
            {/* {isAuthenticated && <CartData />} */}
            <CartData />
            <Footer />
        </>
    );
};

export default Cart;

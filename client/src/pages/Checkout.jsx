import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CheckoutData from '../components/CheckoutData';
import useAuth from '../components/Auth';

const Checkout = () => {
    const navigate = useNavigate();
    const isAuthenticated = useAuth();

    return (
        <>
            <Header />
            <CheckoutData />
            <Footer />
        </>
    );
};

export default Checkout;

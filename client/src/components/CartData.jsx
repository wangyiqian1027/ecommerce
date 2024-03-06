import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios';

const CartData = () => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        // axios.get('http://localhost:3001/cart')
        axios.get('http://localhost:3001/cart', {
            params: {
                user_id: parseInt(localStorage.getItem('userid'))
            }
        })
            .then(response => {
                setCartData(response.data);
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, []);

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartData.forEach(cart => {
            totalPrice += cart.product_price * cart.quantity;
        });
        return totalPrice.toFixed(2);
    };

    const removeCartItem = async (cart_id) => {
        try {
            await axios.delete(`http://localhost:3001/cart/${cart_id}`);
            setCartData(cartData.filter(item => item.cart_id !== cart_id));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <>
            <div className="wrapper-container light">
                <div className="container-content">
                    <h2>Your Shopping Cart</h2>
                    <div className="content-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData.length > 0 ? (
                                    cartData.map((cart) => (
                                        <tr key={cart.cart_id}>
                                            <td>{cart.product_name}</td>
                                            <td>{cart.quantity}</td>
                                            <td>${cart.product_price}</td>
                                            <td><button onClick={() => removeCartItem(cart.cart_id)}>Remove</button></td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        {/* <td colSpan="4">Cart is empty</td> */}
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2">Total:</td>
                                    <td>${calculateTotalPrice()}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="double">
                        <Link to={"/checkout"}><button>Proceed to Checkout</button></Link>
                        <Link to={"/shop"}>Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartData;

import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import './CheckoutPage.css';

const CheckoutData = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        ccNumber: '',
        ccExpMonth: '',
        ccExpYear: '',
        ccCVC: '',
        billingName: '',
        billingCountry: '',
        billingAddress: '',
        billingCity: '',
        billingState: '',
        billingZip: '',
        sameAsShipping: true,
      });
    
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
          title: 'Thank you for shopping from us !',
          // text: 'Your order has been placed successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
            navigate("/");
        });
        
      };
    
      return (
        <div className="checkout-container">
          <h1>Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="section">
              <h2>Customer Info</h2>
              <div className="form-row">
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required="require"/>
                <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} required="require" />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required="require" />
              </div>
              <div className="form-row">
                <input type="text" name="firstName" placeholder="Adress" onChange={handleChange} required="require" />
                <input type="text" name="Country" placeholder="Country" onChange={handleChange} required="require" />
              </div>
              <div className="form-row">
                <input type="text" name="firstName" placeholder="Town/City" onChange={handleChange} required="require" />
                <input type="text" name="lastName" placeholder="Country/State" onChange={handleChange} required="require" />
                <input type="text" name="zip" placeholder="Zip/Postal" onChange={handleChange} required="require" />
              </div>
            </div>
            
            <div className="section">
              <h2>Payment Info</h2>
              <div className="form-row">
                <input type="text" name="cardnumber" placeholder="Card Number" onChange={handleChange} required="require" />
                <input type="text" name="expiredate" placeholder="Expired Date" onChange={handleChange} required="require" />
                <input type="text" name="cvc" placeholder="CVC" onChange={handleChange} required="require" />
              </div>
              
            </div>
            
            <div className="section">
              <h2>Billing Address</h2>
              <div className="form-row">
                <input type="text" name="billingname" placeholder="Billing Name" onChange={handleChange} required="require" />
                <input type="text" name="Country" placeholder="Country" onChange={handleChange} required="require" />
              </div>
              <div className="form-row">
                <input type="text" name="Adress" placeholder="Adress" onChange={handleChange} required="require" />
                <input type="text" name="City" placeholder="City" onChange={handleChange} required="require" />
                <input type="text" name="Country" placeholder="Country" onChange={handleChange} required="require" />
                <input type="text" name="Zip" placeholder="Zip" onChange={handleChange} required="require" />
              </div>
            </div>
            
            <button type="submit">Complete Checkout and Pay</button>
          </form>
        
        </div>
      );
    };

export default CheckoutData;

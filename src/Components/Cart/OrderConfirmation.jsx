import React from 'react';
import './OrderConfirmation.css';
import { useNavigate } from 'react-router-dom';

export const OrderConfirmation = () => {

    const navigate = useNavigate();

    const handleReturnToHome = () => {
        navigate('/');
    };

    return (
        <div className="order-confirmation">
            <h2>Order Summary</h2>
            <p>Thank you for your purchase!</p>
            <div className="order-details">
                <p>Product Name x Quantity</p>
                <p>Total: $Amount</p>
            </div>
            <button onClick={handleReturnToHome} className="return-home-btn">Return to Home</button>
        </div>
    );
};

export default OrderConfirmation;

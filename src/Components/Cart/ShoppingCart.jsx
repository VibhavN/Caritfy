import React from 'react';
import './ShoppingCart.css';

import fossil from '../Assets/fossil1.jpg'
import sonos from '../Assets/sonos1.jpg'

export const ShoppingCart = ({ proceedToCheckout }) => {
  const cartItems = [
    { id: 1, name: 'Fossil Gen 5', quantity: 1, price: 22000, image: fossil },
    { id: 2, name: 'JBL Flip 5', quantity: 2, price: 15000, image: sonos },
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="item-details">
            <h4>{item.name}</h4>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div className="item-price">
            <p>₹{item.price}</p>
          </div>
        </div>
      ))}
      <div className="total-price">
        <h3>Total: ₹{totalAmount}</h3>
      </div>
      <button onClick={proceedToCheckout} className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default ShoppingCart;

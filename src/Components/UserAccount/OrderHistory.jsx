import React from 'react';
import './OrderHistory.css';

import macbook1 from '../Assets/macbook1.jpg'
import ps5 from '../Assets/ps1.jpg'

export const OrderHistory = () => {
 
  const orders = [
    { id: 1, product: 'MacBook Pro', date: '2024-10-01', amount: '160000', status: 'Delivered', image: macbook1 },
    { id: 2, product: 'Playstation 5', date: '2024-09-28', amount: '8000', status: 'Pending', image: ps5 },
  ];

  return (
    <div className="order-history">
      <h2>Your Order History</h2>
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <img src={order.image} alt={order.product} className="order-image" />
          <div className="order-details">
            <h2>{order.product}</h2>
            <span>{order.date}</span>
            <h3>₹{order.amount}</h3>
            <p className={`status ${order.status.toLowerCase()}`}>{order.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;

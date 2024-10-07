import React from 'react';
import './SavedItems.css';

import asus from '../Assets/asus1.jpg'
import xbox from '../Assets/xbox1.jpg'
import echo from '../Assets/echo1.jpg'


export const SavedItems = () => {
  const savedItems = [
    { id: 1, product: 'Asus ROG Zephyrus', amount: '130000', status: 'Available', image: asus },
    { id: 2, product: 'Xbox Series X', amount: '50000', status: 'Available', image: xbox},
    { id: 3, product: 'Amazon Echo (4th Gen)', amount: '70000', status: 'Available', image: echo },
  ];

  return (
    <div className="saved-items">
      <h2>Your Saved Items</h2>
      <div className="items-grid">
        {savedItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.product} className="item-image" />
            <div className="item-details">
              <h3>{item.product}</h3>
              <span>₹{item.amount}</span>
              <p className={`status ${item.status.toLowerCase()}`}>{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedItems;

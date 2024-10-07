import React from 'react';
import './PaymentMethods.css';

export const PaymentMethods = ({ confirmOrder }) => {
  return (
    <div className="payment-methods">
      <h2>Payment Methods</h2>
      <form>
        <label>
          <input type="radio" name="payment" /> Credit Card
        </label>
        <label>
          <input type="radio" name="payment" /> PayPal
        </label>
        <div className="payment-details">
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiration Date" />
          <input type="text" placeholder="CVV" />
        </div>
      </form>
      <button onClick={confirmOrder} className="confirm-btn">Confirm Payment</button>
    </div>
  );
};

export default PaymentMethods;

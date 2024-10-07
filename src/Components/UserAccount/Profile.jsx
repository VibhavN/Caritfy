import React from 'react';
import './Profile.css';

export const ProfileManagement = () => {
  return (
    <div className="profile-management">
      <h2>Profile Management</h2>
      <div className="profile-card">
        <form>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="johndoe123" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john.doe@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" placeholder="+91 1234567890" />
            </div>
            <div className="form-group">
              <label htmlFor="alt-email">Alternate Email</label>
              <input type="email" id="alt-email" placeholder="alt.johndoe@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="address-billing">Billing Address</label>
              <input type="text" id="address-billing" placeholder="123 Billing St, City" />
            </div>
            <div className="form-group">
              <label htmlFor="address-shipping">Shipping Address</label>
              <input type="text" id="address-shipping" placeholder="123 Shipping St, City" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" placeholder="India" />
            </div>
            <div className="form-group">
              <label htmlFor="postal-code">Postal Code</label>
              <input type="text" id="postal-code" placeholder="400001" />
            </div>
            <div className="form-group">
              <label htmlFor="payment">Payment Method</label>
              <select id="payment">
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="net-banking">Net Banking</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" />
            </div>
            <div className="form-group">
              <label htmlFor="delete-account">Delete Account</label>
              <button className="delete-account-btn" id="delete-account">Delete Account</button>
            </div>
          </div>
          <div className="button-group">
            <button className="save-btn">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileManagement;

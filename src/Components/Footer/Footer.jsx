import React from 'react';
import './Footer.css'; 

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                </div>
                <div className="footer-socials">
                    <a href="wwww.facebook.com" aria-label="Facebook">Facebook</a>
                    <a href="www.x.com" aria-label="Twitter">Twitter</a>
                    <a href="www.instagram.com" aria-label="Instagram">Instagram</a>
                </div>
                <p>&copy; {new Date().getFullYear()} Cartify. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

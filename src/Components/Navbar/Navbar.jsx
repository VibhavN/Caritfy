import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import user from '../Assets/user.png';

export const Navbar = ({ onSearch }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>

        
            <div className="nav-search">
                <SearchBar placeholder="Search for products..." onSearch={onSearch} />
            </div>

            
            <button className='mobile-dropdown-button' onClick={toggleDropdown}>
                ☰
            </button>

            {isDropdownOpen && (
                <div className="mobile-dropdown-menu">
                    <div className="nav-search-dropdown">
                        <SearchBar placeholder="Search for products..." onSearch={onSearch} />
                    </div>
                    <div className="nav-icons-dropdown">
                        <Link to='/user' onClick={toggleDropdown}>
                            <img src={user} alt="User" className='user-icon' />
                        </Link>
                        <Link to='/cart' onClick={toggleDropdown}>
                            <img src={cart} alt="Cart" className='cart-icon' />
                        </Link>
                    </div>
                </div>
            )}

            <div className='nav-icons'>
                <Link style={{ textDecoration: 'none' }} to='/cart'>
                    <img src={cart} alt="Cart" className='cart-icon' />
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/user'>
                    <img src={user} alt="User" className='user-icon' />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;

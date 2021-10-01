import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resource/images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <div className="header-img">
                <img src={logo} alt="" />
                </div>
                <div className="menu-bar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/review">Order Review</Link></li>
                        <li><Link to="inventory">Manage Inventory</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;
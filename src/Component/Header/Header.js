import React from 'react';
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/review">Order Review</a></li>
                        <li><a href="inventory">Manage Inventory</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;
import React from 'react';
import {NavLink } from 'react-router-dom';
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
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink activeStyle={{fontWeight: "bold",color: "lightgray", borderBottom : "3px solid lightGray", paddingBottom: "5px"}} 
                        to="/shop">Shop</NavLink></li>
                        <li><NavLink activeStyle={{fontWeight: "bold",color: "lightgray", borderBottom : "3px solid lightGray", paddingBottom: "5px"}} to="/review">Order Review</NavLink></li>
                        <li><NavLink activeStyle={{fontWeight: "bold",color: "lightgray", borderBottom : "3px solid lightGray", paddingBottom: "5px"}} to="inventory">Manage Inventory</NavLink></li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;
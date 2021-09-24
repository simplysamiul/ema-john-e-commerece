import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch(`products.JSON`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const handelAddProduct = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
    };
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product 
                    product ={product}
                    handelAddProduct = {handelAddProduct} 
                    key = {product.key}
                    />)
                }
            </div>
            <div className="price-container">
                <h2>Order Summary</h2>
                <PriceCart cart={cart} /> 
            </div>
        </div>
    );
};

export default Shop;
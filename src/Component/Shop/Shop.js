import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../resource/utilities/fakedb';
import PriceCart from '../PriceCart/PriceCart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(()=>{
        fetch(`products.JSON`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        })
    }, []);
    // get form local storage for now (fakedb.js)
    useEffect(()=>{
        if(products.length){
        const saveCart = getStoredCart();
        const storedCart = [];
        for(const key in saveCart){
            const addedProduct = products.find(product => product.key === key)
            if(addedProduct){
                const quantity = saveCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
        }
        setCart(storedCart);
    }
    },[products])
    const handelAddProduct = (product) =>{
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [] ;
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,product];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage for now
        addToDb(product.key);
    };
    const handelSearchText = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
        <>
            <div className="search-container">
                <input onChange={handelSearchText} type="text" placeholder="type here to search*"/>
            </div>
            <div className="shop-container">
            <div className="products-container">
                {
                    displayProducts.map(product => <Product 
                    product ={product}
                    handelAddProduct = {handelAddProduct} 
                    key = {product.key}/>)
                }
            </div>
            <div className="price-container">
                <h2>Order Summary</h2>
                <PriceCart cart={cart}>
                    <Link to="/review">
                        <button className="review-button">Review Your Order</button>   
                    </Link>    
                </PriceCart> 
            </div>
            </div>
        </>
    );
};

export default Shop;
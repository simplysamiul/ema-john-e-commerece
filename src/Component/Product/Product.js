import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, seller,  price, stock, star, features} = props.product;
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <p>by : {seller}</p>
                <h5>$ {price}</h5>
                <p>only {stock} left in stock - order soon</p>
                <div className="rating-star">
                <Rating
                initialRating={star}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                > 
                </Rating>
                </div>
                <button onClick = {()=>props.handelAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;
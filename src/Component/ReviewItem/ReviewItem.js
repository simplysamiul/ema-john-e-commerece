import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = (props) => {
    const {name, price, quantity, key, seller, } = props.product;
    return (
        <div className="product-card">
            <div className="product-info">
                <h4>{name}</h4>
                <h5>$ {price}</h5>
                <p>by : {seller}</p>
                <h4 style={{color: "black"}}>Quantity : {quantity}</h4>
                <button onClick={()=> props.handelRemove(key)}><FontAwesomeIcon icon={faTrashAlt} /> Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;
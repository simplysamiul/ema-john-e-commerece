import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import PriceCart from '../PriceCart/PriceCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, deleteFromDb } from '../../resource/utilities/fakedb';
import './OrderReview.css';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const handelRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const handelPlaceOrder = () =>{
        history.push("/placeOrder");
        setCart([]);
        clearTheCart();
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        handelRemove={handelRemove} 
                        product={product} 
                        key={product.key}>
                        </ReviewItem>)
                }
            </div>
            <div className="price-container">
                <h2>Order Summary</h2>
                <PriceCart cart={cart}>
                    <button className="place-button" onClick={handelPlaceOrder}>Place Order</button>
                </PriceCart>
            </div>
        </div>
    );
};

export default OrderReview;
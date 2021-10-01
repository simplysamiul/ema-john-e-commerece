import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import PriceCart from '../PriceCart/PriceCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteFromDb } from '../../resource/utilities/fakedb';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handelRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
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
                <PriceCart cart={cart}></PriceCart>
            </div>
        </div>
    );
};

export default OrderReview;
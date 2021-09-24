import React from 'react';
import './PriceCart.css';

const PriceCart = (props) => {
    const {cart} = props;
    const totalReducer = (previous, product)=> previous + product.price;
    const total = cart.reduce(totalReducer, 0);
    // (Alternative of reduce)
    // let total = 0;
    // for(const product of cart){
    //     total = total + product.price;
    // }
    const shipping = 22;
    const handling = 16;
    const shippingAndHandling = "Free !!" ;
    const beforTaxTotal = "Free !!";
    const grandTotal = total;
    return (
        <div>
            <div className="price-details">
                <h3>Itmes Ordered : {props.cart.length}</h3>
                <div className="price-tabel">
                    <table>
                        <tbody>
                            <tr>
                                <td>Items : </td>
                                <td>$ {total.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Shipping & Handling : </td>
                                <td>$ {shippingAndHandling}</td>
                            </tr>
                            <tr>
                                <td>Total before tax : </td>
                                <td>$ {beforTaxTotal}</td>
                            </tr>
                            <tr>
                                <td>Estimated Tax : </td>
                                <td>$ Free !!</td>
                            </tr>
                            <tr className="total-order">
                                <td>Order Total : {}</td>
                                <td>$ {grandTotal.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PriceCart;
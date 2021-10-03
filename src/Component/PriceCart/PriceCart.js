import React from 'react';
import './PriceCart.css';

const PriceCart = (props) => {
    const {cart} = props;
    console.log(props.children);
    // -------------(Alternative of reduce)--------
    // const totalReducer = (previous, product)=> previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        product.quantity = !product.quantity ? 1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shippingAndHandling = "Free !!" ;
    const beforTaxTotal = "Free !!";
    const grandTotal = total;
    return (
        <div>
            <div className="price-details">
                <h3>Itmes Ordered : {totalQuantity}</h3>
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
                {props.children}
            </div>
        </div>
    );
};

export default PriceCart;
import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal.js';


function Checkout() {
    const [{ basket }] = useStateValue();
   
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__add"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {
                    basket?.length === 0 ? 
                    (
                        <div>
                            <h1>Your shopping basket is empty</h1>
                            <p>You have no items in your basket. To buy one ore more items, click "Add to basket" next to the items.</p>
                        </div>): 
                    (
                        <div>
                            <h2 className="checkout__title">Your shopping basket</h2>
                            {
                                basket.map(item => {
                                    return (
                                        <CheckoutProduct 
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                    />)}
                                )     
                            }
                        </div>
                    )
                }
            </div>

            {
                (basket.length > 0) ? 
                    (
                        <div className="checkout__right">
                            <Subtotal />
                        </div> ) : null
            }
            
        </div>
    );
}

export default Checkout;

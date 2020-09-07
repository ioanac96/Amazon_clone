import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        console.log("AAAaa")
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    }
    console.log("basket", basket);

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info ">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        // create a array of size 5
                        Array(rating) 
                        // fill it with empty values
                        .fill()
                        // map it and put <p> 5 times
                        .map((_) => (
                            <StarIcon />
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>

            </div>
            
        </div>
    );
}

export default CheckoutProduct;
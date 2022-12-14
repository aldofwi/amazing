/* eslint-disable no-unused-vars */
import React from 'react'
import "../Styles/CheckoutProduct.css"
import { useStateValue } from '../StateProvider'

function CheckoutProduct({ id, image, title, details, price, rating, quantity, hideButton }) {

    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {

        // Remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            quantity: quantity,
        })
    }

    const incrementItem = () => {

        if(quantity < 11) {
            // Increment value of Quantity
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    details: details,
                    image: image,
                    price: price,
                    rating: rating,
                    quantity: quantity,
                },
            });
        }
    }

    const decrementItem = () => {

        if(quantity > 1) {
            // Decrement value of Quantity
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: id,
                quantity: quantity,
            })
        }
    }

  return (

    <div className='checkoutProduct'>
    
        <img className='checkoutProduct__image' src={image} alt="" />

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__details"><small>{details}</small></p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p key={i}>⭐</p>
                ))}
            </div>
            <div className="checkoutProduct__quantity">
                <p>
                <small>Quantity </small>
                {!hideButton && (<button onClick={decrementItem}>-</button>)}
                <small>{quantity}</small>
                {!hideButton && (<button onClick={incrementItem}>+</button>)}
                </p> 
            </div>
            
            {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
            
        </div>

    </div>

  )
}

export default CheckoutProduct

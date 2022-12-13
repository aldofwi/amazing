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
        })
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
            {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
            <p><small>Qty : {quantity}</small></p>
        </div>

    </div>

  )
}

export default CheckoutProduct

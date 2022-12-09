import React from 'react'
import '../Styles/Product.css'
import { useStateValue } from '../StateProvider'

function Product({ id, title, details, price, image, rating }) {

    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    // console.log(">>> This is the basket", basket);

    const addToBasket = () => {
        // dispatch the item into the data layer (ShooT)
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                details: details,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

  return (
    <div className='product'>
        <div className='product__info'>
        
            <p><strong>{ title }</strong></p>
            <p><small>{ details }</small></p>
            <p className='product__price'>
                <small>$</small>
                <strong>{ price }</strong>
            </p>
        
            <div className='product__rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p key={i}>⭐</p>
                ))}
            </div>
        </div>

        <img src={ image } alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
 
    </div>
  )
}

export default Product
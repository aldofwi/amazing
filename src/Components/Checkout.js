/* eslint-disable no-unused-vars */
import React from 'react'
import "../Styles/Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider'
import FlipMove from "react-flip-move"

function Checkout() {

    const [{ basket, user }] = useStateValue(); 
    console.log("BASKET >>> ", basket);

    // WORK : PRODUCT Hover, Done.
    // HOMEWORK : QUANTITY Product, Done.
    // MY HOMEWORK : Username SetUser

  return (

    <div className="checkout">
        <div className="checkout__left">
        
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
            
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">Your Shopping Basket</h2>

                <FlipMove
                    duration={500}
                    delay={0}
                    easing={'cubic-bezier(0.39, 0, 0.45, 1.4)'}
                    staggerDurationBy={30}
                    staggerDelayBy={10}
                    >
                { basket.map(item => (
                    <div key={item.title}>
                        <CheckoutProduct 
                            id={item.id}
                            details={item.details}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            quantity={item.quantity}
                            key={item.id}
                        />
                    </div>
                ))
                }
                </FlipMove>
            </div>
        </div>

        <div className="checkout__right">

            <Subtotal />

        </div>
    </div>
  )
}

export default Checkout
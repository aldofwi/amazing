/* eslint-disable no-unused-vars */
import React from 'react'
import "../Styles/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';

// Build the subtotal price AND SUM the proper number of items in the basket[0].price ;
// console.log("Basket Size = ", basket.length);
// console.log("TOTAL = ", sum, "€");
function Subtotal() {

    const navigate = useNavigate(); 
    const [{ basket }, dispatch] = useStateValue();

  return (

    <div className='subtotal'>
        
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        { /* Part of the Homework (value props) */ }
                        Subtotal ({basket?.length} {basket.length>1?"items":"item"}):
                        <strong> {value} </strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type= "checkbox" /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        
        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>

  )
}

export default Subtotal
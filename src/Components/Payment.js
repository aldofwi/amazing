import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../axios';
import { db } from "../firebase"
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import "../Styles/Payment.css"

function Payment() {

    // eslint-disable-next-line no-unused-vars
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate(); 

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // Generate the special stripe secret which allow us to charge a customer
        const getClientSecret = async () => {
            
            // const response = await axios.post(`/payments/create?total=${getBasketTotal(basket)*100}`); 
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunite (cents)
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log("THE SECRET IS >>>", clientSecret);

    const handleSubmit = async (event) => {
        // fancy stripe stuff.....
        event.preventDefault(); // No refreshing
        setProcessing(true);

        // eslint-disable-next-line no-unused-vars
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(( {paymentIntent} ) => {
            // Payment Intent = Payment confirmation
            // Store the Order into Firestore
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            });

            navigate('/orders', {replace: true});
        })
    }

    const handleChange = event => {
        // Listen for changes in the Card Element
        // and Displays any errors as the customer types their card details.
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
    
        <div className="payment__container">
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} {basket.length>1?"items":"item"}</Link>)
            </h1>

            {/* Payment section - deliver address */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Deliver address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            
            {/* Payment section - review items */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items & Delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item => (
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
                    ))}
                </div>
            </div>


            {/* Payment section - Payment method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className="payment__priceContainer">
                        <CurrencyFormat 
                            renderText={(value) => (
                                <h3>Order Total : {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>
                        </div>

                        {/* Errors */}
                        {error && <div>{error}</div>}

                    </form>

                </div>
            </div>

        </div>
    
    </div>
  )
}

export default Payment
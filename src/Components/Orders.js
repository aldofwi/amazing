import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider';
import { db } from '../firebase';
import Order from './Order';
import "../Styles/Orders.css"

function Orders() {

  const [orders, setOrders] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {

    if(user) {
        db  
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else { setOrders([]) }
    
  }, [user])

  return (

    <div className='orders'>

        <h1>Your Orders</h1>

        <div className="orders__order">
            {orders?.map(order => (
                <Order 
                    order={order} 
                    key={order.id}    
                />
            ))}
        </div>

    </div>
  )
}

export default Orders
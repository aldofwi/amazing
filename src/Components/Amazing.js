import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../Styles/Amazing.css';
import Header   from "./Header";
import Home     from "./Home";
import Checkout from "./Checkout";
import Login    from "./Login";
import Orders   from "./Orders";
import Payment  from "./Payment";
import { auth } from "../firebase";
import { useStateValue } from '../StateProvider';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51L5uY2Aa1NOGB95Z1aHMjaVWrfiyEzIDllYNOOKfkl9IzMUImUTBlCoEpv4t4SUeCMxHWXUH7kkQ5BfQakZbT3Gf00N7LAScze");

// CTRL + Space for Auto import
// Always keep Home at end of Switch/Route
function Amazing() {
// eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {

      console.log('THE USER IS >>> ', authUser);
      
      if (authUser) {
        // the user just logged in / the user was logged in.
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out.
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])

  return (

    <div className="Amazing">
    <Router>
    
      <Routes>
        
          <Route path="/login" element={<><h1><Login /></h1></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/orders" element={<><Header /><Orders /></>} />
          <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements></>} />
          <Route path="/" element={<><Header /><Home /></>} />
      
      </Routes> 
    </Router>
    </div>
  );
}

export default Amazing;

import React from 'react'
import "../Styles/Home.css"
import Product from './Product'

function Home() {

  return (
    <div className='home'>
    
        <div className="home__container">
        
            <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""
             />
       
          <div className="home__row">

            <Product 
              id="12321341"
              title="The Lean Start-up"
              details="How Constant Innovation Creates Radically Successful Business Paperback"
              price={11.96}
              image="https://m.media-amazon.com/images/I/81RCff1NpnL.jpg"
              rating={3} 
            />

            <Product 
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking"
              details="Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.99}
              image="https://m.media-amazon.com/images/I/81rgIlDm6wL._AC_SL1500_.jpg"
              rating={4} 
            />

          </div>

          <div className="home__row">
          
            <Product 
              id="49538091"
              title="Fitbit Charge 3 Fitness | Activity Tracker"
              details=" Graphite / Black (1.63 x 4.04 x 8.9 inches)"
              price={164.59}
              image="https://media.s-bol.com/pPzWrBwW4MX/550x772.jpg"
              rating={3} 
            />
            <Product 
              id="49538088"
              title="Amazon Echo (3rd generation)"
              details="Smart speaker with Alexa | Charcoal Fabric"
              price={98.99}
              image="https://media.kohlsimg.com/is/image/kohls/3979967_Charcoal?wid=600&hei=600&op_sharpen=1"
              rating={5} 
            />
            <Product 
              id="49538001"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)"
              details="Silver (4th Generation)"
              price={598.99}
              image="https://m.media-amazon.com/images/I/81okPLS2ZVL.jpg"
              rating={4} 
            />
          
          </div>

          <div className="home__row">
          
            <Product 
              id="495380888"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              details="Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              image="https://m.media-amazon.com/images/I/81I+Tx8CFYL._AC_SL1500_.jpg"
              rating={4} 
            />

          </div>
       
        </div>

    </div>
  )

}

export default Home
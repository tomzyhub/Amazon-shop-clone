import React from 'react';
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
          <div className="home_container">
              <img className='home_img' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGrandTourS4/CHMA_S4SP2_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB413892615_.jpg' alt='' />
          </div>

         <div className="home_row">
             <Product  title='the lean startup ' price={29.9} image={'https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'}/>
              <Product />
              
             {/* <Product /> */}
             
             </div>

             <div className="home_row">
             <Product  />
              <Product />
              <Product />
              
             </div>

             <div className="home_row">
             <Product />
             
             </div>
        </div>
    )
}

export default Home

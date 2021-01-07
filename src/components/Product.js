import React from 'react'
import './Product.css'

function product({title,image,price,rating}) {
    return (
        <div className='product'>
            
            <div className='product_info'>
              <p>{title}</p>
              <p className="product_price">
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
             
              <div className='product_rating'>
    <p>{rating}</p>
                
              </div>
            </div>
            <img src='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg' alt='' />

            <button className='button'>Add to Basket</button>
        </div>
    )
}

export default product

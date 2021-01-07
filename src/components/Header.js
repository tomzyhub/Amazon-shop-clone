import React from 'react'
import '../components/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
function Header() {
    return (
        <div className='header'>
            <img  
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt='logo'
            />

            <div className="header_search">
                <input 
                className="header_searchinput" 
                type="text" 
                placeholder="search items" />
                <SearchIcon className='header_searchIcon' />
                
            </div>

            <div className="header_nav">
                     <div className="header_options">
                      <span className="header_optionLineOne">
                         Hello Guest
                      </span>
                      <span className="header_optionLineTwo">
                         sign in 
                        </span>
                 
                     </div>

                     <div className="header_options">
                     <span className="header_optionLineOne">
                         Returns
                      </span>
                      <span className="header_optionLineTwo">
                          & Orders
                        </span>
                     </div>
                     <div className="header_options">
                     <span className="header_optionLineOne">
                         Your
                      </span>
                      <span className="header_optionLineTwo">
                         Prime
                        </span>
                     </div>

                     <div className='header_optionBasket'>
                         <ShoppingBasketIcon />

                         <span className='header_optionLineTwo header_basketCount'>0</span>
                         </div>    
                     
            </div>
            
        </div>
    )
}

export default Header

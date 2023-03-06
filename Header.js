import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header()
{
    return (
        <div className='header'>
            <img 
            className="header_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4HzJotxAk4bO7gSjwxr3mzuSNcci18UoCPw&usqp=CAU" />
            <div className="header_search">
                <input
                className="header_searchInput" type="text" />
                <SearchIcon
                className="header_searchIcon"/>
                
            </div>
            <div className="header_nav">
                <div className='header_option'>
                    <span className='header_optionLineOne'>Sign In</span>

                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your Orders</span>

                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Books for Donation</span>

                </div>
                <div className='header_option'>
                    <span className='headeroptionLineOne'>About Us</span>
                </div>
             <div className="header_optionBasket"><ShoppingBasketIcon/>
             <span className="header_optionLineTwo header_basketCount">0</span>
             </div>
            </div>



        </div>
    );
}
export default Header
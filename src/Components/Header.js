import React from 'react'
import '../Styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {

    // eslint-disable-next-line no-unused-vars
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentification = () => {
        if(user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to="/">
            <img
                className="header__logo" 
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                alt=''
            />
        </Link>
        

        <div className="header__search">
            <input 
                className="header__searchInput" 
                type="text" />
            <SearchIcon className="header__searchIcon" />
                { /* logo */ }
        </div>

        <div className="header__nav">

        <Link to={!user && "/login"}>
            <div onClick={handleAuthentification} className="header__option">
                <span className="header__optionLineOne">Hello {user ? user.email : "Guest"}</span>
                <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
            </div>
        </Link>
        <Link to={"/orders"}>
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
        </Link>

            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingCartOutlined />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>

        </div>

    </div>
  )
}

export default Header
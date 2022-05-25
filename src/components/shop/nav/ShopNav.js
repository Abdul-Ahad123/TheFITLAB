import React from 'react';
import { Link } from 'react-router-dom';
import './ShopNav.css';
import logo from "../../../images/logo.png";

 const ShopNav = ({setshow,size}) => {
  return (
        <nav className="shopnav">
          <Link to="/" className='logo'>
          <img src={logo} alt='logo' />
        </Link>
        <div className='cart' onClick={()=>{setshow(false)}}>
        <span>
            <i className="fas fa-cart-plus"></i>
        </span>
        <span>{size}</span>
        </div>
        </nav>
  )
}
export default ShopNav;
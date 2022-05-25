import React from 'react'
import logo from "../../images/mainlogo.png";
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    
    return (
    <nav className="nav">
        <Link to="/" className='logo'>
        <img src={logo} alt='logo' />
        </Link>

    <ul className='menu ms-auto'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/feature'>Features</Link></li>
        <li><Link to='/classes-card'>Classes</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/about-us'>About</Link></li>
        <li>
            <Link to='/login' className='btn btn-outline-light px-2 ms-4 rounded-pill'>
             <i className='fa fa-sign-in me-2'> Login</i>
            </Link>
        </li>
    </ul>

    {/* <Link to='/register' className='btn btn-outline-light px-2 ms-4 rounded-pill'>
        <i className='fa fa-user-plus me-2'> Register</i>
    </Link> */}
</nav>
  )
  }

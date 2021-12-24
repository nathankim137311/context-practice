import React from 'react'
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration:'none',
    }
  return (
    <nav>
        <h3>Fake Store</h3>
        <ul className='nav-links'>
            <Link style={navStyle} to='/cart'>
                <li>Cart</li>
            </Link>
            <Link style={navStyle} to='/'>
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
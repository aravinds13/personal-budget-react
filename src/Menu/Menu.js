// import React from "react";
import {
    Link
  } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <ul>
                <li><Link aria-label="Home" to="/">Home</Link></li>
                <li><Link aria-label="About" to="/about">About</Link></li>
                <li><Link aria-label="Login" to="/login">Login</Link></li>
                <li><Link aria-label="Google" to="https://google.com">Google</Link></li>
            </ul>
        </nav>
    );
  }
  
  export default Menu;
  
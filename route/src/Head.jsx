import React from 'react'
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <nav > 
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/login">LOGIN</Link>
    </nav>
  )
}

export default Head ;

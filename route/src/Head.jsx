import React from 'react'
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <nav > 
        <Link to="/react-routing/">HOME</Link>
        <Link to="/react-routing/about">ABOUT</Link>
        <Link to="/react-routing/contact">CONTACT</Link>
        <Link to="/react-routing/login">LOGIN</Link>
    </nav>
  )
}

export default Head ;

import React from 'react';
// import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className='nav-wrapper red darken-3' >
      <div className="container">
        <a className="brand-logo">Site name</a>
        <ul className='right' >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;

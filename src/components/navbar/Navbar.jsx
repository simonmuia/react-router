import React, { useCallback, useEffect, useRef, useState} from 'react';

import './navbar.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

const [isMenuExpanded, setIsMenuExpanded] = useState(false);

const expandMenuHandler = useCallback(
  () => {
	setIsMenuExpanded(!isMenuExpanded)
  },
  [isMenuExpanded],
)
const menuRef = useRef(null);

// listen on clicking outside
useEffect(() => {
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuExpanded(false);
    }
  };

  document.addEventListener('mousedown', handleOutsideClick);

  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, [menuRef]);




  return (
    <navbar>
      <Link className='brand' to='/'>
        <img src="./images/logo512.png" alt="logo" />
      </Link>
	 <div ref={menuRef} className={ isMenuExpanded ? "navlinks expanded" : "navlinks"}>
        <NavLink className='navlink' to='/about'>About</NavLink>
        <NavLink className='navlink' to='/blog'>Our Blog</NavLink>
        <NavLink className="navlink" to='/contact'>Contact Us</NavLink>
      </div>
      <div className="mobile-menu">
        <div className="hamburger-wrapper" onClick={expandMenuHandler}>
          <RxHamburgerMenu/>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;

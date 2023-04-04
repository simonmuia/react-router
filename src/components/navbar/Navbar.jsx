import React, { useCallback, useState} from 'react';

import './navbar.css';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {

const [isMenuExpanded, setIsMenuExpanded] = useState(false);

const expandMenuHandler = useCallback(
  () => {
	setIsMenuExpanded(!isMenuExpanded)
  },
  [isMenuExpanded],
)





  return (
    <navbar>
      <div className='brand'>
        <img src="./images/logo512.png" alt="logo" />
      </div>
	 <div className={ isMenuExpanded ? "navlinks expanded" : "navlinks"}>
        <p className="navlink">About</p>
        <p className="navlink">Contact Us</p>
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

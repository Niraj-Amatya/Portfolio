import React from 'react';
import './menu.css';

const menu = ({ menuIsOpen, handleMenu }) => {
  // menuIsOpen is the state passed as a prop from the App component and can be either true or false
  // handleMenu is the function passed from the app. It is called from all the nav list item when clicked.
  // helper class to hide or show menu list when hamburger icon is clicked.
  // active class is applied to nav and nav item is shown
  const helperClass = menuIsOpen ? 'nav active' : 'nav';
  return (
    <nav className={helperClass}>
      <ul className="nav__lists">
        <li className="nav__lists__item">
          <a href="#intro" onClick={handleMenu}>
            Home
          </a>
        </li>
        <li className="nav__lists__item">
          <a href="#portfolio" onClick={handleMenu}>
            Portfolio
          </a>
        </li>
        <li className="nav__lists__item">
          <a href="#work" onClick={handleMenu}>
            Works
          </a>
        </li>
        <li className="nav__lists__item">
          <a href="#testimonials" onClick={handleMenu}>
            Testimonials
          </a>
        </li>
        <li className="nav__lists__item">
          <a href="#contact" onClick={handleMenu}>
            Contatct
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default menu;

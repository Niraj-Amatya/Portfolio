import React from 'react';
import './menu.css';

const menu = ({ menuIsOpen, handleMenu }) => {
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

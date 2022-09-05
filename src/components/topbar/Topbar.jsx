import React from 'react';
import './topbar.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Topbar = ({ handleMenu, menuIsOpen }) => {
  // menuIsOpen is the state passed as a prop from the App component and can be either true or false depending on the user click events
  // handleMenu is the function passed from the app. It will change the state of menuIsOpen
  // helper class to change the style of header, logo and hamburge  when hamburger icon is clicked and state changes.
  const headerClassHelper = menuIsOpen ? 'header active' : 'header';

  const logoClassHelper = menuIsOpen
    ? 'header__logo header__logo-change'
    : 'header__logo';

  return (
    <header className={headerClassHelper}>
      <div className="header__wrapper">
        <div className="header__left">
          <a href="#intro" className={logoClassHelper}>
            N/a
          </a>
          <div className="contact-me">
            <BsFillPersonFill size={25} />
            <span>0421883784</span>
          </div>
          <div className="contact-me">
            <MdEmail size={25} />
            <span>amatyaraj@gmail.com</span>
          </div>
        </div>
        <div className="header__right" onClick={handleMenu}>
          {!menuIsOpen ? (
            <AiOutlineMenu size={30} />
          ) : (
            <AiOutlineClose size={30} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;

import React from 'react';
import './topbar.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Topbar = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <a href="#intro" className="header__logo">
            N
          </a>
          <div className="contact-me">
            <BsFillPersonFill size={25} />
            <span>0421883784</span>
          </div>
          <div className="contact-me">
            <HiOutlineMail size={25} />
            <span>amatyaraj@gmail.com</span>
          </div>
        </div>
        <div className="header__right">hamburger</div>
      </div>
    </header>
  );
};

export default Topbar;

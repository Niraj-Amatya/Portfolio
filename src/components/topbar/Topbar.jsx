import React, { useState } from 'react';
import './topbar.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Topbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
        <div
          className="header__right"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {!menuIsOpen ? (
            <AiOutlineMenu size={30} />
          ) : (
            <AiOutlineClose size={30} />
          )}

          {/* <div className="header__hamburger">
            <span className="hamburger__line1"></span>
            <span className="hamburger__line2"></span>
            <span className="hamburger__line3"></span>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Topbar;

import React from 'react';
import './topbar.css';

const Topbar = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <a href="#intro" className="header__logo">
            NA
          </a>
        </div>
        <div className="header__right">hamburger</div>
      </div>
    </header>
  );
};

export default Topbar;

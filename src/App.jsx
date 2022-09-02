import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import './app.css';

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="app">
      <Topbar menuIsOpen={menuIsOpen} handleMenu={menuHandler} />
      <Menu menuIsOpen={menuIsOpen} handleMenu={menuHandler} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default App;

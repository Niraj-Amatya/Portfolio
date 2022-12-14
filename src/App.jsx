import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
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
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

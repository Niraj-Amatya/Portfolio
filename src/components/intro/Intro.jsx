import React, { useEffect, useRef } from 'react';
import './intro.css';
import { IoIosArrowDown } from 'react-icons/io';
import { init } from 'ityped';

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      backSpeed: 40,
      strings: ['Javascript', 'React', 'Redux', 'HTML', 'CSS'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="intro__left">
        <div className="intro__left__wrapper">
          <h3>Hi, I'm</h3>
          <h1>Niraj Amatya</h1>
          <h2>Web Developer</h2>
          <div className="intro__background__img">
            <h3 ref={textRef}></h3>
          </div>
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__right__wrapper">
          <a href="#portfolio">
            <IoIosArrowDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;

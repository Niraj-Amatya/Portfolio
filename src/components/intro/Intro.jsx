import React, { useEffect, useRef } from 'react';
import './intro.css';
import { IoIosArrowDown } from 'react-icons/io';
import { init } from 'ityped';
import Cta from '../intro/cta/Cta';
import Socials from './socials/Socials';

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
    <section className="hero" id="intro">
      <div className="hero__content">
        <h2 className="heading-primary">Hi, I'm Niraj Amatya</h2>
        <h1 className="heading-secondary">
          Web Developer <span className="divider-line">|</span>
          <span className="text-slide" ref={textRef}></span>
        </h1>
        <div className="hero__info">
          <p className="text-primary">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications.
          </p>
          <Cta />
        </div>

        {/* <div className="intro__background__img"></div> */}
      </div>
      <div className="hero__socials">
        <Socials />
      </div>
      <div className="hero__scroll__down">
        <a href="#about">
          <IoIosArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default Intro;

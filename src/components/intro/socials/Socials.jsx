import React from 'react';
import './socials.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';

const Socials = () => {
  return (
    <>
      <div className="hero__social">
        <a
          href="https://www.linkedin.com/in/niraj-amatya/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__social-icon-link"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div className="hero__social">
        <a
          href="https://twitter.com/?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__social-icon-link"
        >
          <BsTwitter />
        </a>
      </div>
      <div className="hero__social">
        <a
          href="https://github.com/Niraj-Amatya?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__social-icon-link"
        >
          <AiOutlineGithub />
        </a>
      </div>
    </>
  );
};

export default Socials;

import React from 'react';
import './footer.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="main-container main-container-footer">
        <div className="main__footer__upper">
          <div className=" main__footer__row main__footer__row-1">
            <h2 className="footer__heading heading-sm">
              <span>Social</span>
            </h2>
            <div className="main__footer__socials">
              <a
                href="https://www.linkedin.com/in/niraj-amatya/"
                target="_blank"
                rel="noopener noreferrer"
                className="main__footer__social__link"
              >
                <AiFillLinkedin />
              </a>

              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="main__footer__social__link"
              >
                <BsTwitter />
              </a>
              <a
                href="https://github.com/Niraj-Amatya?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="main__footer__social__link"
              >
                <AiOutlineGithub />
              </a>
              <a
                href="mailto:amatyaraj@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="main__footer__social__link"
              >
                <HiOutlineMail />
              </a>
            </div>
          </div>
          <div className="main__footer__row main__footer__row main__footer__row-2">
            <h2 className="footer__heading heading-sm">Niraj Amatya</h2>
            <p className="main__footer__short__desc">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications.
            </p>
          </div>
        </div>
        <div className="main__footer__lower">
          © Copyright {new Date().getFullYear()}. Made by
          <strong> Niraj Amatya</strong>
        </div>
      </div>
    </section>
  );
};

export default Footer;

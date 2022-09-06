import './about.css';
import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="main-container">
        <h2 className="heading">
          <span className="heading__sec-main">About Me</span>
          <span className="heading__sec-sub">
            Find more information about me and my current skills with
            programming.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content__main">
            <h3 className="about__content__title">Know me</h3>
            <div className="about__content__detail">
              <p className="about__content__detail-paragraph">
                I am a <strong>Frontend developer</strong> building frontend
                solution for better user experience.
              </p>
              <p className="about__content__detail-paragraph">
                I care about the projects and the team I work with. My goal as a{' '}
                <strong>Web Developer</strong> is to obtain a challenging and
                rewarding role, where I can further grow and utilise my skills
                to create simple yet elegant user experience.
              </p>
              <p className="about__content__detail-paragraph">
                I am open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow to my full potential. If you have a
                good opportunity that matches to my skills and experience please
                don't hesitate to <strong>Contact</strong> me.
              </p>
            </div>
          </div>
          <div className="about__content__skills"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

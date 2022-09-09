import './about.css';
import React from 'react';
import Button from '../UX/button/Button';

const About = () => {
  // my skills
  const mySkills = [
    { id: 1, skill: 'HTML' },
    { id: 2, skill: 'CSS' },
    { id: 3, skill: 'Javascript' },
    { id: 4, skill: 'React' },
    { id: 5, skill: 'Redux' },
    { id: 6, skill: 'Git' },
    { id: 7, skill: 'Github' },
    { id: 8, skill: 'Responsive Design' },
  ];
  return (
    <section className="about" id="about">
      <div className="main-container">
        <h2 className="heading">
          <span className="heading__sec-main">About Me</span>
          <span className="heading__sec-sub">
            Find more information about me and my current skills and knowledge
            about programming and coding.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content__main">
            <h3 className="about__content__title">Know me more!</h3>
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
            <Button
              btnDetails={{
                btnName: 'Contact me',
                className: 'btn btn-primary',
                link: '#contact',
              }}
            />{' '}
          </div>
          <div className="about__content__skills">
            <h3 className="about__content__title">My Skills</h3>
            {/* get all the skills from array */}
            <div className="skills">
              {mySkills.map((skill) => {
                return (
                  <div className="skills__skill" key={skill.id}>
                    {skill.skill}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

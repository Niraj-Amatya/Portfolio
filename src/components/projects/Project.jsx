import React from 'react';

import './project.css';
import Button from '../UX/button/Button';
import Img1 from '../../assets/project-1.png';
import { v4 as uuidv4 } from 'uuid';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Order Food Online',
      desc: 'An app to order food online using React',
      image: Img1,
      tech_stacks: ['React', 'Javascript', 'Css', 'HTML'],
      github_link:
        'https://github.com/Online-Orders/Order-online/blob/master/src/Components/UI/Input.js',
      website_link:
        'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content',
    },
    {
      id: 2,

      title: 'Tours Guide',
      desc: 'An app to order see places using React',
      image: Img1,
      tech_stacks: ['React', 'Javascript', 'Css'],
      github_link: 'https://github.com/Niraj-Amatya/Counter-App-Redux',
      website_link: 'https://www.youtube.com/watch?v=8nXqcugV2Y4',
    },
    {
      id: 3,
      title: 'Food Guide',
      desc: 'An app to order food online using React',
      image: Img1,
      tech_stacks: ['React', 'Javascript', 'Css', 'HTML'],
      github_link: 'https://github.com/Niraj-Amatya/buymysari',
      website_link:
        'https://www.hostinger.com/tutorials/web-developer-portfolio',
    },
  ];

  // looping through all the projects from array and returning to the frontend
  const allProject = projects.map((project) => (
    <div className="project__row" key={project.id}>
      <div className="project__row__img">
        <img
          src={project.image}
          alt="project react one"
          className="project__img"
        />
      </div>
      <div className="project__row__description">
        <h3 className="project__title">{project.title}</h3>
        <p className="project__desc">{project.desc}</p>
        <div className="tech__stacks">
          {/* getting array of tech stacks and looping thorugh aray to get individual stacks.
        used uuidv4 npm package to generate unique id for key   */}
          {project.tech_stacks.map((tech) => (
            <div className="tech__use" key={uuidv4()}>
              {tech}
            </div>
          ))}
        </div>
      </div>
      <div className="project__btn">
        <Button
          btnDetails={{
            btnName: 'Github',
            className: 'btn btn-sm',
            link: project.github_link,
            target: '_blank',
          }}
        />
        <Button
          btnDetails={{
            btnName: 'Website',
            className: 'btn btn-primary btn-sm',
            link: project.website_link,
            target: '_blank',
          }}
        />
      </div>
    </div>
  ));

  return (
    <section className="project" id="project">
      <div className="main-container">
        <h2 className="heading">
          <span className="heading__sec-main">Projects</span>
          <span className="heading__sec-sub">
            This includes all the personal project that I have made during my
            journey to be a developer.
          </span>
        </h2>
        {/* Content.................... */}
        <div className="project__contents">{allProject}</div>
      </div>
    </section>
  );
};

export default Project;

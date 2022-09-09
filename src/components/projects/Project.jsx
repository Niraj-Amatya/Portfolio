import React from 'react';
import Img1 from '../../assets/project-1.png';
import ProjectView from './ProjectView';

import './project.css';

const Project = () => {
  const myProjects = [
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
    {
      id: 4,
      title: 'Food Guide',
      desc: 'An app to order food online using React',
      image: Img1,
      tech_stacks: ['React', 'Javascript', 'Css', 'HTML'],
      github_link: 'https://github.com/Niraj-Amatya/buymysari',
      website_link:
        'https://www.hostinger.com/tutorials/web-developer-portfolio',
    },
    {
      id: 5,
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
  const projects = myProjects.map((project) => (
    <ProjectView
      key={project.id}
      id={project.id}
      title={project.title}
      desc={project.desc}
      img={project.image}
      techs={project.tech_stacks}
      github_link={project.github_link}
      website_link={project.website_link}
    />
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
        <div className="project__contents">{projects}</div>
      </div>
    </section>
  );
};

export default Project;

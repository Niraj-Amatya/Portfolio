import React from 'react';
import Img1 from '../../assets/project-1.png';
import Img2 from '../../assets/project-2.png';
import Img3 from '../../assets/project-3.png';
import Img4 from '../../assets/project-4.png';

import ProjectView from './ProjectView';

import './project.css';

const Project = () => {
  const myProjects = [
    {
      id: 1,
      title: 'Foodie',
      desc: 'Order your favourite food.',
      image: Img1,
      tech_stacks: [
        'React',
        'Javascript',
        'Css',
        'HTML',
        'Git',
        'Github',
        'Axios',
        'Firebase',
      ],
      github_link: 'https://github.com/Online-Orders/Order-online',
      website_link: 'https://hifoodie.netlify.app/',
    },
    {
      id: 2,

      title: 'Portfolio',
      desc: 'An app to showcase all my projects',
      image: Img2,
      tech_stacks: ['React', 'Javascript', 'Css', 'HTML', 'Git', 'Github'],
      github_link: 'https://github.com/Niraj-Amatya/Portfolio',
      website_link: 'https://niraj-amatya.netlify.app/',
    },
    {
      id: 3,
      title: 'Your Todo Lists',
      desc: 'Manage your Todo lists',
      image: Img3,
      tech_stacks: ['React', 'Javascript', 'Css', 'HTML', 'Git', 'Github'],
      github_link: 'https://github.com/Niraj-Amatya/Your-Todo-Lists',
      website_link: 'https://listyourtodos.netlify.app/',
    },
    {
      id: 4,
      title: 'GiftCart',
      desc: 'An app to gift your loved ones - On Progress',
      image: Img4,
      tech_stacks: [
        'React',
        'Javascript',
        'Css',
        'HTML',
        'Redux',
        'Redux-Thunks',
      ],
      github_link:
        'https://github.com/Niraj-Amatya/Shopping-Carts---Redux-thunks',
      website_link: 'https://giftcart.netlify.app/',
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

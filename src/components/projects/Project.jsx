import React from 'react';
import Img1 from '../../assets/project-1.png';
import Img2 from '../../assets/project-2.png';
import Img3 from '../../assets/project-3.png';

import ProjectView from './ProjectView';

import './project.css';

const Project = () => {
  const myProjects = [
    {
      id: 1,
      title: 'Foodie',
      desc: 'Order you favourite food',
      image: Img1,
      tech_stacks: [
        'React',
        'HTML',
        'CSS',
        'Javascript',
        'Axios',
        'Firebase',
        'React-EmailJS',
        'Git',
        'Github',
      ],
      github_link: 'https://github.com/Online-Orders/Order-online',
      website_link: 'https://hifoodie.netlify.app/',
    },
    {
      id: 2,

      title: 'Personal Portfolio',
      desc: 'An app to showcase projects I have built.',
      image: Img2,
      tech_stacks: [
        'React',
        'Javascript',
        'Css',
        'HTML',
        'Github',
        'Git',
        'React-EmailJS',
      ],
      github_link: 'https://github.com/Niraj-Amatya/Portfolio',
      website_link: 'https://niraj-amatya.netlify.app/',
    },
    {
      id: 3,
      title: 'Blogs',
      desc: 'Blogs from different Author',
      image: Img3,
      tech_stacks: [
        'Redux',
        'Redux-Thunk',
        'CreateAsyncThunk',
        'React',
        'Javascript',
        'Css',
        'HTML',
        'date-fns',
        'Git',
        'Github',
      ],
      github_link: 'https://github.com/Niraj-Amatya/Blog-post',
      website_link: 'https://getblogs.netlify.app/',
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

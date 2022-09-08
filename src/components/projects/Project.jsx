import React from 'react';

import './project.css';
import Button from '../UX/button/Button';
import Img1 from '../../assets/project-1.png';

const Project = () => {
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
        <div className="project__contents">
          <div className="project__row">
            <div className="project__row__img">
              <img
                src={Img1}
                alt="project react one"
                className="project__img"
              />
            </div>
            <div className="project__row__description">
              <h3 className="project__title">Order Food Online</h3>
              <p className="project__desc">
                An app to order food online using React
              </p>
            </div>
            <div className="project__btn">
              <Button
                btnDetails={{
                  btnName: 'Github',
                  className: 'btn btn-sm',
                  link: 'https://github.com/Online-Orders/Order-online/blob/master/src/Components/UI/Input.js',
                  target: '_blank',
                }}
              />
              <Button
                btnDetails={{
                  btnName: 'Website',
                  className: 'btn btn-primary btn-sm',
                  link: 'https://github.com/Online-Orders/Order-online/blob/master/src/Components/UI/Input.js',
                  target: '_blank',
                }}
              />
            </div>
          </div>

          {/* ......................... */}
          <div className="project__row">
            <div className="project__row__img">
              <img
                src={Img1}
                alt="project react one"
                className="project__img"
              />
            </div>
            <div className="project__row__description">
              <h3 className="project__title"></h3>
              <p className="project__desc"></p>
            </div>
            {/* <Button btnName="Github" /> */}
          </div>
          {/* ......................... */}
          <div className="project__row">
            <div className="project__row__img">
              <img
                src={Img1}
                alt="project react one"
                className="project__img"
              />
            </div>
            <div className="project__row__description">
              <h3 className="project__title"></h3>
              <p className="project__desc"></p>
            </div>
            {/* <Button btnName="Github" /> */}
          </div>
          {/* ......................... */}
          <div className="project__row">
            <div className="project__row__img">
              <img
                src={Img1}
                alt="project react one"
                className="project__img"
              />
            </div>
            <div className="project__row__description">
              <h3 className="project__title"></h3>
              <p className="project__desc"></p>
            </div>
            {/* <Button btnName="Github" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

import React, { useState } from 'react';
import Button from '../UX/button/Button';
import { v4 as uuidv4 } from 'uuid';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import './projectView.css';

const ProjectView = ({
  id,
  title,
  desc,
  img,
  techs,
  github_link,
  website_link,
}) => {
  const [stackShown, setStackShown] = useState(false);

  return (
    <div className="card">
      <div className="project__row">
        <div className="project__row__img">
          <img src={img} alt="project react one" className="project__img" />
        </div>
        <div className="project__row__description">
          <h3 className="project__title">{title}</h3>
          <p className="project__desc">{desc}</p>
          <div
            className="tech__stacks__info"
            onClick={() => setStackShown(!stackShown)}
          >
            <span>{stackShown ? 'Hide' : 'Tech Used'}</span>
            {stackShown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          {stackShown ? (
            <div className="tech__stacks">
              {/* getting array of tech stacks and looping thorugh aray to get individual stacks.
        used uuidv4 npm package to generate unique id for key   */}
              {techs.map((tech) => (
                <div className="tech__use" key={uuidv4()}>
                  {tech}
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="project__btn">
          <Button
            btnDetails={{
              btnName: 'Github',
              className: 'btn__custom btn__custom-sm',
              link: github_link,
              target: '_blank',
            }}
          />
          <Button
            btnDetails={{
              btnName: 'Website',
              className: 'btn__custom btn__custom__primary btn__custom-sm',
              link: website_link,
              target: '_blank',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectView;

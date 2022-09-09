import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <>
      <a
        href={props.btnDetails.link}
        className={props.btnDetails.className}
        target={props.btnDetails.target ? props.btnDetails.target : ''}
      >
        {props.btnDetails.btnName}
      </a>
    </>
  );
};

export default Button;

import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <>
      <a href="#contact" className="btn">
        {props.btnName}
      </a>
    </>
  );
};

export default Button;

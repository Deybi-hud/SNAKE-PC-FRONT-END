import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button className={`boton ${className}`} {...props}> {children}</button>
  );
};

export default Button;

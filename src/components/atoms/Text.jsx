import React from 'react';
import '../../styles/atoms/Text.css';

const Text = ({ children, as = 'p', className = '', ...props }) => {
  const Tag = as;
  return <Tag className={className} {...props}>{children}</Tag>;
};

export default Text;

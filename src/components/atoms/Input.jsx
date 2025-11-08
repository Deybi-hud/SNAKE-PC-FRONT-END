import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, error, required = false, className = '', ...props }) => {
  return (
    <div className='login-container-input'>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        required={required}
        style={{
          border: error ? '2px solid var(--clr-red)' : ''
        }}
        {...props}
      />
      {error && (
        <span className="error-message">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
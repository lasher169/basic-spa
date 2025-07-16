import React from 'react';
import './ButtonStyles.css'; // Importing the CSS for styling

const onClick = (() => {
    console.log("clicked");
})

const Button = ({ label }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
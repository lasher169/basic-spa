import React from 'react';
import './ButtonStyles.css'; // Importing the CSS for styling


const redirect = ((nextUrl) => {
    window.location.href = nextUrl;
});

const Button = ({ label, styling, nextUrl }) => {
  return (
    <button className={styling} onClick={() => redirect(nextUrl)}>
      {label}
    </button>
  );
};

export default Button;
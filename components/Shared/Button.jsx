import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`rounded-md bg-black px-4 py-2 text-white transition-colors duration-300 hover:bg-orange-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  const base = 'px-4 py-2 rounded-md font-semibold transition-all';
  const classes = {
    primary: `${base} bg-orange-600 text-white hover:bg-orange-700`,
    outline: `${base} border border-gray-300 text-gray-700 bg-white hover:bg-gray-50`,
    ghost: `${base} bg-transparent text-gray-700 hover:bg-gray-100`,
  };

  return (
    <button className={classes[variant]} {...rest}>
      {children}
    </button>
  );
};

export default Button;

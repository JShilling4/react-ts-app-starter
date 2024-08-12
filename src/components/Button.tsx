import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  ariaLabel?: string;
};

const Button = ({ children, onClick, className, ariaLabel }: ButtonProps) => {
  return (
    <button
      className={className ? `${className} bg-blue-500` : ''}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;

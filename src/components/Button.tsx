import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  ariaLabel?: string;
};

const Button = ({ children, onClick, className, ariaLabel }: ButtonProps) => {
  const defaultClasses = 'btn';

  return (
    <button
      className={className ? `${className} ${defaultClasses}` : defaultClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export { Button };

import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  ariaLabel?: string;
};

const Button = ({
  children,
  onClick,
  className = '',
  ariaLabel,
}: ButtonProps) => {
  const defaultClasses = 'btn';

  return (
    <button
      className={`${className} ${defaultClasses}`.trim()}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };

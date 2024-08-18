import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  ariaLabel?: string;
  variant?: keyof typeof ButtonVariant;
};

export const ButtonVariant = {
  'round-icon': 'btn btn-circle btn-ghost btn-sm',
  'square-icon': 'btn btn-square btn-ghost btn-sm',
  base: 'btn cursor-pointer',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

const Button = ({
  children,
  onClick,
  className = '',
  ariaLabel,
  variant = 'base',
}: ButtonProps) => {
  const classNames = `${className} ${ButtonVariant[variant]}`.trim();

  return (
    <button className={classNames} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };

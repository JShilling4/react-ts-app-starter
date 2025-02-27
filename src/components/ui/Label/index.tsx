import { ReactNode } from 'react';

type LabelProps = {
  className?: string;
  children: ReactNode;
  htmlFor: string;
};

const Label = ({ className = '', children, htmlFor }: LabelProps) => {
  const defaultClasses = '';

  return (
    <label
      htmlFor={htmlFor}
      className={`${className} ${defaultClasses}`.trim()}
    >
      {children}
    </label>
  );
};

export { Label };

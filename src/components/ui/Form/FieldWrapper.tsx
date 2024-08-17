import { ReactNode } from 'react';

export type FieldWrapperProps = {
  className?: string;
  children: ReactNode;
};

const FieldWrapper = ({ className = '', children }: FieldWrapperProps) => {
  const defaultClasses = '';

  return (
    <div className={`${className} ${defaultClasses}`.trim()}>{children}</div>
  );
};

export { FieldWrapper };

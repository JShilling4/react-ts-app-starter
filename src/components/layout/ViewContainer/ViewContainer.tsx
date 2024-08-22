import { ReactNode } from 'react';

export type ViewContainerProps = {
  children: ReactNode;
  className?: string;
};

const ViewContainer = ({ children, className = '' }: ViewContainerProps) => {
  const defaultClasses = `p-10`;
  const classNames = `${className} ${defaultClasses}`.trim();

  return <div className={classNames}>{children}</div>;
};

export { ViewContainer };

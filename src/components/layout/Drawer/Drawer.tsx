import { ReactNode } from 'react';

type DrawerProps = {
  className?: string;
  isVisible: boolean;
  children: ReactNode;
};

const Drawer = ({ className = '', isVisible, children }: DrawerProps) => {
  const defaultClasses = `transition-size duration-300 py-6 overflow-hidden ${isVisible ? 'w-80' : 'w-0 p-0'}`;
  const classNames = `${defaultClasses} ${className}`.trim();

  return <div className={classNames}>{children}</div>;
};

export { Drawer };

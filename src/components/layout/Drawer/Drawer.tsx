import { ReactNode } from 'react';

type DrawerProps = {
  className?: string;
  isVisible: boolean;
  children: ReactNode;
};

const Drawer = ({ className = '', isVisible, children }: DrawerProps) => {
  const defaultClasses = `bg-blue-400 transition-size duration-300 py-6 overflow-hidden ${isVisible ? 'w-60 px-6' : 'w-0 p-0'}`;
  const classNames = `${className} ${defaultClasses}`.trim();

  return <div className={classNames}>{children}</div>;
};

export { Drawer };

import { ReactNode } from 'react';

type DrawerProps = {
  className?: string;
  isVisible: boolean;
  children: ReactNode;
  theme?: 'dark' | 'light';
  bgColor?: string;
};

const Drawer = ({
  className = '',
  isVisible,
  children,
  theme = 'dark',
  bgColor,
}: DrawerProps) => {
  const ThemeStyles = {
    dark: `text-white ${bgColor ?? 'bg-black'}`,
    light: `text-black ${bgColor ?? 'bg-gray-200'}`,
  };
  const defaultClasses = `${ThemeStyles[theme]} transition-size duration-300 py-6 overflow-hidden ${isVisible ? 'w-80' : 'w-0 p-0'}`;
  const classNames = `${defaultClasses} ${className}`.trim();

  return <div className={classNames}>{children}</div>;
};

export { Drawer };

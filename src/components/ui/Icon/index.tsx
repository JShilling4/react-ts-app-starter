import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconProps = {
  name: string;
  className?: string;
  size?: SizeProp;
  fixedWidth?: boolean;
  color?: string;
};

export const IconNames = {
  Search: 'fa-solid fa-magnifying-blass',
  Menu: 'fa-solid fa-bars',
  User: 'fa-solid fa-circle-user',
  Close: 'fa-solid fa-close',
  Home: 'fa-solid fa-house',
  Link: 'fa-solid fa-link',
} as const;
export type IconNames = (typeof IconNames)[keyof typeof IconNames];

const Icon = ({
  name,
  className,
  size = '2x',
  fixedWidth = false,
  color,
}: IconProps) => {
  const defaultClasses = '';
  const classNames = `${defaultClasses} ${className}`.trim();

  return (
    <FontAwesomeIcon
      icon={name as IconProp}
      className={classNames}
      size={size}
      fixedWidth={fixedWidth}
      color={color}
    />
  );
};

export { Icon };


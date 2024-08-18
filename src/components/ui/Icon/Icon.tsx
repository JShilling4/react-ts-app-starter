import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconProps = {
  name: string;
  className?: string;
  size?: SizeProp;
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

const Icon = ({ name, className, size = '2x' }: IconProps) => {
  const defaultClasses = '';
  const classNames = `${className} ${defaultClasses}`.trim();

  return (
    <FontAwesomeIcon
      icon={name as IconProp}
      className={classNames}
      size={size}
      color="white"
    />
  );
};

export { Icon };

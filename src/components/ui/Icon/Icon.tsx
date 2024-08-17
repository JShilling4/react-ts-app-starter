import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconProps = {
  name: string;
  className?: string;
};

export const IconNames = {
  Search: 'fa-solid fa-magnifying-blass',
  Menu: 'fa-solid fa-bars',
  User: 'fa-solid fa-circle-user',
} as const;
export type IconNames = (typeof IconNames)[keyof typeof IconNames];

const Icon = ({ name, className }: IconProps) => {
  const defaultClasses = '';

  return (
    <FontAwesomeIcon
      icon={name as IconProp}
      className={`${className} ${defaultClasses}`.trim()}
    />
  );
};

export { Icon };

import { Link } from 'react-router-dom';
import { Icon } from '../../ui/Icon';
import { NavItem } from './types';

export type SideNavigationProps = {
  items: NavItem[];
};

const SideNavigation = ({ items }: SideNavigationProps) => {
  const navItemStyles = `block items-center p-4 hover:bg-red-200 cursor-pointer transition-palette duration-300 rounded-lg w-full`;

  return (
    <div className="side-nav text-nowrap">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className={navItemStyles}>
              <Icon name={item.icon} className="mr-4" fixedWidth size="xl" />
              <div className="inline-block h-full">{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { SideNavigation };

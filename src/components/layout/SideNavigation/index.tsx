import { Link } from 'react-router-dom';
import { Icon } from '../../ui/Icon';

export type NavItem = {
  name: string;
  label: string;
  icon: string;
  path: string;
};

export type SideNavigationProps = {
  items: NavItem[];
};

const SideNavigation = ({ items }: SideNavigationProps) => {
  const navItemStyles = `group block items-center p-4 hover:bg-black hover:text-white cursor-pointer w-full`;

  return (
    <div className="side-nav text-nowrap">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className={navItemStyles}>
              <Icon
                name={item.icon}
                className="mr-4 text-black group-hover:text-white"
                fixedWidth
                size="xl"
              />
              <div className="inline-block h-full">{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { SideNavigation };

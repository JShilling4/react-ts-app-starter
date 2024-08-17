import { Icon, IconNames } from '../../ui/Icon';

const TopBar = () => {
  return (
    <div className="top-bar-container">
      <div className="top-bar-content flex items-center">
        <Icon name={IconNames.Menu} />
        <div className="app-name font-bold text-lg">App Name</div>
        <Icon name={IconNames.User} />
      </div>
    </div>
  );
};

export { TopBar };

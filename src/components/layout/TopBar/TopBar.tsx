import { Button } from '../../ui/Button';
import { Icon, IconNames } from '../../ui/Icon';

const TopBar = () => {
  return (
    <div className="flex top-bar-container text-white bg-primary h-16 py-2 pl-16 pr-6">
      <div className="top-bar-content flex items-center w-full">
        <div className="app-name font-bold text-lg text-white">App Name</div>
        <Button className="ml-auto" variant="round-icon">
          <Icon name={IconNames.User} className="ml-auto" />
        </Button>
      </div>
    </div>
  );
};

export { TopBar };

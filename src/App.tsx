import { Outlet } from 'react-router-dom';
import { TopBar } from './components/layout/TopBar';
import { Drawer } from './components/layout/Drawer';
import { useState } from 'react';
import { Button } from './components/ui/Button';
import { Icon, IconNames } from './components/ui/Icon';
import { SideNavigation } from './components/layout/Navigation';

function App() {
  const [leftDrawerVisible, setLeftDrawerVisible] = useState(false);

  function handleDrawerToggleClick() {
    setLeftDrawerVisible(!leftDrawerVisible);
  }

  const navItems = [
    {
      name: 'Dashboard',
      label: 'Dashboard',
      icon: IconNames.Home,
      path: '/dashboard',
    },
    {
      name: 'FirstPage',
      label: 'First Page',
      icon: IconNames.Link,
      path: '/page1',
    },
    {
      name: 'SecondPage',
      label: 'Second Page',
      icon: IconNames.Link,
      path: '/page2',
    },
  ];

  return (
    <>
      <TopBar />

      <Button
        className="mr-6 absolute top-4 left-5 z-10"
        variant="square-icon"
        onClick={handleDrawerToggleClick}
      >
        <Icon
          name={leftDrawerVisible ? IconNames.Close : IconNames.Menu}
          size="xl"
          color="#fff"
        />
      </Button>

      <div className="flex h-full">
        <Drawer isVisible={leftDrawerVisible} className="bg-slate-200">
          <SideNavigation items={navItems} />
        </Drawer>
        <Outlet />
      </div>
    </>
  );
}

export default App;

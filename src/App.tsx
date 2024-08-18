import { RouterProvider } from 'react-router-dom';
import router from './router';
import { TopBar } from './components/layout/TopBar';
import { Drawer } from './components/layout/Drawer';
import { useState } from 'react';
import { Button } from './components/ui/Button';
import { Icon, IconNames } from './components/ui/Icon';

function App() {
  const [leftDrawerVisible, setLeftDrawerVisible] = useState(false);

  const navItemStyles = `p-4`;

  function handleDrawerToggleClick() {
    setLeftDrawerVisible(!leftDrawerVisible);
  }

  const navItems = [
    {
      name: 'Home',
      label: 'Home',
      icon: IconNames.Home,
    },
    {
      name: 'FirstPage',
      label: 'Second Page',
      icon: IconNames.Link,
    },
    {
      name: 'SecondPage',
      label: 'Second Page',
      icon: IconNames.Link,
    },
  ];

  return (
    <>
      <TopBar />

      <Button
        className="mr-6 absolute top-4 left-4 z-10"
        variant="square-icon"
        onClick={handleDrawerToggleClick}
      >
        <Icon name={leftDrawerVisible ? IconNames.Close : IconNames.Menu} />
      </Button>

      <div className="flex">
        <Drawer isVisible={leftDrawerVisible}>
          <div className="side-nav text-nowrap">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className={navItemStyles}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

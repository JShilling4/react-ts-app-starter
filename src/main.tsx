import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import {
  faMagnifyingGlass,
  faBars,
  faCircleUser,
  faClose,
  faHouse,
  faLink,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { RouterProvider } from 'react-router-dom';
import router from './router/index.ts';

library.add(
  faMagnifyingGlass,
  faBars,
  faCircleUser,
  faClose,
  faHouse,
  faLink,
  faGear,
);

const root = createRoot(document.getElementById('root') as Element);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { library } from '@fortawesome/fontawesome-svg-core';
import App from './App.tsx';
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
      <App />
    </Provider>
  </StrictMode>,
);

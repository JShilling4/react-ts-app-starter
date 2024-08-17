import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMagnifyingGlass,
  faBars,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass, faBars, faCircleUser);

const root = createRoot(document.getElementById('root') as Element);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import FirstPage from '../pages/FirstPage';
import SecondPage from '../pages/SecondPage';
import App from '../App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <HomePage />,
      },
      {
        path: 'page1',
        element: <FirstPage />,
      },
      {
        path: 'page2',
        element: <SecondPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;

import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import SecondPage from '../pages/SecondPage';
import ThirdPage from '../pages/ThirdPage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/page2',
    element: <SecondPage />,
  },
  {
    path: '/page3',
    element: <ThirdPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;

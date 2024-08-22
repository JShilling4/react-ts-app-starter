import { lazy, Suspense } from 'react';

const App = lazy(() => import('../App'));
const HomePage = lazy(() => import('../pages/HomePage'));
const FirstPage = lazy(() => import('../pages/FirstPage'));
const SecondPage = lazy(() => import('../pages/SecondPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'page1',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <FirstPage />
          </Suspense>
        ),
      },
      {
        path: 'page2',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SecondPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
];

export default routes;

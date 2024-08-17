import { RouterProvider } from 'react-router-dom';
import router from './router';
import { TopBar } from './components/layout/TopBar';

function App() {
  return (
    <>
      <TopBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

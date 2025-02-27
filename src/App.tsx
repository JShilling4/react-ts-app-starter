import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ExampleComponent } from '@/features/example/ExampleComponent';

const Layout = () => (
  <div className="min-h-screen bg-background font-sans antialiased">
    <div className="container mx-auto py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">React TS Starter</h1>
        <ThemeToggle />
      </header>
      <main>
        <div className="space-y-8">
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-card-foreground">
              Welcome to Your App
            </h2>
            <p className="text-muted-foreground">
              This is a modern React starter template with TypeScript, React
              Query, Zustand, and Tailwind CSS.
            </p>
          </div>
          <ExampleComponent />
        </div>
      </main>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    index: true,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;

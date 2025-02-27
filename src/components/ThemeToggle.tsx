import { useEffect } from 'react';
import { useAppStore } from '@/lib/store';

export function ThemeToggle() {
  const { theme, setTheme } = useAppStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
    >
      {theme === 'light' ? '🌙' : '☀️'} Toggle Theme
    </button>
  );
}

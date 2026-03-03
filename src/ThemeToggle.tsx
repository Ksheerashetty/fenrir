import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-3 px-3 py-2.5 w-full text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-xl transition-all"
    >
      {darkMode ? <Sun size={20} className="text-teal-400" /> : <Moon size={20} />}
      <span className="text-[15px] font-medium dark:text-zinc-300">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
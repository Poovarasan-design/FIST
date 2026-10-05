import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme, className = '' }) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`p-2 rounded-xl transition-all duration-300 border border-slate-700/60 hover:border-fist-purple-400 bg-slate-800/40 hover:bg-slate-800/80 text-slate-200 hover:text-fist-cyan-400 focus:outline-none focus:ring-2 focus:ring-fist-cyan-400 ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45 text-amber-300" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12 text-fist-purple-600" />
      )}
    </button>
  );
};

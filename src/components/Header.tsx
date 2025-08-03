import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeStyles, getSelectStyles } from '../styles/themeStyles';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const styles = getThemeStyles(theme);

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-500 ${styles.header}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className={`text-xl transition-all duration-300 ${styles.logo}`}>
          ThemeSwitch
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`transition-colors duration-200 ${styles.nav} ${
              isActiveRoute('/') ? 'border-b-2 border-current' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors duration-200 ${styles.nav} ${
              isActiveRoute('/about') ? 'border-b-2 border-current' : ''
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors duration-200 ${styles.nav} ${
              isActiveRoute('/contact') ? 'border-b-2 border-current' : ''
            }`}
          >
            Contact
          </Link>
        </nav>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className={`px-3 py-1 rounded-md border transition-all duration-300 focus:outline-none focus:ring-2 ${getSelectStyles(theme)}`}
          aria-label="Select theme"
        >
          <option value="theme1">Minimalist</option>
          <option value="theme2">Dark Professional</option>
          <option value="theme3">Colorful Fun</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
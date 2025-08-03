import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeStyles } from '../styles/themeStyles';

const MobileNav: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const styles = getThemeStyles(theme);

  const isActiveRoute = (path: string) => location.pathname === path;

  const getLinkStyle = (isActive: boolean) => {
    const baseStyle = 'flex flex-col items-center py-2 px-4 transition-all duration-200';
    
    if (theme === 'theme1') {
      return `${baseStyle} ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-800'} font-sans`;
    } else if (theme === 'theme2') {
      return `${baseStyle} ${isActive ? 'text-blue-300 bg-gray-800' : 'text-gray-300 hover:text-white'} font-serif`;
    } else {
      return `${baseStyle} ${isActive ? 'text-yellow-200 bg-white bg-opacity-20' : 'text-white hover:text-yellow-200'} font-mono font-semibold`;
    }
  };

  const getNavContainerStyle = () => {
    if (theme === 'theme1') {
      return 'bg-white border-t border-gray-200 shadow-lg';
    } else if (theme === 'theme2') {
      return 'bg-gray-900 border-t border-gray-700 shadow-xl';
    } else {
      return 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl';
    }
  };

  // Icons for navigation
  const HomeIcon = () => (
    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );

  const AboutIcon = () => (
    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const ContactIcon = () => (
    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <nav className={`${getNavContainerStyle()} transition-all duration-500`}>
        <div className="flex justify-around">
          <Link 
            to="/" 
            className={getLinkStyle(isActiveRoute('/'))}
            aria-label="Home"
          >
            <HomeIcon />
            <span className="text-xs">Home</span>
          </Link>
          
          <Link 
            to="/about" 
            className={getLinkStyle(isActiveRoute('/about'))}
            aria-label="About"
          >
            <AboutIcon />
            <span className="text-xs">About</span>
          </Link>
          
          <Link 
            to="/contact" 
            className={getLinkStyle(isActiveRoute('/contact'))}
            aria-label="Contact"
          >
            <ContactIcon />
            <span className="text-xs">Contact</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
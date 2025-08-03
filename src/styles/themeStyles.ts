import { type ThemeType } from '../types';

export const getThemeStyles = (theme: ThemeType) => {
  const styles = {
    theme1: {
      // Container styles
      container: 'bg-gray-50 min-h-screen',
      pageContainer: 'max-w-7xl mx-auto px-4 py-8',
      
      // Typography
      title: 'text-4xl text-gray-800 font-sans font-light mb-6',
      subtitle: 'text-2xl text-gray-700 font-sans font-medium mb-4',
      text: 'text-gray-600 font-sans leading-relaxed',
      
      // Header
      header: 'bg-white shadow-md border-b border-gray-200',
      logo: 'text-gray-800 font-sans font-medium',
      nav: 'text-gray-600 hover:text-gray-800 font-sans',
      
      // Cards
      card: 'bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-lg',
      cardTitle: 'text-gray-800 font-sans font-medium',
      cardText: 'text-gray-600 font-sans text-sm',
      
      // Buttons
      button: 'bg-blue-600 hover:bg-blue-700 text-white font-sans font-medium transition-colors duration-200',
      buttonSecondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800 font-sans font-medium transition-colors duration-200',
      
      // Forms
      input: 'border border-gray-300 bg-white text-gray-900 font-sans focus:ring-2 focus:ring-blue-500 focus:border-transparent',
      label: 'text-gray-700 font-sans font-medium',
      
      // Misc
      divider: 'border-gray-200',
      accent: 'text-blue-600',
    },
    
    theme2: {
      // Container styles
      container: 'bg-gray-900 min-h-screen',
      pageContainer: 'flex',
      
      // Typography
      title: 'text-5xl text-white font-serif font-bold mb-8',
      subtitle: 'text-3xl text-white font-serif font-bold mb-6',
      text: 'text-gray-300 font-serif leading-relaxed text-lg',
      
      // Header
      header: 'bg-gray-900 shadow-lg border-b border-gray-700',
      logo: 'text-white font-serif font-bold',
      nav: 'text-gray-300 hover:text-white font-serif',
      
      // Cards
      card: 'bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl rounded-lg',
      cardTitle: 'text-white font-serif font-bold',
      cardText: 'text-gray-300 font-serif',
      
      // Buttons
      button: 'bg-blue-500 hover:bg-blue-600 text-white font-serif font-bold text-lg transition-all duration-200 transform hover:scale-105',
      buttonSecondary: 'bg-gray-700 hover:bg-gray-600 text-white font-serif font-bold transition-all duration-200',
      
      // Forms
      input: 'bg-gray-700 border border-gray-600 text-white font-serif focus:ring-2 focus:ring-blue-400 focus:border-transparent',
      label: 'text-white font-serif font-bold text-lg',
      
      // Sidebar
      sidebar: 'w-64 bg-gray-800 min-h-screen p-6 border-r border-gray-700',
      sidebarTitle: 'text-white font-serif font-bold text-xl mb-6',
      sidebarLink: 'text-gray-300 hover:text-white font-serif transition-colors block py-2',
      
      // Misc
      divider: 'border-gray-700',
      accent: 'text-blue-300',
    },
    
    theme3: {
      // Container styles
      container: 'bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 min-h-screen',
      pageContainer: 'max-w-7xl mx-auto px-6 py-12',
      
      // Typography
      title: 'text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-mono font-bold mb-8',
      subtitle: 'text-4xl text-purple-800 font-mono font-bold mb-6',
      text: 'text-purple-700 font-mono leading-relaxed text-lg',
      
      // Header
      header: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-xl',
      logo: 'text-white font-mono font-bold',
      nav: 'text-white hover:text-yellow-200 font-mono font-semibold',
      
      // Cards
      card: 'bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-purple-200 shadow-lg hover:shadow-xl hover:scale-105 rounded-xl',
      cardTitle: 'text-purple-800 font-mono font-bold',
      cardText: 'text-purple-600 font-mono',
      
      // Buttons
      button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-mono font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl',
      buttonSecondary: 'bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-mono font-bold transition-all duration-300 transform hover:scale-105',
      
      // Forms
      input: 'border-2 border-purple-200 bg-white text-purple-900 font-mono focus:ring-2 focus:ring-purple-500 focus:border-purple-400',
      label: 'text-purple-800 font-mono font-bold text-lg',
      
      // Misc
      divider: 'border-purple-200',
      accent: 'text-pink-600',
      
      // Grid
      grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    },
  };
  
  return styles[theme];
};

export const getSelectStyles = (theme: ThemeType) => {
  switch (theme) {
    case 'theme1':
      return 'bg-white border-gray-300 text-gray-700 focus:ring-blue-500';
    case 'theme2':
      return 'bg-gray-800 border-gray-600 text-white focus:ring-blue-400';
    case 'theme3':
      return 'bg-white bg-opacity-20 border-white text-white focus:ring-yellow-300';
    default:
      return 'bg-white border-gray-300 text-gray-700';
  }
};

export const getLoadingStyles = (theme: ThemeType) => {
  switch (theme) {
    case 'theme1':
      return 'text-gray-600';
    case 'theme2':
      return 'text-gray-300';
    case 'theme3':
      return 'text-purple-600';
    default:
      return 'text-gray-600';
  }
};
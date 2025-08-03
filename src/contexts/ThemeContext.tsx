import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type ThemeType = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    try {
      const saved = localStorage.getItem('app-theme');
      return (saved as ThemeType) || 'theme1';
    } catch (error) {
      console.warn('Error reading theme from localStorage:', error);
      return 'theme1';
    }
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSetTheme = (newTheme: ThemeType) => {
    if (newTheme === theme) return;
    
    setIsTransitioning(true);
    setTheme(newTheme);
    
    // Reset transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    try {
      localStorage.setItem('app-theme', theme);
      document.body.className = `theme-${theme}`;
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: handleSetTheme,
    isTransitioning,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
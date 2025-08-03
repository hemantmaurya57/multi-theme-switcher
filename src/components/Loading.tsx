import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getLoadingStyles } from '../styles/themeStyles';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...', size = 'md' }) => {
  const { theme } = useTheme();
  const loadingStyles = getLoadingStyles(theme);

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const containerPadding = {
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-12',
  };

  return (
    <div className={`flex flex-col justify-center items-center ${containerPadding[size]} ${loadingStyles} animate-fade-in`}>
      <div className={`animate-spin rounded-full ${sizeClasses[size]} border-b-2 border-current mb-3`}></div>
      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span className="mt-2 text-sm font-medium">{message}</span>
    </div>
  );
};

export default Loading;
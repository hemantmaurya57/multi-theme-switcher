import React, { useState } from 'react';
import type { Product } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeStyles } from '../styles/themeStyles';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }

    return stars;
  };

  return (
    <div className={`p-4 transition-all duration-300 ${styles.card} animate-fade-in group`}>
      <div className="relative overflow-hidden rounded-md mb-3">
        {imageLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )}
        {imageError ? (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
            <span className="text-gray-400 text-sm">Image not available</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.title}
            className={`w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        )}
        
        {/* Category badge */}
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${
          theme === 'theme1' ? 'bg-blue-100 text-blue-800' :
          theme === 'theme2' ? 'bg-blue-900 text-blue-200' :
          'bg-purple-200 text-purple-800'
        }`}>
          {product.category}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className={`text-lg line-clamp-2 ${styles.cardTitle} group-hover:text-blue-600 transition-colors duration-200`}>
          {product.title}
        </h3>
        
        <p className={`text-sm line-clamp-3 ${styles.cardText}`}>
          {product.description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className={`text-xl font-bold ${styles.accent}`}>
            {formatPrice(product.price)}
          </span>
          
          <div className={`flex items-center space-x-1 text-sm ${styles.cardText}`}>
            <div className="flex">
              {renderStars(product.rating.rate)}
            </div>
            <span>({product.rating.count})</span>
          </div>
        </div>
        
        <button className={`w-full px-4 py-2 rounded-md text-sm font-medium ${styles.button} mt-3`}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
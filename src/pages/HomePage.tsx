import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import { getThemeStyles } from '../styles/themeStyles';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  const { products, loading, error, refetch } = useProducts(6);
  const styles = getThemeStyles(theme);

  const HeroSection = () => (
    <section className={theme === 'theme2' ? 'mb-12' : 'text-center mb-16'}>
      <h1 className={`${styles.title} animate-fade-in`}>
        Welcome to ThemeSwitch
      </h1>
      <p className={`${styles.text} mb-8 max-w-3xl ${theme === 'theme2' ? '' : 'mx-auto'} animate-fade-in`}>
        Experience the power of dynamic theming with our innovative React application. 
        Switch between themes and watch as the entire interface transforms before your eyes.
        Built with TypeScript, React Router, and modern web technologies.
      </p>
      <div className={`space-x-4 ${theme === 'theme2' ? '' : 'flex justify-center flex-wrap gap-4'}`}>
        <button className={`px-6 py-3 rounded-md ${styles.button} animate-bounce-in`}>
          Get Started
        </button>
        <Link 
          to="/about" 
          className={`px-6 py-3 rounded-md ${styles.buttonSecondary} inline-block animate-bounce-in`}
        >
          Learn More
        </Link>
      </div>
    </section>
  );

  const ProductsSection = () => (
    <section>
      <h2 className={`${styles.subtitle} ${theme === 'theme2' ? 'mb-8' : 'text-center mb-12'} animate-fade-in`}>
        Featured Products
      </h2>
      
      {error ? (
        <div className="text-center py-12">
          <div className="text-red-500 text-lg mb-4">
            {error}
          </div>
          <button 
            onClick={refetch}
            className={`px-4 py-2 rounded-md ${styles.button}`}
          >
            Try Again
          </button>
        </div>
      ) : loading ? (
        <Loading message="Loading amazing products..." />
      ) : (
        <div className={theme === 'theme3' ? styles.grid : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );

  const Sidebar = () => (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Navigation</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className={`${styles.sidebarLink} border-l-2 border-blue-400 pl-4`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.sidebarLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.sidebarLink}>
            Contact
          </Link>
        </li>
      </ul>
      
      <div className="mt-8 pt-8 border-t border-gray-700">
        <h3 className="text-white font-serif font-bold mb-4">Quick Stats</h3>
        <div className="space-y-3">
          <div className="text-gray-300 font-serif">
            <span className="text-blue-400 font-bold">{products.length}</span> Products
          </div>
          <div className="text-gray-300 font-serif">
            <span className="text-blue-400 font-bold">3</span> Themes
          </div>
          <div className="text-gray-300 font-serif">
            <span className="text-blue-400 font-bold">100%</span> Responsive
          </div>
        </div>
      </div>
    </aside>
  );

  return (
    <div className={`pt-20 transition-all duration-500 ${styles.container}`}>
      <div className={styles.pageContainer}>
        {theme === 'theme2' ? (
          <>
            <Sidebar />
            <main className="flex-1 p-8">
              <HeroSection />
              <ProductsSection />
            </main>
          </>
        ) : (
          <main className={theme === 'theme1' ? 'max-w-7xl mx-auto px-4 py-8' : 'max-w-7xl mx-auto px-6 py-12'}>
            <HeroSection />
            <ProductsSection />
          </main>
        )}
      </div>
    </div>
  );
};

export default HomePage;
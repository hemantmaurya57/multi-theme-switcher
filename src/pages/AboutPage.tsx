import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeStyles } from '../styles/themeStyles';

const AboutPage: React.FC = () => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);

  const features = [
    {
      title: 'React & TypeScript',
      description: 'Built with modern React patterns and TypeScript for type safety and better developer experience.',
      icon: '⚛️',
    },
    {
      title: 'Dynamic Theming',
      description: 'Three distinct themes with persistent state management using Context API and localStorage.',
      icon: '🎨',
    },
    {
      title: 'API Integration',
      description: 'Real-time data fetching from external APIs with comprehensive error handling and loading states.',
      icon: '🔗',
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first approach with Tailwind CSS, ensuring perfect experience across all devices.',
      icon: '📱',
    },
    {
      title: 'Performance Optimized',
      description: 'Lazy loading, code splitting, and optimized re-renders for the best user experience.',
      icon: '⚡',
    },
    {
      title: 'Accessibility First',
      description: 'WCAG compliant with semantic HTML, keyboard navigation, and screen reader support.',
      icon: '♿',
    },
  ];

  const technologies = [
    { name: 'React 18', category: 'Frontend Framework' },
    { name: 'TypeScript', category: 'Type Safety' },
    { name: 'React Router', category: 'Navigation' },
    { name: 'Context API', category: 'State Management' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Fake Store API', category: 'Data Source' },
  ];

  const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => (
    <div 
      className={`p-6 transition-all duration-300 ${styles.card} animate-fade-in hover:transform hover:scale-105`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className={`text-xl mb-3 ${styles.cardTitle}`}>
        {feature.title}
      </h3>
      <p className={styles.cardText}>
        {feature.description}
      </p>
    </div>
  );

  const TechBadge = ({ tech, index }: { tech: typeof technologies[0]; index: number }) => (
    <div 
      className={`p-4 rounded-lg transition-all duration-300 ${
        theme === 'theme1' ? 'bg-gray-100 hover:bg-gray-200' :
        theme === 'theme2' ? 'bg-gray-700 hover:bg-gray-600' :
        'bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200'
      } animate-fade-in`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className={`font-bold mb-1 ${styles.cardTitle}`}>
        {tech.name}
      </div>
      <div className={`text-sm ${styles.cardText}`}>
        {tech.category}
      </div>
    </div>
  );

  return (
    <div className={`pt-20 transition-all duration-500 ${styles.container}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className={`${styles.title} animate-fade-in`}>
            About ThemeSwitch
          </h1>
          <p className={`${styles.text} max-w-4xl mx-auto mb-8 animate-fade-in`}>
            ThemeSwitch is a revolutionary web application that demonstrates the power of dynamic theming 
            in modern React applications. Built with cutting-edge technologies and featuring three distinct 
            visual themes, it showcases how thoughtful design can dramatically impact user experience.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className={`p-8 rounded-2xl ${styles.card} animate-fade-in`}>
            <h2 className={`${styles.subtitle} text-center mb-6`}>
              Our Mission
            </h2>
            <p className={`${styles.text} text-center max-w-3xl mx-auto mb-6`}>
              To demonstrate how modern web applications can provide personalized user experiences 
              through intelligent theming systems while maintaining performance, accessibility, and 
              code quality standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className={`font-bold ${styles.cardTitle}`}>User-Centric</div>
                <div className={styles.cardText}>Personalized experiences</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className={`font-bold ${styles.cardTitle}`}>Performance</div>
                <div className={styles.cardText}>Optimized and fast</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💡</div>
                <div className={`font-bold ${styles.cardTitle}`}>Innovation</div>
                <div className={styles.cardText}>Cutting-edge tech</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className={`${styles.subtitle} text-center mb-12 animate-fade-in`}>
            Key Features
          </h2>
          <div className={theme === 'theme3' ? styles.grid : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-20">
          <h2 className={`${styles.subtitle} text-center mb-12 animate-fade-in`}>
            Technologies Used
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <TechBadge key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </section>

        {/* Theme Showcase Section */}
        <section>
          <h2 className={`${styles.subtitle} text-center mb-12 animate-fade-in`}>
            Theme Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg border-2 transition-all duration-300 ${
              theme === 'theme1' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            } animate-fade-in`}>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Minimalist Theme</h3>
              <p className="text-gray-600 text-sm mb-4">
                Clean, light design with sans-serif typography and subtle shadows.
              </p>
              <div className="space-y-2">
                <div className="text-xs text-gray-500">• Clean typography</div>
                <div className="text-xs text-gray-500">• Light color scheme</div>
                <div className="text-xs text-gray-500">• Standard layout</div>
              </div>
            </div>

            <div className={`p-6 rounded-lg border-2 transition-all duration-300 ${
              theme === 'theme2' ? 'border-blue-400 bg-gray-800' : 'border-gray-700 bg-gray-900'
            } animate-fade-in`}>
              <h3 className="text-lg font-bold mb-3 text-white font-serif">Professional Theme</h3>
              <p className="text-gray-300 text-sm mb-4 font-serif">
                Dark, elegant design with serif fonts and sidebar navigation.
              </p>
              <div className="space-y-2">
                <div className="text-xs text-gray-400">• Serif typography</div>
                <div className="text-xs text-gray-400">• Dark color scheme</div>
                <div className="text-xs text-gray-400">• Sidebar layout</div>
              </div>
            </div>

            <div className={`p-6 rounded-lg border-2 transition-all duration-300 ${
              theme === 'theme3' ? 'border-purple-500 bg-gradient-to-br from-purple-100 to-pink-100' : 'border-purple-300 bg-purple-50'
            } animate-fade-in`}>
              <h3 className="text-lg font-bold mb-3 text-purple-800 font-mono">Colorful Theme</h3>
              <p className="text-purple-600 text-sm mb-4 font-mono">
                Vibrant, playful design with gradients and monospace fonts.
              </p>
              <div className="space-y-2">
                <div className="text-xs text-purple-500">• Monospace typography</div>
                <div className="text-xs text-purple-500">• Gradient colors</div>
                <div className="text-xs text-purple-500">• Card-based layout</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
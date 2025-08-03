import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeStyles } from '../styles/themeStyles';
import type { ContactFormData } from '../types';

const ContactPage: React.FC = () => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'hello@themeswitch.com',
      description: 'Send us an email anytime',
    },
    {
      icon: '📱',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Call us during business hours',
    },
    {
      icon: '📍',
      title: 'Address',
      content: '123 Tech Street, Innovation City',
      description: 'Visit our office',
    },
    {
      icon: '🕒',
      title: 'Hours',
      content: 'Mon - Fri: 9AM - 6PM',
      description: 'Our working hours',
    },
  ];

  const ContactInfoCard = ({ info, index }: { info: typeof contactInfo[0]; index: number }) => (
    <div 
      className={`p-6 rounded-lg transition-all duration-300 ${styles.card} animate-fade-in hover:transform hover:scale-105`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-3xl mb-3">{info.icon}</div>
      <h3 className={`text-lg font-bold mb-2 ${styles.cardTitle}`}>
        {info.title}
      </h3>
      <p className={`font-medium mb-1 ${styles.accent}`}>
        {info.content}
      </p>
      <p className={`text-sm ${styles.cardText}`}>
        {info.description}
      </p>
    </div>
  );

  const StatusMessage = () => {
    if (submitStatus === 'success') {
      return (
        <div className={`p-4 rounded-lg mb-6 animate-fade-in ${
          theme === 'theme1' ? 'bg-green-50 text-green-800 border border-green-200' :
          theme === 'theme2' ? 'bg-green-900 text-green-200 border border-green-700' :
          'bg-green-100 text-green-800 border-2 border-green-300'
        }`}>
          <div className="flex items-center">
            <span className="text-xl mr-2">✅</span>
            <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
          </div>
        </div>
      );
    } else if (submitStatus === 'error') {
      return (
        <div className={`p-4 rounded-lg mb-6 animate-fade-in ${
          theme === 'theme1' ? 'bg-red-50 text-red-800 border border-red-200' :
          theme === 'theme2' ? 'bg-red-900 text-red-200 border border-red-700' :
          'bg-red-100 text-red-800 border-2 border-red-300'
        }`}>
          <div className="flex items-center">
            <span className="text-xl mr-2">❌</span>
            <span className="font-medium">Failed to send message. Please try again.</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`pt-20 transition-all duration-500 ${styles.container}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className={`${styles.title} animate-fade-in`}>
            Get in Touch
          </h1>
          <p className={`${styles.text} max-w-3xl mx-auto animate-fade-in`}>
            Have questions about ThemeSwitch? Want to collaborate or provide feedback? 
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <h2 className={`${styles.subtitle} mb-8`}>
              Send us a Message
            </h2>
            
            <div className={`p-8 rounded-2xl ${styles.card}`}>
              <StatusMessage />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block mb-2 ${styles.label}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-lg transition-all duration-200 ${styles.input}`}
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block mb-2 ${styles.label}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-lg transition-all duration-200 ${styles.input}`}
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className={`block mb-2 ${styles.label}`}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full p-4 rounded-lg transition-all duration-200 resize-none ${styles.input}`}
                    placeholder="Tell us about your project, question, or feedback..."
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full p-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                    !isFormValid || isSubmitting 
                      ? 'opacity-50 cursor-not-allowed bg-gray-400 text-gray-600' 
                      : styles.button
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className={`text-sm ${styles.cardText}`}>
                  <p className="mb-2">
                    <strong>Privacy Notice:</strong> We respect your privacy and will never share your information with third parties.
                  </p>
                  <p>
                    <strong>Response Time:</strong> We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in">
            <h2 className={`${styles.subtitle} mb-8`}>
              Contact Information
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={info.title} info={info} index={index} />
              ))}
            </div>

            {/* Additional Info Section */}
            <div className={`p-6 rounded-lg ${styles.card} animate-fade-in`}>
              <h3 className={`text-lg font-bold mb-4 ${styles.cardTitle}`}>
                Why Choose ThemeSwitch?
              </h3>
              <ul className={`space-y-3 ${styles.cardText}`}>
                <li className="flex items-start">
                  <span className="text-lg mr-2">🎨</span>
                  <span>Innovative theming system with real-time switching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">⚡</span>
                  <span>High performance and optimized user experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">🔒</span>
                  <span>Secure, type-safe, and production-ready codebase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">📱</span>
                  <span>Fully responsive design for all devices</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className={`mt-6 p-6 rounded-lg ${styles.card} animate-fade-in`}>
              <h3 className={`text-lg font-bold mb-4 ${styles.cardTitle}`}>
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <button className={`p-3 rounded-lg ${styles.buttonSecondary} hover:scale-110 transition-transform duration-200`}>
                  <span className="text-xl">🐦</span>
                </button>
                <button className={`p-3 rounded-lg ${styles.buttonSecondary} hover:scale-110 transition-transform duration-200`}>
                  <span className="text-xl">💼</span>
                </button>
                <button className={`p-3 rounded-lg ${styles.buttonSecondary} hover:scale-110 transition-transform duration-200`}>
                  <span className="text-xl">📘</span>
                </button>
                <button className={`p-3 rounded-lg ${styles.buttonSecondary} hover:scale-110 transition-transform duration-200`}>
                  <span className="text-xl">🐙</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
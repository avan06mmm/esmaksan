
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { View } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Products from './views/Products';
import About from './views/About';
import Production from './views/Production';
import QualityControl from './views/QualityControl';
import Contact from './views/Contact';
import { useLanguage } from './LanguageContext';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [productCategory, setProductCategory] = useState<string>('all');
  const [productSubCategory, setProductSubCategory] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView, isMounted]);

  const handleNavigate = (view: View, category?: string, subCategory?: string) => {
    setCurrentView(view);
    if (view === 'products') {
      setProductCategory(category || 'all');
      setProductSubCategory(subCategory || null);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home />;
      case 'products': return <Products initialCategory={productCategory} initialSubCategory={productSubCategory} />;
      case 'about': return <About />;
      case 'production': return <Production />;
      case 'quality': return <QualityControl />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  if (!isMounted) return null;

  return (
    <div className={`min-h-screen flex flex-col selection:bg-brand selection:text-ink bg-paper ${isRTL ? 'text-right' : 'text-left'}`}>
      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow pt-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Button */}
      <motion.a 
        href="https://wa.me/902242434545" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed bottom-8 ${isRTL ? 'left-8' : 'right-8'} z-50 group flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className={`${isRTL ? 'ml-4' : 'mr-4'} py-2 px-5 bg-ink text-brand text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 ${isRTL ? '-translate-x-4' : 'translate-x-4'} group-hover:translate-x-0 transition-all rounded-sm shadow-2xl hidden sm:block border border-white/10`}>
          {t.whatsapp}
        </div>
        <div className="w-16 h-16 bg-brand text-ink rounded-full shadow-[0_20px_50px_rgba(253,187,17,0.3)] flex items-center justify-center transition-all border-4 border-white relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-white/20"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.261.405 2.43 1.094 3.388l-1.161 4.256 4.389-1.152a5.72 5.72 0 002.774.717h.001c3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm0 10.564a4.78 4.78 0 01-2.43-.66l-.174-.103-1.801.473.481-1.762-.112-.178a4.757 4.757 0 01-.734-2.567c0-2.633 2.142-4.775 4.775-4.775 2.633 0 4.775 2.142 4.775 4.775 0 2.634-2.142 4.775-4.775 4.775z"/>
          </svg>
        </div>
      </motion.a>
    </div>
  );
};

export default App;

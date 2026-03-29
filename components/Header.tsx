
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { View } from '../types';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';

const Header: React.FC<{ currentView: View; onNavigate: (v: View, category?: string, subCategory?: string) => void }> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, value: 'home' },
    { label: t.nav.about, value: 'about' },
    { label: t.nav.production, value: 'production' },
    { label: t.nav.quality, value: 'quality' },
    { label: t.nav.products, value: 'products' },
    { label: t.nav.contact, value: 'contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl py-4' : 'bg-transparent py-8'
    }`}>
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
        <motion.div 
          className="flex flex-col cursor-pointer group" 
          onClick={() => onNavigate('home')}
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src="/logo.png" 
            alt="Esmaksan Logo" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </motion.div>

        <nav className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-12' : 'space-x-12'}`}>
          {navItems.map((item) => (
            <div 
              key={item.value} 
              className="relative"
              onMouseEnter={() => item.value === 'products' && setProductsMenuOpen(true)}
              onMouseLeave={() => item.value === 'products' && setProductsMenuOpen(false)}
            >
              <button
                onClick={() => onNavigate(item.value as View)}
                className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all relative group py-2 ${
                  currentView === item.value 
                    ? 'text-brand' 
                    : scrolled ? 'text-ink/60 hover:text-ink' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-brand"
                  initial={false}
                  animate={{ width: currentView === item.value ? '100%' : '0%' }}
                  transition={{ duration: 0.3, ease: 'circOut' }}
                />
              </button>

              {item.value === 'products' && (
                <AnimatePresence>
                  {productsMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-sm border border-ink/5 py-2 min-w-[220px]"
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      {t.nav.categories.map((cat) => (
                        <div 
                          key={cat.value} 
                          className="relative group/cat"
                          onMouseEnter={() => setHoveredCategory(cat.value)}
                        >
                          <button
                            onClick={() => {
                              onNavigate('products', cat.value);
                              setProductsMenuOpen(false);
                            }}
                            className={`w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all flex justify-between items-center ${
                              hoveredCategory === cat.value ? 'text-brand bg-brand/5' : 'text-ink/60 hover:text-brand hover:bg-brand/5'
                            }`}
                          >
                            {cat.label}
                            {cat.subCategories && (
                              <span className={`text-[10px] opacity-40 transition-opacity ${isRTL ? 'rotate-180' : ''}`}>
                                {isRTL ? '←' : '→'}
                              </span>
                            )}
                          </button>

                          {cat.subCategories && hoveredCategory === cat.value && (
                            <motion.div
                              initial={{ opacity: 0, x: isRTL ? -10 : 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className={`absolute top-0 ${isRTL ? 'right-full mr-1' : 'left-full ml-1'} bg-white shadow-2xl rounded-sm border border-ink/5 py-2 min-w-[180px]`}
                            >
                              {cat.subCategories.map((sub) => (
                                <button
                                  key={sub.value}
                                  onClick={() => {
                                    onNavigate('products', cat.value, sub.value);
                                    setProductsMenuOpen(false);
                                  }}
                                  className="w-full text-left px-6 py-2.5 text-[9px] font-bold uppercase tracking-widest text-ink/40 hover:text-brand hover:bg-brand/5 transition-all"
                                >
                                  {sub.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-sm border transition-all ${
                scrolled 
                  ? 'border-ink/10 text-ink hover:bg-ink/5' 
                  : 'border-white/10 text-white hover:bg-white/5'
              }`}
            >
              <span className="text-sm">{languages.find(l => l.code === language)?.flag}</span>
              <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">
                {language}
              </span>
            </button>

            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-2 right-0 bg-white shadow-2xl rounded-sm overflow-hidden min-w-[140px] border border-ink/5"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-brand/10 transition-colors ${
                        language === lang.code ? 'bg-brand/5 text-brand' : 'text-ink'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className={`hidden sm:block px-8 py-3 text-[11px] font-bold uppercase tracking-[0.15em] transition-all rounded-sm border-2 ${
            scrolled 
              ? 'bg-ink text-brand border-ink hover:bg-brand hover:text-ink' 
              : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-ink'
          }`}>
            {t.nav.getQuote}
          </button>
          
          {/* Mobile Menu Toggle (Simplified) */}
          <button className={`lg:hidden p-2 ${scrolled ? 'text-ink' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

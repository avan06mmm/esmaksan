import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { View } from '../types';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';

const Header: React.FC<{ currentView: View; onNavigate: (v: View, category?: string, subCategory?: string) => void }> = ({ currentView, onNavigate }) => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [corporateMenuOpen, setCorporateMenuOpen] = useState(false);
  const [certificatesMenuOpen, setCertificatesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredMachinery, setHoveredMachinery] = useState(false);

  const isSolid = true;

  const isMenuActive = (itemValue: string) => {
    if (itemValue === currentView) return true;
    if (itemValue === 'corporate' && ['about', 'production', 'machinery', 'informationSecurity'].includes(currentView)) return true;
    if (itemValue === 'certificates' && ['integratedPolicy', 'qualityManagement', 'environmentalManagement', 'ohsManagement'].includes(currentView)) return true;
    return false;
  };

  const navItems = [
    { label: t.nav.home, value: 'home' },
    { label: t.nav.corporate, value: 'corporate' },
    { label: t.nav.certificates, value: 'certificates' },
    { label: t.nav.products, value: 'products' },
    { label: t.nav.services, value: 'services' },
    { label: t.nav.catalog, value: 'catalog' },
    { label: t.nav.contact, value: 'contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-700 pointer-events-none ${
      isSolid ? 'py-4 md:py-6' : 'py-6 md:py-10'
    }`}>
      {/* Floating Header Capsule */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 pointer-events-auto">
        <div className={`flex justify-between items-center transition-all duration-700 ${isRTL ? 'flex-row-reverse' : 'flex-row'} ${
          isSolid 
            ? 'bg-white/85 backdrop-blur-3xl shadow-[0_16px_40px_-16px_rgba(0,0,0,0.1)] border border-white/50 rounded-full px-6 md:px-8 py-3' 
            : 'bg-transparent px-2 py-0'
        }`}>
          
          <motion.div 
            className="flex items-center cursor-pointer group flex-shrink-0" 
            onClick={() => onNavigate('home')}
          >
            <img 
              src="/logo.png" 
              alt="ESMAKSAN Logo" 
              className={`w-[140px] md:w-[180px] h-[50px] md:h-[60px] object-contain object-left transition-all duration-500 transform group-hover:scale-105 ${
                !isSolid ? 'drop-shadow-[0_2px_10px_rgba(255,255,255,1)] brightness-0 invert' : ''
              }`} 
            />
          </motion.div>

          <nav className={`hidden lg:flex items-center flex-1 justify-center ${isRTL ? 'space-x-reverse space-x-1 xl:space-x-4' : 'space-x-1 xl:space-x-4'}`}>
            {navItems.map((item) => (
              <div 
                key={item.value} 
                className="relative"
                onMouseEnter={() => {
                  if (item.value === 'products') setProductsMenuOpen(true);
                  if (item.value === 'corporate') setCorporateMenuOpen(true);
                  if (item.value === 'certificates') setCertificatesMenuOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.value === 'products') setProductsMenuOpen(false);
                  if (item.value === 'corporate') setCorporateMenuOpen(false);
                  if (item.value === 'certificates') setCertificatesMenuOpen(false);
                }}
              >
                <button
                  onClick={() => {
                    if (item.value === 'corporate') onNavigate('about');
                    else if (item.value === 'certificates') onNavigate('integratedPolicy');
                    else onNavigate(item.value as View);
                  }}
                  className={`whitespace-nowrap text-[14px] xl:text-[15px] font-bold px-3 xl:px-6 py-3 rounded-full transition-all relative group z-10 ${
                    isMenuActive(item.value) 
                      ? (isSolid ? 'text-ink' : 'text-white') 
                      : isSolid ? 'text-ink/70 hover:text-ink' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {isMenuActive(item.value) && (
                    <motion.div 
                      layoutId="activeNavBackground"
                      className={`absolute inset-0 rounded-full -z-10 ${isSolid ? 'bg-ink/5' : 'bg-white/20 backdrop-blur-sm'}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.label}
                </button>

                {/* Modern Dropdown for Corporate */}
                {item.value === 'corporate' && (
                  <AnimatePresence>
                    {corporateMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/95 backdrop-blur-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] rounded-3xl border border-white/60 p-3 min-w-[300px]"
                      >
                        <button
                          onClick={() => {
                            onNavigate('about');
                            setCorporateMenuOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-[14px] font-bold rounded-2xl transition-all ${currentView === 'about' ? 'bg-brand/10 text-ink' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
                        >
                          {t.nav.about}
                        </button>
                        <button
                          onClick={() => {
                            onNavigate('production');
                            setCorporateMenuOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-[14px] font-bold rounded-2xl transition-all mt-1 ${currentView === 'production' ? 'bg-brand/10 text-ink' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
                        >
                          {t.nav.production}
                        </button>
                        <button
                          onClick={() => {
                            onNavigate('machinery');
                            setCorporateMenuOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-[14px] font-bold rounded-2xl transition-all mt-1 ${currentView === 'machinery' ? 'bg-brand/10 text-ink' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
                        >
                          {t.nav.machinery}
                        </button>
                        <button
                          onClick={() => {
                            onNavigate('informationSecurity');
                            setCorporateMenuOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-[14px] font-bold rounded-2xl transition-all mt-1 ${currentView === 'informationSecurity' ? 'bg-brand/10 text-ink' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
                        >
                          {t.nav.informationSecurity}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Modern Dropdown for Certificates */}
                {item.value === 'certificates' && (
                  <AnimatePresence>
                    {certificatesMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/95 backdrop-blur-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] rounded-3xl border border-white/60 p-3 min-w-[280px]"
                      >
                        <button
                          onClick={() => {
                            onNavigate('integratedPolicy');
                            setCertificatesMenuOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-[14px] font-bold rounded-2xl transition-all ${currentView === 'integratedPolicy' ? 'bg-brand/10 text-ink' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
                        >
                          {t.nav.integratedPolicy}
                        </button>
                        <button
                          onClick={() => {
                            onNavigate('qualityManagement');
                            setCertificatesMenuOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-[14px] font-bold rounded-2xl transition-all mt-1 ${currentView === 'qualityManagement' ? 'bg-brand/10 text-ink' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
                        >
                          {t.nav.qualityManagement}
                        </button>
                        <button
                          onClick={() => {
                            onNavigate('environmentalManagement');
                            setCertificatesMenuOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-[14px] font-bold rounded-2xl transition-all mt-1 ${currentView === 'environmentalManagement' ? 'bg-brand/10 text-ink' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
                        >
                          {t.nav.environmentalManagement}
                        </button>
                        <button
                          onClick={() => {
                            onNavigate('ohsManagement');
                            setCertificatesMenuOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-[14px] font-bold rounded-2xl transition-all mt-1 ${currentView === 'ohsManagement' ? 'bg-brand/10 text-ink' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
                        >
                          {t.nav.ohsManagement}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Modern Dropdown for Products */}
                {item.value === 'products' && (
                  <AnimatePresence>
                    {productsMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/95 backdrop-blur-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] rounded-3xl border border-white/60 p-3 min-w-[260px] pb-3"
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
                              className={`w-full text-left px-5 py-3 text-[14px] font-bold rounded-2xl transition-all flex justify-between items-center ${
                                hoveredCategory === cat.value ? 'bg-brand/10 text-ink' : 'text-ink/70 hover:text-ink hover:bg-ink/5'
                              }`}
                            >
                              {cat.label}
                              {cat.subCategories && (
                                <span className={`text-[12px] opacity-40 transition-opacity ${isRTL ? 'rotate-180' : ''}`}>
                                  {isRTL ? '←' : '→'}
                                </span>
                              )}
                            </button>

                            {/* Sub-category Dropdown */}
                            {cat.subCategories && hoveredCategory === cat.value && (
                              <motion.div
                                initial={{ opacity: 0, x: isRTL ? -10 : 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`absolute top-0 ${isRTL ? 'right-full mr-2' : 'left-full ml-2'} bg-white/95 backdrop-blur-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] rounded-3xl border border-white/60 p-3 min-w-[200px]`}
                              >
                                {cat.subCategories.map((sub) => (
                                  <button
                                    key={sub.value}
                                    onClick={() => {
                                      onNavigate('products', cat.value, sub.value);
                                      setProductsMenuOpen(false);
                                    }}
                                    className="w-full text-left px-5 py-2.5 text-[13px] font-bold text-ink/70 hover:text-ink hover:bg-ink/5 rounded-xl transition-all mb-1 last:mb-0"
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

          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4 md:space-x-6' : 'space-x-4 md:space-x-6'}`}>
            {/* Soft Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all ${
                  isSolid 
                    ? 'border-ink/5 bg-ink/5 text-ink hover:bg-ink/10' 
                    : 'border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <span className="text-sm">{languages.find(l => l.code === language)?.flag}</span>
                <span className="text-[13px] font-bold uppercase tracking-wider hidden md:block">
                  {language}
                </span>
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                    className="absolute top-full mt-4 right-0 bg-white/95 backdrop-blur-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden min-w-[150px] border border-white/60 p-2"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-colors ${
                          language === lang.code ? 'bg-brand/10 text-ink font-bold' : 'text-ink/70 hover:bg-ink/5'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-[14px] font-bold uppercase tracking-wider">{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className={`hidden sm:flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest transition-all hover:opacity-70 ${
              isSolid 
                ? 'text-ink' 
                : 'text-white border-b border-white/30 pb-0.5 hover:border-white'
            }`}>
              {t.nav.getQuote} ↗
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-full transition-colors ${
                isSolid ? 'text-ink bg-ink/5 hover:bg-ink/10' : 'text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0 }}
            className={`lg:hidden absolute top-[110%] left-4 right-4 bg-white/95 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] rounded-3xl border border-white/60 overflow-hidden pointer-events-auto ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <div className="flex flex-col p-4 space-y-1">
              {navItems.map((item) => (
                <React.Fragment key={item.value}>
                  <button
                    onClick={() => {
                      if (item.value === 'corporate') onNavigate('about');
                      else if (item.value === 'certificates') onNavigate('integratedPolicy');
                      else onNavigate(item.value as View);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full py-4 px-6 text-[15px] font-extrabold uppercase tracking-wider rounded-2xl transition-colors ${
                      isMenuActive(item.value) ? 'bg-ink/5 text-ink' : 'text-ink/60 hover:bg-ink/5 hover:text-ink'
                    } ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    {item.label}
                  </button>
                  {item.value === 'corporate' && (
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          onNavigate('about');
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full py-3 ${isRTL ? 'pr-10 pl-6' : 'pl-10 pr-6'} text-[13px] font-bold uppercase tracking-wider rounded-2xl transition-colors ${
                          currentView === 'about' ? 'bg-brand/10 text-ink' : 'text-ink/50 hover:bg-ink/5 hover:text-ink'
                        } ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        ↳ {t.nav.about}
                      </button>
                      <button
                        onClick={() => {
                          onNavigate('production');
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full py-3 ${isRTL ? 'pr-10 pl-6' : 'pl-10 pr-6'} text-[13px] font-bold uppercase tracking-wider rounded-2xl transition-colors ${
                          currentView === 'production' ? 'bg-brand/10 text-ink' : 'text-ink/50 hover:bg-ink/5 hover:text-ink'
                        } ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        ↳ {t.nav.production}
                      </button>
                      <button
                        onClick={() => {
                          onNavigate('machinery');
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full py-3 ${isRTL ? 'pr-10 pl-6' : 'pl-10 pr-6'} text-[13px] font-bold uppercase tracking-wider rounded-2xl transition-colors ${
                          currentView === 'machinery' ? 'bg-brand/10 text-ink' : 'text-ink/50 hover:bg-ink/5 hover:text-ink'
                        } ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        ↳ {t.nav.machinery}
                      </button>
                      <button
                        onClick={() => {
                          onNavigate('informationSecurity');
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full py-3 ${isRTL ? 'pr-10 pl-6' : 'pl-10 pr-6'} text-[13px] font-bold uppercase tracking-wider rounded-2xl transition-colors ${
                          currentView === 'informationSecurity' ? 'bg-brand/10 text-ink' : 'text-ink/50 hover:bg-ink/5 hover:text-ink'
                        } ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        ↳ {t.nav.informationSecurity}
                      </button>
                    </div>
                  )}
                  {item.value === 'certificates' && (
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          onNavigate('integratedPolicy');
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full py-3 ${isRTL ? 'pr-10 pl-6' : 'pl-10 pr-6'} text-[13px] font-bold uppercase tracking-wider rounded-2xl transition-colors ${
                          currentView === 'integratedPolicy' ? 'bg-brand/10 text-ink' : 'text-ink/50 hover:bg-ink/5 hover:text-ink'
                        } ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        ↳ {t.nav.integratedPolicy}
                      </button>
                      <button
                        onClick={() => {
                          onNavigate('qualityManagement');
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full py-3 ${isRTL ? 'pr-10 pl-6' : 'pl-10 pr-6'} text-[13px] font-bold uppercase tracking-wider rounded-2xl transition-colors ${
                          currentView === 'qualityManagement' ? 'bg-brand/10 text-ink' : 'text-ink/50 hover:bg-ink/5 hover:text-ink'
                        } ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        ↳ {t.nav.qualityManagement}
                      </button>
                      <button
                        onClick={() => {
                          onNavigate('environmentalManagement');
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full py-3 ${isRTL ? 'pr-10 pl-6' : 'pl-10 pr-6'} text-[13px] font-bold uppercase tracking-wider rounded-2xl transition-colors ${
                          currentView === 'environmentalManagement' ? 'bg-brand/10 text-ink' : 'text-ink/50 hover:bg-ink/5 hover:text-ink'
                        } ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        ↳ {t.nav.environmentalManagement}
                      </button>
                      <button
                        onClick={() => {
                          onNavigate('ohsManagement');
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full py-3 ${isRTL ? 'pr-10 pl-6' : 'pl-10 pr-6'} text-[13px] font-bold uppercase tracking-wider rounded-2xl transition-colors ${
                          currentView === 'ohsManagement' ? 'bg-brand/10 text-ink' : 'text-ink/50 hover:bg-ink/5 hover:text-ink'
                        } ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        ↳ {t.nav.ohsManagement}
                      </button>
                    </div>
                  )}
                </React.Fragment>
              ))}
              
              <div className="pt-4 px-2">
                <button className="w-full bg-brand text-ink font-extrabold uppercase tracking-wider py-4 text-[14px] rounded-2xl shadow-md hover:-translate-y-1 transition-all active:translate-y-0">
                  {t.nav.getQuote}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

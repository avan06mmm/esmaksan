
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

import PageHero from '../components/PageHero';

interface ProductsProps {
  initialCategory?: string;
  initialSubCategory?: string | null;
}

const Products: React.FC<ProductsProps> = ({ initialCategory = 'all', initialSubCategory = null }) => {
  const { t, isRTL, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [activeSubFilter, setActiveSubFilter] = useState<string | null>(initialSubCategory);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setActiveFilter(initialCategory);
    setActiveSubFilter(initialSubCategory);
  }, [initialCategory, initialSubCategory]);
  
  const categories = useMemo(() => {
    return [{ label: t.products.filterAll, value: 'all' }, ...t.nav.categories];
  }, [t.products.filterAll, t.nav.categories]);

  const filteredItems = useMemo(() => {
    let items = t.products.items;
    
    if (activeFilter !== 'all') {
      items = items.filter((m: any) => m.category === activeFilter);
    }
    
    if (activeSubFilter) {
      items = items.filter((m: any) => m.subCategory === activeSubFilter);
    }
    
    return items;
  }, [activeFilter, activeSubFilter, t.products.items]);

  const handleFilterChange = (catValue: string) => {
    setActiveFilter(catValue);
    setActiveSubFilter(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24 font-sans text-ink selection:bg-brand selection:text-ink">
      
      {/* 1. HERO SECTION */}
      <PageHero 
        tag={t.products.hero.tag}
        title={t.products.hero.title}
        highlight={t.products.hero.highlight}
        statValue={filteredItems.length}
        statLabel={t.products.hero.totalLabel}
      />

      {/* 2. APP-LIKE LAYOUT: FLOATING SIDEBAR + GRID */}
      <div className={`max-w-[1600px] mx-auto px-6 md:px-8 mt-16 flex flex-col lg:flex-row gap-10 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* SLEEK SIDEBAR */}
        <aside className="w-full lg:w-[320px] flex-shrink-0 relative">
          <div className="lg:sticky lg:top-[120px] flex flex-col bg-white rounded-[2.5rem] p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] border border-ink/5">
            <div className={`flex items-center justify-between mb-8 px-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
               <h3 className="text-[12px] font-black uppercase tracking-[0.3em] text-ink/40">
                 {t.footer.categoriesTitle}
               </h3>
               <div className="w-8 h-px bg-ink/10" />
            </div>
            
            <div className="relative space-y-2">
              {categories.map((cat: any) => {
                const isActive = activeFilter === cat.value;
                const hasSubs = activeFilter !== 'all' && t.nav.categories.find((c: any) => c.value === cat.value)?.subCategories;
                
                return (
                  <div key={cat.value} className="relative">
                    <button
                      onClick={() => handleFilterChange(cat.value)}
                      className={`relative w-full flex items-center justify-between px-6 py-4 rounded-[1.5rem] transition-all duration-300 z-10 ${
                        isActive ? 'text-ink' : 'text-ink/60 hover:text-ink hover:bg-ink/5'
                      }`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="activeCategory"
                          className="absolute inset-0 bg-brand/20 rounded-[1.5rem] -z-10"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                        />
                      )}
                      
                      <span className="font-extrabold text-[15px] tracking-tight">{cat.label}</span>
                      {hasSubs && (
                        <span className={`transition-transform duration-300 ${isActive ? 'rotate-180 text-brand' : ''}`}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </span>
                      )}
                    </button>
                    
                    {/* Subcategories */}
                    <AnimatePresence>
                      {isActive && hasSubs && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className={`pt-3 pb-3 px-6 space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {t.nav.categories.find((c: any) => c.value === cat.value)?.subCategories?.map((sub: any) => {
                               const isSubActive = activeSubFilter === sub.value;
                               return (
                                <button
                                  key={sub.value}
                                  onClick={() => setActiveSubFilter(sub.value)}
                                  className={`block w-full px-4 py-2.5 text-[14px] font-bold rounded-[1rem] transition-all ${
                                    isSubActive ? 'bg-ink text-white shadow-md scale-[1.02]' : 'text-ink/60 hover:text-ink hover:bg-ink/5'
                                  }`}
                                >
                                  {sub.label}
                                </button>
                               )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* PRODUCTS GRID */}
        <div className="flex-1">
          {/* Header of the grid */}
          <div className={`mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 px-2 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
             <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <motion.h2 
                   key={activeFilter + (activeSubFilter || '')}
                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                   className="text-4xl md:text-6xl font-black text-ink tracking-tighter"
                >
                  {categories.find((c: any) => c.value === activeFilter)?.label} 
                </motion.h2>
                <AnimatePresence>
                  {activeSubFilter && (
                     <motion.div 
                       initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                       className={`mt-4 flex items-center space-x-3 text-brand font-black uppercase tracking-[0.2em] text-[13px] ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}
                     >
                        <span className="text-xl">↳</span>
                        <span className="bg-brand/10 px-4 py-1.5 rounded-lg border border-brand/20">{activeSubFilter}</span>
                        <button onClick={() => setActiveSubFilter(null)} className="ml-4 px-3 py-1.5 rounded-lg text-ink/40 hover:text-white hover:bg-red-500 transition-colors">
                          ✕ {language === 'tr' ? 'Temizle' : language === 'en' ? 'Clear' : language === 'ru' ? 'Очистить' : 'مسح'}
                        </button>
                     </motion.div>
                  )}
                </AnimatePresence>
             </div>
             
             <div className={`md:flex items-center hidden bg-white rounded-full px-5 py-2 shadow-sm border border-ink/5`}>
               <span className="text-[12px] font-black uppercase tracking-widest text-ink/40">{filteredItems.length} {t.products.hero.totalLabel}</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item: any, idx: number) => (
                <motion.div 
                  layout
                  key={item.id} 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
                  className="group flex flex-col bg-white rounded-[2rem] p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-ink/5"
                >
                  {/* Category Label (Black text) - slightly above image */}
                  <div className={`mb-2 flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    <span className="bg-[#f0f2f5] px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-[0.2em] text-ink">
                      {t.nav.categories.find((c:any) => c.value === item.category)?.label || item.category}
                    </span>
                  </div>

                  {/* Image Area - Shorter height */}
                  <div 
                    className="w-full h-48 md:h-52 bg-transparent relative cursor-pointer flex items-center justify-center"
                    onClick={() => setSelectedImage(item.image)}
                  >
                     <img 
                       src={item.image} 
                       alt={item.name} 
                       className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105 drop-shadow-md mix-blend-multiply"
                     />
                     <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/95 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-xl border border-ink/5">
                          <svg className="w-6 h-6 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </div>
                     </div>
                  </div>

                  {/* Text Area (Yellow text) - slightly below image */}
                  <div className={`mt-3 mb-1 flex items-center ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    <h3 className="text-lg lg:text-xl font-black text-brand tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="py-40 mt-8 text-center bg-white rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-ink/5"
            >
               <div className="w-24 h-24 mx-auto mb-6 bg-[#f4f5f7] rounded-full flex items-center justify-center text-4xl">
                 🔍
               </div>
               <p className="text-2xl font-black text-ink/40 uppercase tracking-widest">{t.products.noProducts}</p>
            </motion.div>
          )}

        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 bg-[#050505]/90 backdrop-blur-2xl" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl max-h-full flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="w-full relative shadow-[0_0_100px_rgba(250,204,21,0.15)] rounded-[2rem] overflow-hidden">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none" />
                <img
                  src={selectedImage}
                  alt="Product detail fullscreen"
                  className="w-full max-h-[80vh] object-contain relative z-10 drop-shadow-2xl p-8"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. ULTRA MODERN CTA */}
      <section className="mt-32 max-w-[1600px] mx-auto px-6 md:px-8">
        <div className="relative bg-[#050505] rounded-[3rem] overflow-hidden py-32 px-6 md:px-20 text-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-brand/30 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              {t.products.cta.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-medium mb-14 max-w-2xl leading-relaxed">
              {t.products.cta.desc}
            </p>
            <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 w-full sm:w-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <button className="w-full sm:w-auto bg-brand text-ink font-black text-[14px] uppercase tracking-[0.2em] px-12 py-6 rounded-full hover:scale-105 hover:bg-white transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(250,204,21,0.5)]">
                {t.products.cta.button}
              </button>
              <button className="w-full sm:w-auto bg-white/5 backdrop-blur-2xl border border-white/20 text-white font-black text-[14px] uppercase tracking-[0.2em] px-12 py-6 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                {t.whatsapp}
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;


import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

interface ProductsProps {
  initialCategory?: string;
  initialSubCategory?: string | null;
}

const Products: React.FC<ProductsProps> = ({ initialCategory = 'all', initialSubCategory = null }) => {
  const { t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [activeSubFilter, setActiveSubFilter] = useState<string | null>(initialSubCategory);

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
    <div className="min-h-screen bg-paper">
      {/* Hero Header */}
      <section className="relative pt-44 pb-24 bg-ink overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-10" />
        <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-1/2 h-full bg-brand/5 ${isRTL ? 'skew-x-12 -translate-x-1/4' : '-skew-x-12 translate-x-1/4'}`} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`flex flex-col md:flex-row md:items-end justify-between gap-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center space-x-4 mb-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}
              >
                <div className="h-px w-16 bg-brand" />
                <span className="text-brand font-black uppercase tracking-[0.5em] text-[10px]">{t.products.hero.tag}</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8"
              >
                {t.products.hero.title} <br/> <span className="text-brand">{t.products.hero.highlight}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/50 font-medium text-lg leading-relaxed max-w-2xl"
              >
                {t.products.hero.desc}
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className={`glass-card p-10 border-brand ${isRTL ? 'border-r-4' : 'border-l-4'}`}
            >
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">{t.products.hero.totalLabel}</p>
               <p className="text-6xl font-tech font-bold text-brand tracking-tighter">{t.products.items.length}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[72px] md:top-[88px] z-40 bg-paper/80 backdrop-blur-xl border-b border-ink/5 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center space-x-4 overflow-x-auto no-scrollbar ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
            {categories.map((cat: any) => (
              <button
                key={cat.value}
                onClick={() => handleFilterChange(cat.value)}
                className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap rounded-sm border-2 ${
                  activeFilter === cat.value 
                    ? 'bg-ink text-brand border-ink shadow-2xl' 
                    : 'bg-transparent text-ink/40 border-transparent hover:border-ink/10 hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sub-category Filter Bar */}
          {activeFilter !== 'all' && t.nav.categories.find((c: any) => c.value === activeFilter)?.subCategories && (
            <div className={`mt-8 pt-8 border-t border-ink/5 flex items-center flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-ink/40 mr-4">
                {isRTL ? 'الفئة الفرعية:' : 'ALT GRUP:'}
              </span>
              <div className="flex flex-wrap gap-3">
                {t.nav.categories.find((c: any) => c.value === activeFilter)?.subCategories?.map((sub: any) => (
                  <button
                    key={sub.value}
                    onClick={() => setActiveSubFilter(sub.value)}
                    className={`px-6 py-3 text-[9px] font-black uppercase tracking-[0.15em] transition-all rounded-sm border-2 ${
                      activeSubFilter === sub.value
                        ? 'bg-ink text-brand border-ink shadow-lg'
                        : 'bg-transparent text-ink/40 border-ink/5 hover:border-ink/20 hover:text-ink'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
                {activeSubFilter && (
                  <button
                    onClick={() => setActiveSubFilter(null)}
                    className="px-4 py-3 text-[9px] font-black uppercase tracking-widest text-brand hover:text-ink transition-colors bg-ink/5 hover:bg-ink/10 rounded-sm"
                  >
                    {isRTL ? 'مسح' : 'TEMİZLE'} ✕
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Grid Section */}
      <section className="py-24 industrial-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item: any, idx: number) => (
                <motion.div 
                  layout
                  key={item.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group flex flex-col bg-paper border border-ink/5 hover:border-brand transition-all hover:shadow-2xl overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden bg-ink-light relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'}`}>
                      <span className={`bg-ink text-brand text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 border-brand ${isRTL ? 'border-r-4' : 'border-l-4'}`}>
                        {t.nav.categories.find(c => c.value === item.category)?.label || item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`p-10 flex-1 flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-2xl font-black text-ink uppercase tracking-tighter mb-6 group-hover:text-brand transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-ink/60 text-sm font-medium leading-relaxed mb-10">
                      {item.description}
                    </p>

                    {/* Technical Specs */}
                    <div className="grid grid-cols-1 gap-2 mb-10 mt-auto">
                      {item.specs.map((spec: any, i: number) => (
                        <div key={i} className={`flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.1em] text-ink/40 bg-paper-dark px-4 py-3 border border-ink/5 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                          <div className="w-1.5 h-1.5 bg-brand" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className="btn-primary w-full">
                      {t.products.addToQuote}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <div className="py-32 text-center">
               <p className="text-2xl font-black text-ink/20 uppercase tracking-widest">{t.products.noProducts}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ink py-32 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            {t.products.cta.title}
          </h2>
          <p className="text-xl text-white/50 font-medium mb-16 leading-relaxed">
            {t.products.cta.desc}
          </p>
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button className="btn-primary">{t.products.cta.button}</button>
            <button className="px-12 py-4 border-2 border-white/20 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all">{t.whatsapp}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

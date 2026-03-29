
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { t, isRTL } = useLanguage();

  const slides = t.hero.slides.map((slide, i) => ({
    ...slide,
    image: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600"
    ][i]
  }));

  const rotate = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(rotate, 8000);
    return () => clearInterval(timer);
  }, [rotate]);

  return (
    <div className="relative">
      {/* Hero Slider */}
      <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-ink">
        <AnimatePresence mode="wait">
          <motion.div 
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img src={slides[current].image} className="w-full h-full object-cover" alt="Industrial" />
            <div className={`absolute inset-0 bg-gradient-to-r ${isRTL ? 'from-transparent via-ink/60 to-ink' : 'from-ink via-ink/60 to-transparent'}`} />
          </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className={`max-w-4xl ${isRTL ? 'mr-auto text-right' : 'ml-0 text-left'}`}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              key={`content-${current}`}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'} space-x-4 mb-8`}>
                <div className="h-px w-16 bg-brand" />
                <span className="text-brand font-black uppercase tracking-[0.5em] text-[10px]">{t.hero.brand}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-10 uppercase">
                {slides[current].title} <br/>
                <span className="text-brand">{slides[current].highlight}</span>
              </h1>
              
              <p className={`text-lg text-white/60 font-medium leading-relaxed mb-14 max-w-2xl ${isRTL ? 'mr-auto' : 'ml-0'}`}>
                {slides[current].desc}
              </p>

              <div className={`flex flex-wrap gap-8 items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t.hero.viewProducts}
                </motion.button>
                
                <div className={`flex items-center space-x-6 px-8 ${isRTL ? 'border-r space-x-reverse' : 'border-l'} border-white/10`}>
                   <div className="text-4xl font-tech font-bold text-white tracking-tighter">{slides[current].stats.val}</div>
                   <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] leading-tight">
                     {slides[current].stats.label}
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Progress Navigation */}
        <div className="absolute bottom-16 left-6 right-6 z-20">
          <div className={`max-w-7xl mx-auto flex ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'} space-x-6`}>
            {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className="flex-1 group py-4"
              >
                <div className="h-0.5 w-full bg-white/10 relative overflow-hidden">
                  {current === i && (
                    <motion.div 
                      className="absolute inset-0 bg-brand origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 8, ease: 'linear' }}
                    />
                  )}
                </div>
                <div className={`mt-4 text-[10px] font-black uppercase tracking-widest transition-colors ${current === i ? 'text-brand' : 'text-white/20'}`}>
                  0{i + 1}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section - Bento Grid */}
      <section className="py-32 bg-paper industrial-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.specs.items.map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-paper-dark border border-ink/5 hover:border-brand transition-all group"
              >
                <div className={`text-4xl font-tech font-black text-ink/5 mb-8 group-hover:text-brand/20 transition-colors ${isRTL ? 'text-left' : 'text-right'}`}>
                  {spec.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{spec.title}</h3>
                <p className="text-ink/60 leading-relaxed font-medium">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`flex flex-col md:flex-row justify-between items-end mb-24 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={`max-w-2xl ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-center space-x-4 mb-6 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className="h-px w-12 bg-brand" />
                <span className="text-brand font-black uppercase tracking-[0.4em] text-[10px]">{t.featured.subtitle}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">{t.featured.title}</h2>
            </div>
            <motion.button 
              whileHover={{ x: isRTL ? -10 : 10 }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-brand border-b-2 border-brand pb-2 mt-12 md:mt-0"
            >
              {t.featured.viewAll}
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.products.items.slice(0, 4).map((item: any, i: number) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden bg-ink-light"
              >
                <img src={item.image} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={item.name} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <div className={`absolute bottom-0 left-0 p-8 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-2">{item.category}</p>
                  <h4 className="text-xl font-black mb-6 leading-none uppercase tracking-tighter">{item.name}</h4>
                  <div className={`h-0.5 w-8 bg-brand group-hover:w-full transition-all duration-500 ${isRTL ? 'mr-auto' : 'ml-0'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

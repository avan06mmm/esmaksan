
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const QualityControl: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 bg-ink overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`max-w-4xl ${isRTL ? 'mr-auto text-right' : 'ml-0 text-left'}`}>
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center space-x-4 mb-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}
            >
              <div className="h-px w-16 bg-brand" />
              <span className="text-brand font-black uppercase tracking-[0.5em] text-[10px]">{t.qualityControl.hero.tag}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-12"
            >
              {t.qualityControl.hero.title} <br/> <span className="text-brand">{t.qualityControl.hero.highlight}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 font-medium text-lg leading-relaxed"
            >
              {t.qualityControl.hero.desc}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 industrial-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
             <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className={`aspect-video bg-ink-light overflow-hidden ${isRTL ? 'border-r-8' : 'border-l-8'} border-brand shadow-2xl`}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                  alt="Quality Control" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <h2 className="text-4xl font-black text-ink uppercase tracking-tighter">
                {t.qualityControl.inspection.title}
              </h2>
              <p className="text-ink/60 text-lg leading-relaxed font-medium">
                {t.qualityControl.inspection.desc}
              </p>
              <ul className="space-y-4">
                {t.qualityControl.inspection.items.map((item, idx) => (
                  <li key={idx} className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                    <div className="w-2 h-2 bg-brand rounded-full" />
                    <span className="text-ink font-bold uppercase text-sm tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityControl;

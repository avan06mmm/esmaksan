
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const Production: React.FC = () => {
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
              <span className="text-brand font-black uppercase tracking-[0.5em] text-[10px]">{t.production.hero.tag}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-12"
            >
              {t.production.hero.title} <br/> <span className="text-brand">{t.production.hero.highlight}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 font-medium text-lg leading-relaxed"
            >
              {t.production.hero.desc}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`aspect-square bg-brand/10 overflow-hidden border-brand/20 border-2 shadow-2xl`}>
                <img 
                  src="/uretim2.jpg" 
                  alt="Expertise" 
                  className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand/10 border border-brand/20 -z-10" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter text-brand">
                {t.production.expertise.title}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                {t.production.expertise.desc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 industrial-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-black text-ink uppercase tracking-tighter">
                {t.production.capabilities.title}
              </h2>
              <p className="text-ink/60 text-lg leading-relaxed font-medium">
                {t.production.capabilities.desc}
              </p>
              <div className="grid grid-cols-1 gap-6">
                {t.production.capabilities.items.map((item, idx) => (
                  <div key={idx} className={`flex items-start space-x-4 p-6 bg-white border border-ink/5 shadow-sm hover:border-brand/30 transition-colors ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                    <div className="w-10 h-10 bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand font-black text-xs">0{idx + 1}</span>
                    </div>
                    <span className="text-ink font-bold uppercase text-sm tracking-widest leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`aspect-video bg-ink-light overflow-hidden ${isRTL ? 'border-r-8' : 'border-l-8'} border-brand shadow-2xl`}>
                <img 
                  src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2070" 
                  alt="Advanced Technology" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-paper border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black text-ink uppercase tracking-tighter"
            >
              {t.production.team.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-ink/60 text-lg leading-relaxed font-medium"
            >
              {t.production.team.desc}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-8"
            >
              <div className="inline-block p-8 bg-ink text-white border-l-8 border-brand">
                <p className="text-sm font-black uppercase tracking-[0.3em] leading-relaxed">
                  {t.production.team.cta}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Production;

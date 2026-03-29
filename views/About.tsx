
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
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
              <span className="text-brand font-black uppercase tracking-[0.5em] text-[10px]">{t.about.hero.tag}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-12"
            >
              {t.about.hero.title} <br/> <span className="text-brand">{t.about.hero.highlight}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 font-medium text-lg leading-relaxed"
            >
              {t.about.hero.desc}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 shadow-2xl">
            {t.about.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="bg-paper p-12 group hover:bg-ink transition-all duration-500"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/40 group-hover:text-brand transition-colors mb-4">{stat.label}</p>
                <div className={`flex items-baseline space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  <span className="text-5xl font-black text-ink group-hover:text-white transition-colors tracking-tighter">{stat.value}</span>
                  <span className="text-xs font-bold text-brand">{stat.unit}</span>
                </div>
              </motion.div>
            ))}
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
              className={`relative ${isRTL ? 'order-2' : ''}`}
            >
              <div className={`aspect-square bg-ink-light overflow-hidden ${isRTL ? 'border-r-8' : 'border-l-8'} border-brand`}>
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" 
                  alt="Factory" 
                  className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                />
              </div>
              <div className={`absolute -bottom-12 ${isRTL ? '-left-12' : '-right-12'} w-64 h-64 bg-brand p-12 hidden md:flex flex-col justify-end`}>
                 <p className="text-ink font-black text-4xl leading-none tracking-tighter uppercase">{t.about.quality.title.split(' ')[0]} <br/> {t.about.quality.title.split(' ')[1]}</p>
              </div>
            </motion.div>

            <div className={`space-y-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-ink uppercase tracking-tighter">{t.about.vision.title}</h2>
                <p className="text-ink/60 text-lg leading-relaxed font-medium">
                  {t.about.vision.desc}
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-ink uppercase tracking-tighter">{t.about.mission.title}</h2>
                <p className="text-ink/60 text-lg leading-relaxed font-medium">
                  {t.about.mission.desc}
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-8">
                <div className="p-8 border border-ink/5 bg-paper-dark">
                  <p className="text-brand font-black text-xl mb-2">ISO 9001:2015</p>
                  <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">{t.about.quality.subtitle}</p>
                </div>
                <div className="p-8 border border-ink/5 bg-paper-dark">
                  <p className="text-brand font-black text-xl mb-2">{t.about.quality.ceCertified}</p>
                  <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">{t.about.quality.europeanStandards}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-ink-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-ink uppercase tracking-tighter">{t.about.journey.title}</h2>
            <div className="h-1 w-24 bg-brand mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.about.journey.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-12 bg-paper border-t-4 border-brand shadow-xl"
              >
                <span className={`text-6xl font-black text-ink/5 absolute top-4 ${isRTL ? 'left-8' : 'right-8'}`}>{item.year}</span>
                <p className="text-brand font-black text-2xl mb-4 relative z-10">{item.year}</p>
                <h3 className="text-xl font-black text-ink uppercase mb-4 relative z-10">{item.title}</h3>
                <p className="text-ink/60 font-medium text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

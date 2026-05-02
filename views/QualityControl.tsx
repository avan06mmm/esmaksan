
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import PageHero from '../components/PageHero';

const QualityControl: React.FC = () => {
  const { t, isRTL, language } = useLanguage();

  const statValues = {
    tr: "Kalite",
    en: "Quality",
    ru: "Качество",
    ar: "جودة"
  };

  const headerStats = {
    tr: [
      { value: "ISO", label: "Standartlar", desc: "9001:2015 Uyumluluğu" },
      { value: "%100", label: "Test Onayı", desc: "Laboratuvar destekli süreç" },
      { value: "Sıfır", label: "Hata Toleransı", desc: "Mükemmelliği hedefleyen vizyon." }
    ],
    en: [
      { value: "ISO", label: "Standards", desc: "9001:2015 Compliance" },
      { value: "100%", label: "Test Certified", desc: "Laboratory-supported process" },
      { value: "Zero", label: "Fault Tolerance", desc: "Vision aiming for perfection." }
    ],
    ru: [
      { value: "ISO", label: "Стандарты", desc: "Соответствие 9001:2015" },
      { value: "100%", label: "Тестировано", desc: "Процесс с лабораторной поддержкой" },
      { value: "Ноль", label: "Допуск к ошибкам", desc: "Движение к совершенству." }
    ],
    ar: [
      { value: "ISO", label: "المعايير", desc: "امتثال 9001:2015" },
      { value: "100%", label: "معتمد مختبرياً", desc: "عمليات مدعومة مختبرياً" },
      { value: "صفر", label: "التسامح مع الأخطاء", desc: "رؤية تهدف إلى الكمال." }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      
      <PageHero 
        tag={t.qualityControl.hero.tag}
        title={t.qualityControl.hero.title}
        highlight={t.qualityControl.hero.highlight}
        statValue={statValues[language] || "Kalite"}
        statIcon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

      {/* Subtle background ambient glow */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />
</svg>
        }
      />

      {/* Design Header Section */}
      <div className="pt-4 md:pt-8 px-6 md:px-8 max-w-[1600px] mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          {(headerStats[language] || headerStats.en).map((stat, idx) => (
            <div key={idx} className="flex-1">
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-2">
                {stat.value}
              </h2>
              <div className="h-px bg-white/20 mb-4 w-full" />
              <h3 className="font-bold text-sm text-white mb-2">{stat.label}</h3>
              <p className="text-xs text-white/50 font-medium">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <section className="py-32 industrial-grid">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className={`flex flex-col ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-24 items-center`}>
             <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1 flex-1 min-w-0"
            >
              <div className={`aspect-video bg-[#050505] overflow-hidden ${isRTL ? 'border-r-8' : 'border-l-8'} border-brand shadow-2xl`}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                  alt="Quality Control" 
                  className="w-full h-full object-cover hover:opacity-100 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2 flex-1 min-w-0"
            >
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                {t.qualityControl.inspection.title}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                {t.qualityControl.inspection.desc}
              </p>
              <ul className="space-y-4">
                {t.qualityControl.inspection.items.map((item, idx) => (
                  <li key={idx} className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                    <div className="w-2 h-2 bg-brand rounded-full" />
                    <span className="text-white font-bold uppercase text-sm tracking-widest">{item}</span>
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

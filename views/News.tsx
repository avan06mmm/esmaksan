import React from 'react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../LanguageContext';

const pageLocal: Record<string, any> = {
  tr: {
    tag: 'HABERLER',
    title: 'GÜNCEL',
    highlight: 'HABERLER',
    statValue: 'YENİ',
    comingSoon: 'Detaylar çok yakında...',
    subtitle: 'Yakında burada haberler ve duyurular yer alacaktır.',
  },
  en: {
    tag: 'NEWS',
    title: 'LATEST',
    highlight: 'NEWS',
    statValue: 'NEW',
    comingSoon: 'Details coming soon...',
    subtitle: 'News and announcements will be available here soon.',
  },
  ru: {
    tag: 'НОВОСТИ',
    title: 'ПОСЛЕДНИЕ',
    highlight: 'НОВОСТИ',
    statValue: 'НОВОЕ',
    comingSoon: 'Подробности скоро...',
    subtitle: 'Здесь скоро появятся новости и объявления.',
  },
  ar: {
    tag: 'الأخبار',
    title: 'آخر',
    highlight: 'الأخبار',
    statValue: 'جديد',
    comingSoon: 'التفاصيل قريبًا...',
    subtitle: 'ستتوفر الأخبار والإعلانات هنا قريبًا.',
  },
};

const News: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const P = pageLocal[language] || pageLocal.tr;

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden flex flex-col">
      <PageHero
        tag={P.tag}
        title={P.title}
        highlight={P.highlight}
        statValue={P.statValue}
        statIcon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
          </svg>
        }
      />

      {/* Ambient glow */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />

      <section className="flex-grow px-6 md:px-8 max-w-[1600px] mx-auto mb-10 mt-10 w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`bg-white/[0.02] backdrop-blur-xl border border-white/5 p-12 md:p-16 rounded-3xl shadow-2xl text-center max-w-2xl relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}
        >
          {/* Decorative glows */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 h-24 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-8 border border-brand/20"
            >
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
              </svg>
            </motion.div>

            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-[11px] font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-6"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-brand inline-block"
              />
              COMING SOON
            </motion.div>

            {/* Main Text */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight"
            >
              {P.comingSoon}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white/50 text-base font-medium leading-relaxed"
            >
              {P.subtitle}
            </motion.p>

            {/* Decorative dots row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-2 mt-10"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
                  className="w-2 h-2 rounded-full bg-brand"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default News;

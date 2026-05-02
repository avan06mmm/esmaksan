import React from 'react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../LanguageContext';

const pageLocal: Record<string, any> = {
  tr: {
    tag: 'KATALOG',
    title: 'ÜRÜN',
    highlight: 'KATALOĞUMUZ',
    statValue: 'PDF',
    heading: 'Kataloğumuzu İnceleyin',
    desc: 'Geniş ürün portföyümüzü detaylı bir şekilde incelemek için güncel kataloğumuzu PDF formatında indirebilirsiniz.',
    downloadBtn: 'KATALOĞU İNDİR (PDF)'
  },
  en: {
    tag: 'CATALOG',
    title: 'PRODUCT',
    highlight: 'OUR CATALOG',
    statValue: 'PDF',
    heading: 'Explore Our Catalog',
    desc: 'You can download our current catalog in PDF format to explore our extensive product portfolio in detail.',
    downloadBtn: 'DOWNLOAD CATALOG (PDF)'
  },
  ru: {
    tag: 'КАТАЛОГ',
    title: 'НАШ',
    highlight: 'КАТАЛОГ ПРОДУКЦИИ',
    statValue: 'PDF',
    heading: 'Изучите наш каталог',
    desc: 'Вы можете скачать наш актуальный каталог в формате PDF, чтобы подробно ознакомиться с нашим широким ассортиментом продукции.',
    downloadBtn: 'СКАЧАТЬ КАТАЛОГ (PDF)'
  },
  ar: {
    tag: 'كتالوج',
    title: 'منتجاتنا',
    highlight: 'كتالوج',
    statValue: 'PDF',
    heading: 'استكشف كتالوجنا',
    desc: 'يمكنك تنزيل كتالوجنا الحالي بتنسيق PDF لاستكشاف مجموعة منتجاتنا الواسعة بالتفصيل.',
    downloadBtn: 'تحميل الكتالوج (PDF)'
  }
};

const Catalog: React.FC = () => {
  const { language } = useLanguage();
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />

      {/* Subtle background ambient glow */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />

          </svg>
        }
      />
      <section className="flex-grow px-6 md:px-8 max-w-[1600px] mx-auto mb-10 mt-10 w-full flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/[0.02] backdrop-blur-xl border border-white/5 p-12 rounded-3xl shadow-2xl border border-white/5 text-center max-w-2xl relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">{P.heading}</h2>
            <p className="text-white/70 text-lg font-medium leading-relaxed mb-10">
              {P.desc}
            </p>
            <button className="bg-ink text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:bg-brand hover:text-white transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto mx-auto group">
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {P.downloadBtn}
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Catalog;

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const PDF_PATH = '/katalog.pdf';

const pageLocal: Record<string, any> = {
  tr: {
    tag: 'KATALOG',
    heading: 'Kataloğumuzu İnceleyin',
    desc: 'Geniş ürün portföyümüzü detaylı bir şekilde incelemek için güncel kataloğumuzu aşağıda önizleyebilir veya PDF formatında indirebilirsiniz.',
    downloadBtn: 'KATALOĞU İNDİR (PDF)',
    previewLabel: 'KATALOG ÖNİZLEME',
    noPreview: 'PDF önizlemesi yüklenemedi. Lütfen indirip açın.',
  },
  en: {
    tag: 'CATALOG',
    heading: 'Explore Our Catalog',
    desc: 'You can preview our current catalog below or download it in PDF format to explore our extensive product portfolio in detail.',
    downloadBtn: 'DOWNLOAD CATALOG (PDF)',
    previewLabel: 'CATALOG PREVIEW',
    noPreview: 'PDF preview could not be loaded. Please download and open it.',
  },
  ru: {
    tag: 'КАТАЛОГ',
    heading: 'Изучите наш каталог',
    desc: 'Вы можете ознакомиться с нашим актуальным каталогом ниже или скачать его в формате PDF.',
    downloadBtn: 'СКАЧАТЬ КАТАЛОГ (PDF)',
    previewLabel: 'ПРЕДВАРИТЕЛЬНЫЙ ПРОСМОТР',
    noPreview: 'Предварительный просмотр PDF не удалось загрузить. Пожалуйста, скачайте и откройте его.',
  },
  ar: {
    tag: 'كتالوج',
    heading: 'استكشف كتالوجنا',
    desc: 'يمكنك معاينة كتالوجنا الحالي أدناه أو تنزيله بتنسيق PDF لاستكشاف مجموعة منتجاتنا الواسعة بالتفصيل.',
    downloadBtn: 'تحميل الكتالوج (PDF)',
    previewLabel: 'معاينة الكتالوج',
    noPreview: 'تعذر تحميل معاينة PDF. يرجى تنزيله وفتحه.',
  }
};

const Catalog: React.FC = () => {
  const { language } = useLanguage();
  const P = pageLocal[language] || pageLocal.tr;
  const [pdfError, setPdfError] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden flex flex-col">
      {/* Ambient glow */}
      <div className="absolute top-[20vh] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />

      <section className="flex-grow px-4 md:px-8 max-w-[1600px] mx-auto pt-28 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          {/* Info card + download button */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-brand/10 rounded-full blur-3xl pointer-events-none" />

            {/* Tag */}
            <div className="absolute top-5 left-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-brand inline-block" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{P.tag}</span>
            </div>

            {/* Icon */}
            <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mt-4 md:mt-0">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            {/* Text */}
            <div className="relative z-10 flex-grow text-center md:text-left">
              <h1 className="text-2xl font-black uppercase tracking-tight text-white mb-2">{P.heading}</h1>
              <p className="text-white/60 text-base leading-relaxed">{P.desc}</p>
            </div>

            {/* Download button */}
            <a
              href={PDF_PATH}
              download="Esmaksan-Katalog.pdf"
              className="relative z-10 flex-shrink-0 flex items-center gap-3 bg-brand text-ink font-black uppercase tracking-wider px-7 py-4 rounded-full shadow-lg hover:bg-brand/80 transition-all duration-300 group whitespace-nowrap"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {P.downloadBtn}
            </a>
          </div>

          {/* PDF Preview */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl overflow-hidden">
            {/* Preview header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-brand" />
                <span className="text-white/50 text-xs font-bold uppercase tracking-widest">{P.previewLabel}</span>
              </div>
              <a
                href={PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand text-xs font-bold uppercase tracking-wider hover:text-brand/70 transition-colors duration-200 flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Yeni sekmede aç
              </a>
            </div>

            {/* Iframe PDF viewer */}
            {!pdfError ? (
              <iframe
                src={`${PDF_PATH}#toolbar=1&navpanes=1&scrollbar=1`}
                title="Esmaksan Katalog PDF"
                className="w-full"
                style={{ height: '140vh', minHeight: '800px', border: 'none', background: '#111' }}
                onError={() => setPdfError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-white/40 gap-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm">{P.noPreview}</p>
                <a
                  href={PDF_PATH}
                  download="Esmaksan-Katalog.pdf"
                  className="mt-2 flex items-center gap-2 bg-brand text-ink font-bold uppercase tracking-wider px-6 py-3 rounded-full text-sm hover:bg-brand/80 transition-colors duration-200"
                >
                  {P.downloadBtn}
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Catalog;

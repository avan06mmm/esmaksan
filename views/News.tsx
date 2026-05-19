import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../LanguageContext';

const pageLocal: Record<string, any> = {
  tr: {
    tag: 'HABERLER & DUYURULAR',
    title: 'GÜNCEL',
    highlight: 'HABERLER',
    statValue: 'FUAR',
    fairBadge: 'FUAR DUYURUSU',
    fairTitle: 'KOMATEK 2026\'DA YERİMİZİ ALIYORUZ!',
    fairDate: '3 - 6 HAZİRAN 2026',
    fairLocation: 'İSTANBUL FUAR MERKEZİ, İSTANBUL',
    fairStand: 'SALON: 3 | STAND: 3-901/C',
    fairText1: 'Esmaksan olarak, iş makineleri endüstrisinin en büyük buluşma noktalarından biri olan Komatek 2026 fuarında en yeni teknolojiye sahip ürünlerimiz ve geniş yedek parça yelpazemizle yer alacağız.',
    fairText2: 'Caterpillar, Komatsu, Volvo, Hitachi, Sumitomo ve diğer dünya markaları için yüksek hassasiyetle ürettiğimiz şanzıman, diferansiyel ve motor yedek parçalarını standımızda yakından inceleyebilirsiniz. Global iş ortaklarımızla buluşmak ve yeni iş birliklerine imza atmak için sabırsızlanıyoruz.',
    fairText3: 'Tüm sektör temsilcilerini, distribütörlerimizi ve değerli iş ortaklarımızı standımıza davet etmekten onur duyarız.',
    posterToggleTr: 'Türkçe Afiş',
    posterToggleEn: 'İngilizce Afiş',
    getInvitation: 'ONLINE KAYIT VE DAVETİYE',
    viewZoom: 'BÜYÜTMEK İÇİN TIKLAYIN',
    closeLabel: 'Kapat',
    newsLabel: 'DUYURULARIMIZ',
  },
  en: {
    tag: 'NEWS & ANNOUNCEMENTS',
    title: 'LATEST',
    highlight: 'NEWS',
    statValue: 'EXPO',
    fairBadge: 'EXHIBITION ANNOUNCEMENT',
    fairTitle: 'WE ARE AT KOMATEK 2026!',
    fairDate: 'JUNE 3 - 6, 2026',
    fairLocation: 'ISTANBUL EXPO CENTER, ISTANBUL',
    fairStand: 'HALL: 3 | BOOTH: 3-901/C',
    fairText1: 'As Esmaksan, we will showcase our state-of-the-art products and extensive spare parts range at Komatek 2026, one of the largest exhibition meeting points for the construction and heavy machinery industry.',
    fairText2: 'You can closely examine our high-precision manufactured transmission, differential, and engine spare parts for Caterpillar, Komatsu, Volvo, Hitachi, Sumitomo, and other global brands at our booth. We look forward to meeting our global business partners and forging new collaborations.',
    fairText3: 'We cordially invite all industry professionals, distributors, and valued partners to visit our booth.',
    posterToggleTr: 'Turkish Flyer',
    posterToggleEn: 'English Flyer',
    getInvitation: 'ONLINE REGISTRATION & INVITATION',
    viewZoom: 'CLICK TO ZOOM IN',
    closeLabel: 'Close',
    newsLabel: 'OUR ANNOUNCEMENTS',
  },
  ru: {
    tag: 'НОВОСТИ И ОБЪЯВЛЕНИЯ',
    title: 'ПОСЛЕДНИЕ',
    highlight: 'НОВОСТИ',
    statValue: 'ВЫСТАВКА',
    fairBadge: 'ОБЪЯВЛЕНИЕ О ВЫСТАВКЕ',
    fairTitle: 'МЫ НА ВЫСТАВКЕ KOMATEK 2026!',
    fairDate: '3 - 6 ИЮНЯ 2026 Г.',
    fairLocation: 'СТАМБУЛЬСКИЙ ВЫСТАВОЧНЫЙ ЦЕНТР, СТАМБУЛ',
    fairStand: 'ЗАЛ: 3 | СТЕНД: 3-901/C',
    fairText1: 'Компания Esmaksan примет участие в крупнейшей выставке строительной техники Komatek 2026, где представит свою высокотехнологичную продукцию и широкий ассортимент запасных частей.',
    fairText2: 'На нашем стенде вы сможете детально ознакомиться с нашими высокоточными деталями трансмиссии, дифференциалов и двигателей для Caterpillar, Komatsu, Volvo, Hitachi, Sumitomo и других мировых брендов. Мы с нетерпением ждем встреч с глобальными партнерами и заключения новых соглашений.',
    fairText3: 'Приглашаем всех представителей отрасли, дистрибьюторов и деловых партнеров посетить наш стенд.',
    posterToggleTr: 'Турецкая Афиша',
    posterToggleEn: 'Английская Афиша',
    getInvitation: 'ОНЛАЙН РЕГИСТРАЦИЯ И БИЛЕТЫ',
    viewZoom: 'НАЖМИТЕ ДЛЯ УВЕЛИЧЕНИЯ',
    closeLabel: 'Закрыть',
    newsLabel: 'НАШИ ОБЪЯВЛЕНИЯ',
  },
  ar: {
    tag: 'الأخبار والإعلانات',
    title: 'آخر',
    highlight: 'الأخبار',
    statValue: 'معرض',
    fairBadge: 'إعلان المعرض',
    fairTitle: 'نحن في معرض كوميتيك 2026!',
    fairDate: '3 - 6 يونيو 2026',
    fairLocation: 'مركز إسطنبول للمعارض، إسطنبول',
    fairStand: 'القاعة: 3 | الجناح: 3-901/C',
    fairText1: 'بصفتنا إيسماكسان، سنشارك في معرض كوميتيك 2026، أحد أكبر نقاط الالتقاء لمعارض الآلات الثقيلة ومعدات البناء، حيث سنعرض منتجاتنا الأكثر تطوراً ومجموعتنا الواسعة من قطع الغيار.',
    fairText2: 'يمكنكم فحص قطع غيار ناقل الحركة، التروس التفاضلية وأجزاء المحركات التي ننتجها بدقة عالية لـ Caterpillar و Komatsu و Volvo و Hitachi و Sumitomo والعلامات التجارية العالمية الأخرى عن قرب في جناحنا. نتطلع بشوق للقاء شركائنا العالميين وبدء تعاونات جديدة.',
    fairText3: 'ندعو جميع ممثلي القطاع والموزعين وشركاء العمل الأعزاء لزيارة جناحنا.',
    posterToggleTr: 'ملصق تركي',
    posterToggleEn: 'ملصق إنجليزي',
    getInvitation: 'التسجيل الإلكتروني والدعوة',
    viewZoom: 'انقر للتكبير',
    closeLabel: 'إغلاق',
    newsLabel: 'إعلاناتنا',
  },
};

const News: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const P = pageLocal[language] || pageLocal.tr;
  
  const [activeFlyer, setActiveFlyer] = useState<'tr' | 'en'>(language === 'tr' ? 'tr' : 'en');
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setActiveFlyer(language === 'tr' ? 'tr' : 'en');
  }, [language]);

  const flyerImage = activeFlyer === 'tr' ? '/FuarAfisTr.jpg' : '/FuarAfisEn.jpg';

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden flex flex-col">
      {/* Compact Typography Header */}
      <div className="pt-28 md:pt-36 px-6 md:px-8 max-w-[1600px] mx-auto w-full mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-1.5 bg-brand rounded-sm" />
          <span className="text-[10px] md:text-xs uppercase font-black text-white/50 tracking-widest font-mono">{P.tag}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
          {P.title} <span className="text-brand">{P.highlight}</span>
        </h1>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />

      <section className="flex-grow px-6 md:px-8 max-w-[1600px] mx-auto mb-20 mt-0 w-full">
        {/* Section title header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-1.5 h-6 bg-brand rounded-full" />
          <h2 className="text-sm font-black text-white uppercase tracking-[0.2em]">{P.newsLabel}</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-between">
          {/* Left Column: Interactive Flyer Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[480px] shrink-0 flex flex-col"
          >
            {/* Flyer Language Tabs */}
            <div className="flex gap-2 mb-4 bg-white/[0.02] border border-white/5 p-1 rounded-xl w-fit self-center lg:self-start">
              <button
                onClick={() => setActiveFlyer('tr')}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  activeFlyer === 'tr'
                    ? 'bg-brand text-black shadow-lg shadow-brand/20'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {P.posterToggleTr}
              </button>
              <button
                onClick={() => setActiveFlyer('en')}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  activeFlyer === 'en'
                    ? 'bg-brand text-black shadow-lg shadow-brand/20'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {P.posterToggleEn}
              </button>
            </div>

            {/* Flyer Graphic Container */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative group flex-grow flex flex-col justify-center items-center">
              <div 
                onClick={() => setIsZoomed(true)}
                className="aspect-[1/1.414] w-full relative cursor-zoom-in overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeFlyer}
                    src={flyerImage}
                    alt="Esmaksan Komatek Flyer"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </AnimatePresence>

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-brand text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500 ease-out">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-black tracking-widest uppercase">{P.viewZoom}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Textual Fair Announcement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex-grow flex flex-col justify-between ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <div className="bg-white/[0.01] backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl flex-grow flex flex-col justify-between relative overflow-hidden group">
              {/* Top gradient glow overlay */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-8 relative z-10">
                {/* Badge and date row */}
                <div className="flex flex-wrap items-center gap-4 justify-between">
                  <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-[10px] font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block animate-pulse" />
                    {P.fairBadge}
                  </div>
                  <div className="text-white/40 text-xs font-black uppercase tracking-wider">
                    {P.fairDate}
                  </div>
                </div>

                {/* News Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                  {P.fairTitle}
                </h3>

                {/* Divider Line */}
                <div className="h-px bg-white/10" />

                {/* Meta details panel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-black block mb-1">DATE / TARİH</span>
                    <span className="text-white text-sm font-extrabold uppercase">{P.fairDate}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-black block mb-1">LOCATION / LOKASYON</span>
                    <span className="text-white text-sm font-extrabold uppercase">{P.fairLocation}</span>
                  </div>
                  <div className="md:col-span-2 border-t border-white/5 pt-4">
                    <span className="text-[10px] text-[#FACC15] uppercase tracking-widest font-black block mb-1">BOOTH / STAND</span>
                    <span className="text-[#FACC15] text-lg font-black">{P.fairStand}</span>
                  </div>
                </div>

                {/* Description details */}
                <div className="space-y-4 text-white/70 text-base leading-relaxed font-medium">
                  <p>{P.fairText1}</p>
                  <p>{P.fairText2}</p>
                  <p className="text-white font-extrabold">{P.fairText3}</p>
                </div>
              </div>

              {/* Action Button Row */}
              <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-end items-stretch sm:items-center">
                {/* Ostim Logo Badge */}
                <div className="flex items-center justify-center gap-3 bg-white/[0.02] border border-white/5 px-4 py-3 rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-black">
                    ESMAKSAN GLOBAL EXPORTS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox / Fullscreen Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md cursor-zoom-out"
          >
            {/* Close Button top-right */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-brand hover:text-black text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Flyer Zoom Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="max-w-4xl max-h-[85vh] aspect-[1/1.414] overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(250,204,21,0.15)] relative border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking the flyer itself
            >
              <img
                src={flyerImage}
                alt="Esmaksan Komatek Flyer Zoomed"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Flyer Caption/Footer */}
            <div className="mt-6 flex flex-col items-center text-center">
              <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">{P.closeLabel}</span>
              <span className="text-white/80 text-sm font-extrabold uppercase mt-1 tracking-wider">{P.fairStand}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default News;

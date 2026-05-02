
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import PageHero from '../components/PageHero';

const inventoryList = [
  { name: "Spinner U1520 5 Eksen Dik İşleme Merkezi", count: 2 },
  { name: "Youji YV-600 ATC+C Dik Torna", count: 1 },
  { name: "Victor Vturn-36 Yatay Torna", count: 1 },
  { name: "Doosan Puma 240 2 Eksen Torna", count: 1 },
  { name: "Hwacheon Hİ-TECH 300 3 Eksen Torna", count: 1 },
  { name: "Spinner TC600 3 Eksen Torna", count: 1 },
  { name: "Mazak Quick Turn 25 2 Eksen", count: 1 },
  { name: "Mazak Quick Turn 28 2 Eksen", count: 1 },
  { name: "Mazak Quick Turn 350 M 3 Eksen", count: 1 },
  { name: "Makino A77E 4 Eksen Yatay İşleme Merkezi", count: 1 },
  { name: "Hardinge VMC 1000 3+1 Dik İşleme Merkezi", count: 1 },
  { name: "Doosan Puma DNT 2600LM 3 Eksen Yatay Torna", count: 2 },
  { name: "Junker BUAJ32 CNC Delik Silindirik Taşlama", count: 1 },
  { name: "Junker EJ29 CNC Delik Silindirik Taşlama", count: 1 },
  { name: "HUSTEIVAR BSB32 Çapraz Taşlama", count: 1 },
  { name: "UWU Silindir Taşlama", count: 1 },
  { name: "VOUMARD Delik Taşlama", count: 1 },
  { name: "REINERKER Delik Taşlama", count: 1 },
  { name: "ABWWOOD RG1 Satır Taşlama", count: 1 },
  { name: "FORTUNA Silindir Taşlama", count: 1 },
  { name: "ABERLİNK HALO L2000 CMM Cihazı", count: 1 },
  { name: "MATSUURA MAM 72-63V 5 Eksen Dik İşleme Merkezi", count: 1 },
  { name: "PAMA Fellow", count: 1 },
  { name: "LORENZ Fellow", count: 1 },
  { name: "UWHC Fellow", count: 1 },
  { name: "ÇWC3 Fellow", count: 1 },
  { name: "MWM Fellow", count: 1 },
  { name: "MAKS RÖDER Fellow", count: 1 },
  { name: "RUS Fellow", count: 1 },
  { name: "PFAUTER Azdırma", count: 1 },
  { name: "CHURCHİLL Azdırma", count: 1 },
  { name: "MÜLLER Azdırma", count: 1 },
  { name: "UMO Azdırma", count: 1 },
  { name: "STANCOCK Raspa", count: 1 },
  { name: "CHURCHİLL Raspa", count: 1 },
  { name: "NİLES Profil Taşlama", count: 1 },
  { name: "AKDERE Maça Makinesi", count: 2 },
  { name: "HMS Kum Karıştırma Makinası", count: 2 },
  { name: "ENDÜMAK Kumlama Makinası", count: 1 },
  { name: "Şerit Kesme Makinası", count: 1 },
  { name: "ECOTERM Doğal Gaz Ocağı", count: 1 },
  { name: "PUSLU Patus Makinası", count: 1 },
  { name: "Kokil Hidrolik Makinası", count: 1 },
  { name: "Sıcak Maça Fırını", count: 1 },
  { name: "Çapa Makinası", count: 1 },
  { name: "Max Röber Dik Planya", count: 1 },
  { name: "Hans Lenze Çapak Alma Makinası", count: 1 },
  { name: "STANKOİMPORT Freze Makinası", count: 1 },
  { name: "TEZSAN Matkap", count: 3 },
  { name: "MBS Balans Makinası", count: 1 }
];

const inventoryLocales = {
  tr: {
    title: 'ESMAKSAN MAKİNE SANAYİ MAKİNE PARKURU',
    machines: 'MAKİNALAR',
    qty: 'Adet'
  },
  en: {
    title: 'ESMAKSAN MACHINERY PARK INVENTORY',
    machines: 'MACHINES',
    qty: 'QTY'
  },
  ru: {
    title: 'ПАРК ОБОРУДОВАНИЯ ESMAKSAN',
    machines: 'ОБОРУДОВАНИЕ',
    qty: 'Кол-во'
  },
  ar: {
    title: 'حديقة آلات ESMAKSAN',
    machines: 'الآلات',
    qty: 'الكمية'
  },
  ctaLocales: {
    tr: {
      title: 'Sektörün En Güçlü <span className="text-brand">Makine Parkuru</span> ile Hizmetinizdeyiz',
      desc: 'Yüksek hassasiyetli üretim ve teknolojik güç ile projelerinizde çözüm ortağınız olmaya hazırız.',
      button: 'Teknik Katalogu İndir'
    },
    en: {
      title: 'At Your Service with the Industry\'s Strongest <span className="text-brand">Machinery Park</span>',
      desc: 'We are ready to be your solution partner in your projects with high-precision production and technological power.',
      button: 'Download Technical Catalog'
    },
    ru: {
      title: 'К вашим услугам с самым мощным <span className="text-brand">машинным парком</span> в отрасли',
      desc: 'Мы готовы стать вашим партнером по решениям в ваших проектах благодаря высокоточному производству и технологической мощи.',
      button: 'Скачать технический каталог'
    },
    ar: {
      title: 'في خدمتكم مع أقوى <span className="text-brand">حديقة آلات</span> في الصناعة',
      desc: 'نحن مستعدون لنكون شريك الحل في مشاريعك بإنتاج عالي الدقة وقوة تكنولوجية.',
      button: 'تحميل الكتالوج الفني'
    }
  }
};

const Machinery: React.FC<{ initialMachine?: string | null }> = ({ initialMachine = null }) => {
  const { t, isRTL, language } = useLanguage();
  const loc = inventoryLocales[language] || inventoryLocales.tr;
  const ctaLoc = inventoryLocales.ctaLocales[language] || inventoryLocales.ctaLocales.tr;
  const [selectedDetailItem, setSelectedDetailItem] = React.useState<typeof t.machinery.items[0] | null>(null);

  React.useEffect(() => {
    if (initialMachine) {
      const element = document.getElementById(initialMachine.replace(/\s+/g, '-').toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [initialMachine]);

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDetailItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      
      <PageHero 
        tag={t.machinery.hero.tag}
        title={t.machinery.hero.title}
        highlight={t.machinery.hero.highlight}
        statValue={t.nav.production}
        statIcon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

      {/* Subtle background ambient glow */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />
</svg>
        }
      />

      {/* Description Section */}
      <div className="pt-4 md:pt-8 px-6 md:px-8 max-w-[1600px] mx-auto mb-16">
        <div className="max-w-4xl">
          <p className={`text-xl md:text-2xl text-white/60 font-medium leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
            {t.machinery.hero.desc}
          </p>
        </div>
      </div>

      {/* Machinery Grid */}
      <section className="py-20 md:py-32 industrial-grid">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {t.machinery.items.map((item, idx) => (
              <motion.div
                key={idx}
                id={item.title.replace(/\s+/g, '-').toLowerCase()}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-white/[0.02] backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group flex flex-col h-full ${
                  initialMachine === item.title ? 'border-brand ring-2 ring-brand/20' : 'border-white/5'
                }`}
              >
                {/* Image Section */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800&sig=${idx}`;
                    }}
                  />
                  <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'} z-20`}>
                    <div className="bg-brand text-white font-black text-[10px] py-1.5 px-3 uppercase tracking-widest shadow-lg">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-8 md:p-10 flex flex-col flex-grow bg-white relative z-20 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-[#FACC15] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <div className={`h-px bg-white/5 w-full mb-6 group-hover:bg-brand/20 transition-colors duration-500 ${isRTL ? 'mr-auto' : 'ml-auto'}`} />
                  <p className="text-white/60 text-sm leading-relaxed font-medium mb-8 flex-grow">
                    {item.desc}
                  </p>
                  
                  <div className={`flex items-center justify-between mt-auto ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Specs Chips */}
                    <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse justify-end' : 'flex-row justify-start'}`}>
                      {item.specs.slice(0, 2).map((spec, sidx) => (
                        <span 
                          key={sidx} 
                          className="text-[9px] font-bold uppercase tracking-widest bg-white/5 text-white/70 px-2.5 py-1 rounded-full border border-transparent group-hover:border-brand/30 group-hover:bg-brand/5 group-hover:text-white transition-all duration-500"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {item.details && (
                      <button
                        onClick={() => setSelectedDetailItem(item)}
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-brand hover:text-white transition-colors px-4 py-2 border border-brand/20 rounded-full hover:bg-brand"
                      >
                        {t.machinery.ui.viewDetails}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Complete Machinery Inventory Table - Fills Empty Grid Space */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:col-span-2 md:col-span-1 bg-white/[0.02] backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group flex flex-col min-h-[500px]"
            >
              <div className={`bg-brand p-6 md:p-8 flex items-center justify-between shrink-0 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
                  {loc.title}
                </h3>
              </div>
              <div className="flex-grow p-0 overflow-y-auto custom-scrollbar bg-[#050505] relative overflow-hidden/50 max-h-[800px]">
                <table className={`w-full border-collapse ${isRTL ? 'text-right' : 'text-left'}`}>
                  <thead className="bg-white sticky top-0 z-10 before:absolute before:inset-0 before:bg-white/5 before:-z-10 shadow-sm border-b border-white/10">
                    <tr className={isRTL ? 'flex-row-reverse' : 'flex-row'}>
                      <th className={`py-4 px-6 md:px-8 text-xs font-black text-white/50 uppercase tracking-widest ${isRTL ? 'text-right' : 'text-left'}`}>{loc.machines}</th>
                      <th className="py-4 px-6 md:px-8 text-xs font-black text-white/50 uppercase tracking-widest w-24 text-center">{loc.qty}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryList.map((inv, idx) => (
                      <tr key={idx} className={`border-b border-white/5 hover:bg-white transition-colors group ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                        <td className="py-4 px-6 md:px-8 text-sm font-bold text-white/80 group-hover:text-[#FACC15] transition-colors">{inv.name}</td>
                        <td className="py-4 px-6 md:px-8 text-sm font-black text-white/60 group-hover:text-[#FACC15] text-center transition-colors">{inv.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedDetailItem && (
          <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 ${isRTL ? 'rtl' : 'ltr'}`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDetailItem(null)}
              className="absolute inset-0 bg-white/[0.02] backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative w-full max-w-6xl bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] ${isRTL ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedDetailItem(null)}
                className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white md:text-white transition-all border border-white/20 md:border-white/10`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                <img 
                  src={selectedDetailItem.image} 
                  alt={selectedDetailItem.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-6 left-6 md:hidden">
                  <h2 className={`text-3xl font-black text-white uppercase tracking-tighter ${isRTL ? 'text-right pr-6' : ''}`}>{selectedDetailItem.title}</h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className={`w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="hidden md:block mb-10">
                  <div className="text-brand font-black text-[10px] uppercase tracking-[0.3em] mb-4">{t.machinery.ui.techSpecs}</div>
                  <h2 className="text-5xl font-black text-white uppercase tracking-tighter">{selectedDetailItem.title}</h2>
                  <div className={`h-px bg-brand/30 w-16 mt-6 ${isRTL ? 'mr-auto' : 'ml-auto'}`} />
                </div>

                <p className="text-white/60 font-medium leading-relaxed mb-12 md:text-lg">
                  {selectedDetailItem.desc}
                </p>

                <div className="space-y-12">
                  {selectedDetailItem.details?.map((group, gidx) => (
                    <div key={gidx}>
                      <h4 className={`text-[11px] font-black text-white/40 uppercase tracking-[0.3em] mb-6 flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                        <span className={`w-8 h-px bg-brand/40 ${isRTL ? 'ml-4' : 'mr-4'}`} />
                        {group.group}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {group.items.map((spec, sidx) => (
                          <div key={sidx} className={`flex justify-between items-center py-3 border-b border-white/5 group/row ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                            <span className="text-[12px] font-bold text-white/50 uppercase tracking-wider">{spec.label}</span>
                            <span className="text-[13px] font-black text-white uppercase group-hover/row:text-brand transition-colors">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Technical Support Banner */}
      <section className="py-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-10" />
        <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-12 md:p-20 border border-white/10 bg-white/5 backdrop-blur-3xl rounded-[3rem]"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 max-w-2xl mx-auto leading-[1.1]" dangerouslySetInnerHTML={{ __html: ctaLoc.title }}></h2>
            <div className="h-px bg-brand/30 w-24 mx-auto mb-10" />
            <p className="text-white/50 text-base md:text-lg font-medium max-w-xl mx-auto mb-12 uppercase tracking-widest leading-loose">
              {ctaLoc.desc}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand text-white font-black uppercase tracking-[0.2em] text-xs py-5 px-10 rounded-full shadow-[0_20px_40px_-5px_rgba(253,187,17,0.3)] hover:shadow-[0_25px_50px_-5px_rgba(253,187,17,0.4)] transition-all"
            >
              {ctaLoc.button}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Machinery;

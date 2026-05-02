
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import PageHero from '../components/PageHero';

const Production: React.FC = () => {
  const { t, isRTL, language } = useLanguage();

  const local = {
    tr: {
      manufacturing: 'İmalat', manufacturingDesc: 'Kesintisiz ve kaliteli teknik döküm.',
      design: 'Tasarım', designDesc: 'Güçlü mühendislik temelleri.',
      assembly: 'Montaj', assemblyDesc: 'Zamanında ve kusursuz kurulum.',
      workArea: 'Çalışma Alanı', workAreaDesc: 'Toplam üretim ve işleme sahası.',
      storageArea: 'Depolama Alanı', storageAreaDesc: 'Stok ve lojistik depo kapasitesi.',
      facilityCapacity: 'Tesis Kapasitesi',
    },
    en: {
      manufacturing: 'Manufacturing', manufacturingDesc: 'Continuous and quality technical production.',
      design: 'Design', designDesc: 'Strong engineering foundations.',
      assembly: 'Assembly', assemblyDesc: 'On-time and flawless installation.',
      workArea: 'Work Area', workAreaDesc: 'Total production and processing area.',
      storageArea: 'Storage Area', storageAreaDesc: 'Stock and logistics warehouse capacity.',
      facilityCapacity: 'Facility Capacity',
    },
    ru: {
      manufacturing: 'Производство', manufacturingDesc: 'Непрерывное и качественное производство.',
      design: 'Проектирование', designDesc: 'Прочная инженерная база.',
      assembly: 'Монтаж', assemblyDesc: 'Своевременный и безупречный монтаж.',
      workArea: 'Рабочая площадь', workAreaDesc: 'Общая производственная площадь.',
      storageArea: 'Склад', storageAreaDesc: 'Складская и логистическая мощность.',
      facilityCapacity: 'Мощность объекта',
    },
    ar: {
      manufacturing: 'التصنيع', manufacturingDesc: 'إنتاج فني متواصل وعالي الجودة.',
      design: 'التصميم', designDesc: 'أسس هندسية متينة.',
      assembly: 'التجميع', assemblyDesc: 'تركيب في الوقت المحدد وبلا عيوب.',
      workArea: 'منطقة العمل', workAreaDesc: 'إجمالي مساحة الإنتاج والمعالجة.',
      storageArea: 'منطقة التخزين', storageAreaDesc: 'طاقة المستودع اللوجستي.',
      facilityCapacity: 'طاقة المنشأة',
    },
  };
  const L = local[language] || local.tr;

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      
      <PageHero 
        tag={t.production.hero.tag}
        title={t.production.hero.title}
        highlight={t.production.hero.highlight}
        statValue={L.manufacturing}
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
          {[
            { value: "01", label: L.manufacturing, desc: L.manufacturingDesc },
            { value: "02", label: L.design, desc: L.designDesc },
            { value: "03", label: L.assembly, desc: L.assemblyDesc },
            { value: "12K m²", label: L.workArea, desc: L.workAreaDesc },
            { value: "2K m²", label: L.storageArea, desc: L.storageAreaDesc },
          ].map((stat, idx) => (
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

      {/* Expertise Section */}
      <section className="py-32 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-5" />
        <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">
          <div className={`flex flex-col ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-24 items-center`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex-1 min-w-0"
            >
              <div className={`aspect-square bg-brand/10 overflow-hidden border-brand/20 border-2 shadow-2xl`}>
                <img 
                  src="/uretim2.jpg" 
                  alt="Expertise" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand/10 border border-brand/20 -z-10" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 min-w-0 space-y-8"
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
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className={`flex flex-col ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-24 items-center`}>
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 min-w-0 space-y-8"
            >
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                {t.production.capabilities.title}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                {t.production.capabilities.desc}
              </p>
              <div className="grid grid-cols-1 gap-6">
                {t.production.capabilities.items.map((item, idx) => (
                  <div key={idx} className={`flex items-start space-x-4 p-6 bg-white/[0.02] backdrop-blur-xl border border-white/5 shadow-sm hover:border-brand/30 transition-colors ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                    <div className="w-10 h-10 bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand font-black text-xs">0{idx + 1}</span>
                    </div>
                    <span className="text-white font-bold uppercase text-sm tracking-widest leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex-1 min-w-0"
            >
              <div className={`aspect-video bg-[#050505] overflow-hidden ${isRTL ? 'border-r-8' : 'border-l-8'} border-brand shadow-2xl`}>
                <img 
                  src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2070" 
                  alt="Advanced Technology" 
                  className="w-full h-full object-cover hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facility Area Banner */}
      <section className="py-20 bg-[#050505] relative overflow-hidden border-y border-white/8">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-ink rounded-2xl p-10 md:p-14 overflow-hidden flex flex-col justify-between min-h-[220px] hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-brand/8 blur-3xl" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-4">{L.facilityCapacity}</p>
              <div>
                <div className="flex items-end gap-3 mb-3">
                  <span className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">12.000</span>
                  <span className="text-3xl font-bold text-white/50 mb-2">m²</span>
                </div>
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-sm font-semibold text-white/50 uppercase tracking-widest">{L.workArea}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/8 rounded-2xl p-10 md:p-14 overflow-hidden flex flex-col justify-between min-h-[220px] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-brand/10 transition-all duration-700" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-4">{L.facilityCapacity}</p>
              <div>
                <div className="flex items-end gap-3 mb-3">
                  <span className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">2.000</span>
                  <span className="text-3xl font-bold text-white/30 mb-2">m²</span>
                </div>
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-sm font-semibold text-white/40 uppercase tracking-widest">{L.storageArea}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black text-white uppercase tracking-tighter"
            >
              {t.production.team.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg leading-relaxed font-medium"
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

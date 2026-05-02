
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import PageHero from '../components/PageHero';

const Contact: React.FC = () => {
  const { t, isRTL, language } = useLanguage();

  const local = {
    tr: {
      contact: 'İletişim', contactDesc: 'Hızlı destek hattı',
      location: 'Lokasyon', locationDesc: 'Ankara Ostim Merkez',
      satisfaction: 'Müşteri Memnuniyeti', satisfactionDesc: 'Sorunsuz ve güvenilir operasyonlar.',
      fax: 'Faks',
      globalNetwork: 'Küresel Ağımız',
      repsTitle: 'Bölgesel Satış', repsTitleSub: 'Temsilcilerimiz',
      regions: ['Avrupa · Amerika · Rusya · Orta Asya', 'Batı Asya / Orta Doğu', 'Türkiye / Genel'],
    },
    en: {
      contact: 'Contact', contactDesc: 'Fast support line',
      location: 'Location', locationDesc: 'Ankara Ostim HQ',
      satisfaction: 'Customer Satisfaction', satisfactionDesc: 'Seamless and reliable operations.',
      fax: 'Fax',
      globalNetwork: 'Our Global Network',
      repsTitle: 'Regional Sales', repsTitleSub: 'Representatives',
      regions: ['Europe · Americas · Russia · Central Asia', 'West Asia / Middle East', 'Turkey / General'],
    },
    ru: {
      contact: 'Контакт', contactDesc: 'Быстрая линия поддержки',
      location: 'Локация', locationDesc: 'Центр Анкара Ostim',
      satisfaction: 'Удовлетворённость', satisfactionDesc: 'Надёжные операции.',
      fax: 'Факс',
      globalNetwork: 'Наша глобальная сеть',
      repsTitle: 'Региональные', repsTitleSub: 'представители',
      regions: ['Европа · Америка · Россия · Центр. Азия', 'Зап. Азия / Ближний Восток', 'Турция / Общий'],
    },
    ar: {
      contact: 'اتصال', contactDesc: 'خط دعم سريع',
      location: 'الموقع', locationDesc: 'مركز أنقرة أوستيم',
      satisfaction: 'رضا العملاء', satisfactionDesc: 'عمليات سلسة وموثوقة.',
      fax: 'فاكس',
      globalNetwork: 'شبكتنا العالمية',
      repsTitle: 'ممثلونا', repsTitleSub: 'الإقليميون',
      regions: ['أوروبا · أمريكا · روسيا · آسيا الوسطى', 'غرب آسيا / الشرق الأوسط', 'تركيا / عام'],
    },
  };
  const L = local[language] || local.tr;

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      
      <PageHero 
        tag={t.contact.hero.tag}
        title={t.contact.hero.title}
        highlight={t.contact.hero.highlight}
        statValue={L.contact}
        statIcon={
          <svg className="w-4 h-4 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        }
      />

      {/* Subtle background ambient glow */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Design Header Section */}
      <div className="pt-4 md:pt-8 px-6 md:px-8 max-w-[1600px] mx-auto mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          {[
            { value: "7/24", label: L.contact, desc: L.contactDesc },
            { value: "TR", label: L.location, desc: L.locationDesc },
            { value: "%100", label: L.satisfaction, desc: L.satisfactionDesc }
          ].map((stat, idx) => (
            <div key={idx} className="flex-1">
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-2">
                {stat.value}
              </h2>
              <div className="h-px bg-white/10 mb-4 w-full" />
              <h3 className="font-bold text-sm text-white mb-2">{stat.label}</h3>
              <p className="text-xs text-white/50 font-medium">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
              <div className="space-y-8">
                {[
                  { label: t.contact.info.addressLabel, value: "1247 Sk. (Eski 44) No:10-12\n06370 Ostim-Ankara/Türkiye" },
                  { label: t.contact.info.phoneLabel, value: "+90 312 354 08 45\n+90 312 354 42 76" },
                  { label: L.fax, value: "+90 312 354 58 71" },
                  { label: t.contact.info.emailLabel, value: "esmaksan@esmaksan.com.tr" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`pb-8 border-b border-white/10 last:border-0 group ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <p className="text-[12px] font-medium tracking-widest text-white/50 uppercase mb-3 group-hover:text-[#FACC15] transition-colors">{item.label}</p>
                    <p className="text-xl sm:text-2xl font-medium text-white leading-relaxed whitespace-pre-line transition-transform duration-300">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Socials */}
              <div className={`pt-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="text-[12px] font-medium uppercase tracking-widest text-white/50 mb-6">{t.contact.info.socialLabel}</p>
                <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                  {[
                    { name: 'LinkedIn', url: '#' },
                    { name: 'Instagram', url: 'https://www.instagram.com/esmaksanspareparts/' },
                    { name: 'Facebook', url: 'https://www.facebook.com/esmaksan.machinery' },
                    { name: 'YouTube', url: '#' },
                  ].map(social => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-[#FACC15] hover:border-[#FACC15] hover:text-black transition-colors shadow-sm">{social.name}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/[0.02] backdrop-blur-xl rounded-[2rem] p-10 md:p-14 border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FACC15]/10 blur-[80px] rounded-full pointer-events-none" />
                
                <h2 className={`text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-10 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.contact.form.title.charAt(0) + t.contact.form.title.slice(1).toLowerCase()}
                </h2>
                
                <form className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className={`text-xs font-medium text-white/60 block ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t.contact.form.name.charAt(0) + t.contact.form.name.slice(1).toLowerCase()}
                      </label>
                      <input type="text" className={`w-full bg-white/5 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#FACC15]/50 border border-white/10 focus:border-[#FACC15] outline-none transition-all font-medium ${isRTL ? 'text-right' : 'text-left'}`} placeholder={t.contact.form.name} />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-xs font-medium text-white/60 block ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t.contact.form.email.charAt(0) + t.contact.form.email.slice(1).toLowerCase()}
                      </label>
                      <input type="email" className={`w-full bg-white/5 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#FACC15]/50 border border-white/10 focus:border-[#FACC15] outline-none transition-all font-medium ${isRTL ? 'text-right' : 'text-left'}`} placeholder={t.contact.form.email} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-xs font-medium text-white/60 block ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.contact.form.subject.charAt(0) + t.contact.form.subject.slice(1).toLowerCase()}
                    </label>
                    <select className={`w-full bg-white/5 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#FACC15]/50 border border-white/10 focus:border-[#FACC15] outline-none transition-all font-medium appearance-none ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.contact.form.subjects.map((subject: string) => (
                        <option key={subject} className="bg-[#050505] text-white">{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-xs font-medium text-white/60 block ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.contact.form.message.charAt(0) + t.contact.form.message.slice(1).toLowerCase()}
                    </label>
                    <textarea rows={5} className={`w-full bg-white/5 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#FACC15]/50 border border-white/10 focus:border-[#FACC15] outline-none transition-all font-medium resize-none ${isRTL ? 'text-right' : 'text-left'}`} placeholder={t.contact.form.message}></textarea>
                  </div>

                  <button className="w-full bg-[#FACC15] hover:scale-[1.02] active:scale-[0.98] text-black font-bold rounded-xl py-5 transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                    {t.contact.form.submit.charAt(0) + t.contact.form.submit.slice(1).toLowerCase()}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Representatives Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#FACC15] mb-3">{L.globalNetwork}</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              {L.repsTitle}<br />
              <span className="text-white/30">{L.repsTitleSub}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                region: L.regions[0],
                name: 'Gökçen Taşgın',
                email: 'gokcen@esmaksan.com.tr',
                phone: '+90 551 381 70 60',
                flag: '🌍',
                delay: 0,
              },
              {
                region: L.regions[1],
                name: 'Eyad Alhussain',
                email: 'eyad@esmaksan.com.tr',
                phone: '+90 506 474 14 45',
                flag: '🌏',
                delay: 0.1,
              },
              {
                region: L.regions[2],
                name: 'Fatmanur Boz',
                email: 'fatmanur@esmaksan.com.tr',
                phone: '+90 555 996 87 18',
                flag: '🇹🇷',
                delay: 0.2,
              },
            ].map((rep, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: rep.delay, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white/[0.02] backdrop-blur-xl rounded-[2rem] border border-white/5 p-8 md:p-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
              >
                {/* Accent glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FACC15]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#FACC15]/20 transition-all duration-700" />

                {/* Flag + Region */}
                <div className="flex items-start gap-3 mb-8">
                  <span className="text-3xl select-none">{rep.flag}</span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 leading-snug pt-1">
                    {rep.region}
                  </p>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-black text-white tracking-tight mb-8 group-hover:text-[#FACC15] transition-colors duration-300">
                  {rep.name}
                </h3>

                <div className="h-[2px] bg-white/10 mb-8 rounded-full" />

                {/* Contact Links */}
                <div className="space-y-4 relative z-10">
                  <a
                    href={`mailto:${rep.email}`}
                    className="flex items-center gap-3 group/link"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover/link:bg-[#FACC15] transition-colors duration-200">
                      <svg className="w-3.5 h-3.5 text-white/50 group-hover/link:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white/60 group-hover/link:text-white transition-colors duration-200 truncate">
                      {rep.email}
                    </span>
                  </a>

                  <a
                    href={`tel:${rep.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 group/link"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover/link:bg-[#FACC15] transition-colors duration-200">
                      <svg className="w-3.5 h-3.5 text-white/50 group-hover/link:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white/60 group-hover/link:text-white transition-colors duration-200">
                      {rep.phone}
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-[#050505] relative grayscale-[0.8] hover:grayscale-0 transition-all duration-1000 z-10">
        <iframe 
          src="https://maps.google.com/maps?q=1247.%20Sokak%20(Eski%2044)%20No:10-12%2006370%20Ostim%20Ankara%20Turkey&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;

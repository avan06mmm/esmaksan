
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import PageHero from '../components/PageHero';

const WEB3FORMS_KEY = '73bcd7a5-db48-4d55-b76c-994bba2b00af';

const Contact: React.FC = () => {
  const { t, isRTL, language } = useLanguage();

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Esmaksan Web Formu',
          message: formData.message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const local = {
    tr: {
      contact: 'İletişim', contactDesc: 'Hızlı destek hattı',
      location: 'Lokasyon', locationDesc: 'Kahramankazan / Ankara Merkez',
      satisfaction: 'Müşteri Memnuniyeti', satisfactionDesc: 'Sorunsuz ve güvenilir operasyonlar.',
      fax: 'Faks',
      globalNetwork: 'Küresel Ağımız',
      repsTitle: 'Bölgesel Satış', repsTitleSub: 'Temsilcilerimiz',
      regions: ['Avrupa · Amerika · Rusya · Orta Asya', 'Batı Asya / Orta Doğu / Afrika', 'Türkiye / Genel'],
    },
    en: {
      contact: 'Contact', contactDesc: 'Fast support line',
      location: 'Location', locationDesc: 'Kahramankazan / Ankara HQ',
      satisfaction: 'Customer Satisfaction', satisfactionDesc: 'Seamless and reliable operations.',
      fax: 'Fax',
      globalNetwork: 'Our Global Network',
      repsTitle: 'Regional Sales', repsTitleSub: 'Representatives',
      regions: ['Europe · Americas · Russia · Central Asia', 'West Asia / Middle East / Africa', 'Turkey / General'],
    },
    ru: {
      contact: 'Контакт', contactDesc: 'Быстрая линия поддержки',
      location: 'Локация', locationDesc: 'Кахраманказан / Анкара',
      satisfaction: 'Удовлетворённость', satisfactionDesc: 'Надёжные операции.',
      fax: 'Факс',
      globalNetwork: 'Наша глобальная сеть',
      repsTitle: 'Региональные', repsTitleSub: 'представители',
      regions: ['Европа · Америка · Россия · Центр. Азия', 'Зап. Азия / Ближний Восток / Африка', 'Турция / Общий'],
    },
    ar: {
      contact: 'اتصال', contactDesc: 'خط دعم سريع',
      location: 'الموقع', locationDesc: 'كهرمان قازان / أنقرة',
      satisfaction: 'رضا العملاء', satisfactionDesc: 'عمليات سلسة وموثوقة.',
      fax: 'فاكس',
      globalNetwork: 'شبكتنا العالمية',
      repsTitle: 'ممثلونا', repsTitleSub: 'الإقليميون',
      regions: ['أوروبا · أمريكا · روسيا · آسيا الوسطى', 'غرب آسيا / الشرق الأوسط / أفريقيا', 'تركيا / عام'],
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



      {/* Main Content */}
      <section className="py-24 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
              <div className="space-y-8">
                {[
                  { label: language === 'ar' ? 'المركز' : language === 'ru' ? 'ЦЕНТР' : language === 'en' ? 'HEAD OFFICE' : 'MERKEZ', value: "Saray Mahallesi, Adnan Menderes Bulvarı\nNo:64/1A, 06980 Kahramankazan/Ankara, Türkiye" },
                  { label: language === 'ar' ? 'المكتب' : language === 'ru' ? 'ОФИС' : language === 'en' ? 'OFFICE' : 'OFİS', value: "1247 Sk. (Eski 44) No:10-12\n06370 Ostim-Ankara/Türkiye" },
                  { label: t.contact.info.phoneLabel, value: "+90 312 354 08 45\n+90 312 354 42 76", ltr: true },
                  { label: t.contact.info.emailLabel, value: "esmaksan@esmaksan.com.tr", ltr: true },
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
                    <p
                      dir={(item as any).ltr ? 'ltr' : undefined}
                      className={`text-xl sm:text-2xl font-medium text-white leading-relaxed whitespace-pre-line transition-transform duration-300${(item as any).ltr && isRTL ? ' text-left' : ''}`}
                    >
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
                
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className={`text-xs font-medium text-white/60 block ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t.contact.form.name.charAt(0) + t.contact.form.name.slice(1).toLowerCase()}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-white/5 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#FACC15]/50 border border-white/10 focus:border-[#FACC15] outline-none transition-all font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                        placeholder={t.contact.form.name}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-xs font-medium text-white/60 block ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t.contact.form.email.charAt(0) + t.contact.form.email.slice(1).toLowerCase()}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-white/5 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#FACC15]/50 border border-white/10 focus:border-[#FACC15] outline-none transition-all font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                        placeholder={t.contact.form.email}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-xs font-medium text-white/60 block ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.contact.form.subject.charAt(0) + t.contact.form.subject.slice(1).toLowerCase()}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full bg-white/5 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#FACC15]/50 border border-white/10 focus:border-[#FACC15] outline-none transition-all font-medium appearance-none ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      <option value="" className="bg-[#050505] text-white">—</option>
                      {t.contact.form.subjects.map((subject: string) => (
                        <option key={subject} value={subject} className="bg-[#050505] text-white">{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-xs font-medium text-white/60 block ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.contact.form.message.charAt(0) + t.contact.form.message.slice(1).toLowerCase()}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-white/5 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#FACC15]/50 border border-white/10 focus:border-[#FACC15] outline-none transition-all font-medium resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                      placeholder={t.contact.form.message}
                    />
                  </div>

                  {/* Success / Error feedback */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-5 py-4 text-sm font-medium"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {language === 'tr' ? 'Mesajınız başarıyla gönderildi!' : language === 'ru' ? 'Сообщение отправлено!' : language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message was sent successfully!'}
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-5 py-4 text-sm font-medium"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      {language === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : language === 'ru' ? 'Произошла ошибка. Попробуйте снова.' : language === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.'}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#FACC15] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 text-black font-bold rounded-xl py-5 transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] flex items-center justify-center gap-3"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        {language === 'tr' ? 'Gönderiliyor...' : language === 'ru' ? 'Отправка...' : language === 'ar' ? 'جارٍ الإرسال...' : 'Sending...'}
                      </>
                    ) : (
                      t.contact.form.submit.charAt(0) + t.contact.form.submit.slice(1).toLowerCase()
                    )}
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
                flag: '🌍',
                delay: 0.1,
              },
              {
                region: L.regions[2],
                name: 'Fatmanur Boz',
                email: 'fatmanur@esmaksan.com.tr',
                phone: '+90 555 996 87 18',
                flag: '🌍',
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
                    <span dir="ltr" className="text-sm font-medium text-white/60 group-hover/link:text-white transition-colors duration-200 truncate">
                      {rep.email}
                    </span>
                  </a>

                  <a
                    href={`https://wa.me/${rep.phone.replace(/[\s+]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group/link"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover/link:bg-[#25D366] transition-colors duration-200">
                      <svg className="w-4 h-4 text-[#25D366] group-hover/link:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.853L.057 23.571a.75.75 0 00.92.921l5.803-1.488A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.73-.518-5.27-1.418l-.374-.222-3.878.995.983-3.793-.237-.389A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                    </div>
                    <span dir="ltr" className="text-sm font-medium text-white/60 group-hover/link:text-white transition-colors duration-200">
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
          src="https://maps.google.com/maps?q=Saray+Mahallesi+Adnan+Menderes+Bulvari+No:64+1A+06980+Kahramankazan+Ankara+Turkiye&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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

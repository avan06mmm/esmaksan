
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative pt-44 pb-24 bg-ink overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-10" />
        <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-1/3 h-full bg-brand/5 ${isRTL ? '-skew-x-12 -translate-x-1/4' : 'skew-x-12 translate-x-1/4'}`} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-3xl ${isRTL ? 'mr-auto text-right' : 'ml-0 text-left'}`}
          >
            <div className={`flex items-center space-x-4 mb-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
              <div className="h-px w-16 bg-brand" />
              <span className="text-brand font-black uppercase tracking-[0.5em] text-[10px]">{t.contact.hero.tag}</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
              {t.contact.hero.title} <br/> <span className="text-brand">{t.contact.hero.highlight}</span>
            </h1>
            <p className="text-white/50 font-medium text-xl leading-relaxed">
              {t.contact.hero.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 industrial-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
              {[
                { label: t.contact.info.addressLabel, value: t.contact.info.address, icon: '📍' },
                { label: t.contact.info.phoneLabel, value: '+90 (312) 354 00 00', icon: '📞' },
                { label: t.contact.info.emailLabel, value: 'info@esmaksan.com.tr', icon: '✉️' },
                { label: t.contact.info.hoursLabel, value: t.contact.info.hours, icon: '⏰' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-10 bg-paper border border-ink/5 hover:border-brand transition-all group ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <span className="text-2xl mb-4 block">{item.icon}</span>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/40 mb-2 group-hover:text-brand transition-colors">{item.label}</p>
                  <p className="text-xl font-black text-ink uppercase tracking-tight leading-tight">{item.value}</p>
                </motion.div>
              ))}
            </div>

              {/* Socials */}
              <div className={`p-10 bg-ink text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">{t.contact.info.socialLabel}</p>
                <div className={`flex space-x-6 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  {['LinkedIn', 'Instagram', 'Facebook', 'YouTube'].map(social => (
                    <a key={social} href="#" className="text-xs font-black uppercase tracking-widest hover:text-brand transition-colors">{social}</a>
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
                className="bg-paper p-12 md:p-16 border border-ink/5 shadow-2xl relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 industrial-grid opacity-5" />
                
                <h2 className={`text-4xl font-black text-ink uppercase tracking-tighter mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>{t.contact.form.title}</h2>
                
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className={`text-[10px] font-black uppercase tracking-widest text-ink/40 block ${isRTL ? 'text-right' : 'text-left'}`}>{t.contact.form.name}</label>
                      <input type="text" className={`w-full bg-paper-dark border-b-2 border-ink/10 p-4 focus:border-brand outline-none transition-all font-medium ${isRTL ? 'text-right' : 'text-left'}`} placeholder={t.contact.form.name} />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-[10px] font-black uppercase tracking-widest text-ink/40 block ${isRTL ? 'text-right' : 'text-left'}`}>{t.contact.form.email}</label>
                      <input type="email" className={`w-full bg-paper-dark border-b-2 border-ink/10 p-4 focus:border-brand outline-none transition-all font-medium ${isRTL ? 'text-right' : 'text-left'}`} placeholder={t.contact.form.email} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-[10px] font-black uppercase tracking-widest text-ink/40 block ${isRTL ? 'text-right' : 'text-left'}`}>{t.contact.form.subject}</label>
                    <select className={`w-full bg-paper-dark border-b-2 border-ink/10 p-4 focus:border-brand outline-none transition-all font-medium appearance-none ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.contact.form.subjects.map((subject: string) => (
                        <option key={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-[10px] font-black uppercase tracking-widest text-ink/40 block ${isRTL ? 'text-right' : 'text-left'}`}>{t.contact.form.message}</label>
                    <textarea rows={5} className={`w-full bg-paper-dark border-b-2 border-ink/10 p-4 focus:border-brand outline-none transition-all font-medium resize-none ${isRTL ? 'text-right' : 'text-left'}`} placeholder={t.contact.form.message}></textarea>
                  </div>

                  <button className="btn-primary w-full py-6">{t.contact.form.submit}</button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-ink-light relative grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.843640244747!2d32.7481!3d39.9676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU4JzAzLjQiTiAzMsKwNDQnNTMuMiJF!5e0!3m2!1str!2str!4v1625561234567!5m2!1str!2str" 
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


import React from 'react';
import { useLanguage } from '../LanguageContext';
import { View } from '../types';

const Footer: React.FC<{ onNavigate: (v: View) => void }> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();

  const corporateLinks = [
    { label: t.nav.about, value: 'about' as View },
    { label: t.nav.production, value: 'production' as View },
    { label: t.nav.machinery, value: 'machinery' as View },
    { label: t.nav.informationSecurity, value: 'informationSecurity' as View },
  ];

  const certificateLinks = [
    { label: t.nav.integratedPolicy, value: 'integratedPolicy' as View },
    { label: t.nav.qualityManagement, value: 'qualityManagement' as View },
    { label: t.nav.environmentalManagement, value: 'environmentalManagement' as View },
    { label: t.nav.ohsManagement, value: 'ohsManagement' as View },
  ];

  const quickLinks = [
    { label: t.nav.products, value: 'products' as View },
    { label: t.nav.services, value: 'services' as View },
    { label: t.nav.catalog, value: 'catalog' as View },
    { label: t.nav.contact, value: 'contact' as View },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 industrial-grid-dark opacity-10" />
      
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Brand Column */}
          <div className="space-y-10">
            <div className={`flex items-center cursor-pointer group ${isRTL ? 'flex-row-reverse' : 'flex-row'}`} onClick={() => onNavigate('home')}>
              <img src="/logo.png" alt="ESMAKSAN Logo" className="h-12 w-auto object-contain brightness-0 invert opacity-100 transition-transform duration-500 group-hover:scale-105" />
            </div>
            <p className="text-white/50 text-[14px] leading-relaxed font-medium max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              {['LN', 'IG', 'FB', 'YT'].map(s => (
                <a 
                  key={s} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[11px] font-black hover:bg-brand hover:text-ink hover:border-brand transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Corporate Links */}
          <div>
            <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-brand mb-10 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-brand/30" />
              {t.footer.corporateTitle}
            </h4>
            <ul className="space-y-4">
              {corporateLinks.map(link => (
                <li key={link.value}>
                  <button 
                    onClick={() => onNavigate(link.value)}
                    className="text-white/40 hover:text-white hover:translate-x-1 transition-all text-[13px] font-bold uppercase tracking-wider text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificates Links */}
          <div>
            <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-brand mb-10 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-brand/30" />
              {t.footer.certificatesTitle}
            </h4>
            <ul className="space-y-4">
              {certificateLinks.map(link => (
                <li key={link.value}>
                  <button 
                    onClick={() => onNavigate(link.value)}
                    className="text-white/40 hover:text-white hover:translate-x-1 transition-all text-[13px] font-bold uppercase tracking-wider text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Newsletter */}
          <div className="space-y-12">
            <div>
              <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-brand mb-10 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-brand/30" />
                {t.footer.navTitle}
              </h4>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                {quickLinks.map(link => (
                  <li key={link.value}>
                    <button 
                      onClick={() => onNavigate(link.value)}
                      className="text-white/40 hover:text-white hover:translate-x-1 transition-all text-[13px] font-bold uppercase tracking-wider text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-white/5">
               <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">{t.footer.newsletterTitle}</h4>
               <div className="relative group">
                 <input 
                   type="email" 
                   placeholder={t.footer.emailPlaceholder} 
                   className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-xs outline-none focus:border-brand/50 transition-all"
                 />
                 <button className="absolute right-2 top-2 bottom-2 bg-brand text-ink px-4 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
                   {t.footer.subscribeButton}
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className={`flex flex-wrap items-center gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/20 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <p>© 2026 {t.hero.brand} {t.footer.brandSuffix}</p>
            <a href="#" className="hover:text-brand transition-colors">{t.footer.privacyPolicy}</a>
            <a href="#" className="hover:text-brand transition-colors">{t.footer.kvkk}</a>
          </div>
          
          <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
             <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{t.footer.operationalLabel}</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

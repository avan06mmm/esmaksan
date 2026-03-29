
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { View } from '../types';

const Footer: React.FC<{ onNavigate: (v: View) => void }> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, value: 'home' as View },
    { label: t.nav.about, value: 'about' as View },
    { label: t.nav.production, value: 'production' as View },
    { label: t.nav.quality, value: 'quality' as View },
    { label: t.nav.products, value: 'products' as View },
    { label: t.nav.contact, value: 'contact' as View },
  ];

  return (
    <footer className="bg-ink text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid-dark opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Brand Column */}
          <div className="space-y-8">
            <div className={`flex items-center space-x-3 cursor-pointer group ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`} onClick={() => onNavigate('home')}>
              <img src="/logo.png" alt="ESMAKSAN Logo" className="h-14 md:h-16 w-auto object-contain brightness-0 invert opacity-90 transition-all duration-500 transform origin-center group-hover:opacity-100 group-hover:scale-125" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              {t.footer.brandDesc}
            </p>
            <div className={`flex space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
              {['LN', 'IG', 'FB', 'YT'].map(s => (
                <a key={s} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-[10px] font-black hover:bg-brand hover:text-ink transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-8">{t.footer.navTitle}</h4>
            <ul className="space-y-4">
              {quickLinks.map(link => (
                <li key={link.value}>
                  <button 
                    onClick={() => onNavigate(link.value)}
                    className="text-white/60 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-8">{t.footer.categoriesTitle}</h4>
            <ul className="space-y-4">
              {t.footer.categories.map(link => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-8">{t.footer.newsletterTitle}</h4>
            <p className="text-white/40 text-sm mb-6 font-medium">{t.footer.newsletterDesc}</p>
            <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <input 
                type="email" 
                placeholder={t.footer.emailPlaceholder} 
                className={`bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-brand transition-all flex-1 ${isRTL ? 'text-right' : 'text-left'}`}
              />
              <button className="bg-brand text-ink px-6 font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
                {t.footer.subscribeButton}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className={`flex items-center space-x-8 text-[10px] font-black uppercase tracking-widest text-white/20 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
            <p>© 2026 {t.hero.brand} {t.footer.brandSuffix}</p>
            <a href="#" className="hover:text-brand transition-colors">{t.footer.privacyPolicy}</a>
            <a href="#" className="hover:text-brand transition-colors">{t.footer.kvkk}</a>
          </div>
          
          <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">{t.footer.systemStatusLabel}</span>
             <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{t.footer.operationalLabel}</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

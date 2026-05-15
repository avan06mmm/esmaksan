
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
              <div className="bg-gradient-to-r from-brand to-black rounded-lg p-2 md:p-3 inline-flex items-center justify-center transition-transform duration-500 group-hover:scale-105 border border-white/10">
                <img src="/logo.png" alt="ESMAKSAN Logo" className="w-[140px] md:w-[180px] h-[40px] md:h-[50px] object-contain object-center opacity-100" />
              </div>
            </div>
            <p className="text-white/50 text-[14px] leading-relaxed font-medium max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              {[
                { 
                  id: 'linkedin', 
                  href: '#', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#0A66C2" d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          <path fill="#FFF" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                        </svg> 
                },
                { 
                  id: 'instagram', 
                  href: '#', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <defs>
                            <linearGradient id="ig-grad-new" x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#f09433"/><stop offset="25%" stopColor="#e6683c"/><stop offset="50%" stopColor="#dc2743"/><stop offset="75%" stopColor="#cc2366"/><stop offset="100%" stopColor="#bc1888"/>
                            </linearGradient>
                          </defs>
                          <rect width="24" height="24" rx="6" ry="6" fill="url(#ig-grad-new)"/>
                          <path fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                          <rect width="16" height="16" x="4" y="4" rx="4" ry="4" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg> 
                },
                { 
                  id: 'facebook', 
                  href: '#', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          <path fill="#FFF" d="M16.671 15.542l.532-3.469h-3.328V9.823c0-.949.465-1.874 1.956-1.874h1.514V5.011s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.628H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796z"/>
                        </svg> 
                },
                { 
                  id: 'youtube', 
                  href: '#', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                          <path fill="#FFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg> 
                }
              ].map(s => (
                <a 
                  key={s.id} 
                  href={s.href} 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:scale-110 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                >
                  {s.icon}
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

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className={`flex flex-wrap items-center gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/20 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <p>© 2026 {t.hero.brand} {t.footer.brandSuffix}</p>
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

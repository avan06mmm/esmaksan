
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

// Brand SVG path data for marquee (inline, no external dependencies)
const BRAND_LOGOS = [
  {
    name: 'Caterpillar',
    viewBox: '0 0 300 80',
    path: 'M12 16h12v48H12zM30 16h44c10 0 16 6 16 16s-6 16-16 16H42v16H30V16zm12 22h20c4 0 6-2 6-6s-2-6-6-6H42v12zM100 16h12v38h32v10h-44zM150 16h12v48h-12zM170 16h44c10 0 16 6 16 16s-6 16-16 16h-32v16h-12V16zm12 22h20c4 0 6-2 6-6s-2-6-6-6h-20v12z',
  },
  {
    name: 'Komatsu',
    viewBox: '0 0 300 80',
    path: 'M10 16h12v20l20-20h16L34 42l26 22H44L22 44v20H10zM66 40c0-14 10-24 26-24s26 10 26 24-10 24-26 24-26-10-26-24zm12 0c0 8 6 14 14 14s14-6 14-14-6-14-14-14-14 6-14 14zM126 16h14l14 32 14-32h14v48h-12V36l-12 28h-8l-12-28v28h-12zM198 16h12v28c0 8 4 12 10 12s10-4 10-12V16h12v28c0 14-8 22-22 22s-22-8-22-22zM250 16h40v10h-14v38h-12V26h-14z',
  },
  {
    name: 'Volvo',
    viewBox: '0 0 260 80',
    path: 'M10 16h12l18 34 18-34h12L44 64H32zM76 40c0-14 10-24 26-24s26 10 26 24-10 24-26 24-26-10-26-24zm12 0c0 8 6 14 14 14s14-6 14-14-6-14-14-14-14 6-14 14zM136 16h12v38h32v10h-44zM184 16h12l18 34 18-34h12L208 64h-8z',
  },
  {
    name: 'Kawasaki',
    viewBox: '0 0 300 80',
    path: 'M10 16h12v20l20-20h16L34 42l26 22H44L22 44v20H10zM66 16h14l10 14 10-14h14L100 40l18 24h-14l-12-18-12 18H66L84 40zM130 16h12l8 48h-12l-2-12H118l-2 12h-12zm4 26l-6-18-6 18h12zM152 16h12v38h32v10h-44zM196 16h12l18 34 18-34h12L220 64h-8zM244 42c0-10 8-16 18-16h24v10h-22c-4 0-6 2-6 6s2 6 6 6h14c8 0 16 4 16 14s-8 14-18 14h-26V66h24c4 0 8-2 8-4s-4-4-8-4h-14c-10 0-16-6-16-16z',
  },
  {
    name: 'ZF',
    viewBox: '0 0 120 80',
    path: 'M10 16h48v10L22 54h36v10H10V54l36-28H10zM66 16h40v10H78v10h24v10H78v18H66z',
  },
  {
    name: 'Allison',
    viewBox: '0 0 260 80',
    path: 'M10 16h12l8 48H18l-2-12H6L4 64H-8zm4 26l-6-18-6 18h12zM30 16h12v38h28v10H30zM74 16h12v38h28v10H74zM110 16h12v48h-12zM126 16h12v48h-12zM150 40c0-14 10-24 26-24s26 10 26 24-10 24-26 24-26-10-26-24zm12 0c0 8 6 14 14 14s14-6 14-14-6-14-14-14-14 6-14 14zM208 42c0-10 8-16 18-16h24v10h-22c-4 0-6 2-6 6s2 6 6 6h14c8 0 16 4 16 14s-8 14-18 14h-26V66h24c4 0 8-2 8-4s-4-4-8-4h-14c-10 0-16-6-16-16z',
  },
  {
    name: 'Clark',
    viewBox: '0 0 200 80',
    path: 'M44 18C28 18 16 30 16 40s12 22 28 22c10 0 18-4 24-10l-8-8c-4 4-10 6-16 6-8 0-16-6-16-10s8-10 16-10c6 0 12 2 16 6l8-8c-6-6-14-10-24-10zM76 16h12v48H76zM98 16h12v20l20-20h16L122 42l26 22h-16l-22-20v20H98zM154 16h12l8 48h-12l-2-12h-18l-2 12h-12zm4 26l-6-18-6 18h12z',
  },
  {
    name: 'Furukawa',
    viewBox: '0 0 310 80',
    path: 'M10 16h40v10H22v10h24v10H22v18H10zM56 16h12v28c0 8 4 12 10 12s10-4 10-12V16h12v28c0 14-8 22-22 22s-22-8-22-22zM110 16h26c10 0 18 6 18 16 0 8-4 12-10 14l12 18h-14l-10-16H122v16h-12zm12 10v14h12c4 0 8-2 8-6s-4-8-8-8h-12zM164 16h12l8 48h-12l-2-12h-18l-2 12h-12zm4 26l-6-18-6 18h12zM190 16h14l10 16 10-16h14l-16 24 18 24h-14l-12-18-12 18h-14l18-24zM246 16h12v38h32v10h-44zM286 16h12v28c0 8 4 12 10 12s10-4 10-12V16h12v28c0 14-8 22-22 22s-22-8-22-22z',
  },
];


const Home: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videos = ["/Esmaksan3d.mp4", "/EsmaksanVideo.mp4"];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);



  return (
    <div className="relative font-sans bg-[#f3f4f6]">
      {/* Hero Section — Video Background */}
      <section className="relative w-full flex items-center justify-center overflow-hidden h-[60dvh] md:h-[100dvh]">
        
        {/* Video Background */}
        <div className="absolute inset-0 bg-black">

          
          {/* Video element with modern crossfade */}
          <AnimatePresence initial={false}>
            <motion.video
              key={currentVideoIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              ref={(el) => {
                if (el) {
                  el.playbackRate = 0.5; // Slow cinematic playback
                  el.play().catch(e => console.error('Playback prevented', e));
                }
              }}
              muted
              playsInline
              onLoadedData={() => {
                setVideoLoaded(true);
                console.log('Video loaded successfully');
              }}
              onError={(e) => {
                setVideoError(true);
                console.error('Video loading error:', e);
              }}
              onEnded={() => {
                setCurrentVideoIndex(prev => (prev + 1) % videos.length);
              }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            >
              <source 
                src={videos[currentVideoIndex]} 
                type="video/mp4" 
              />
            </motion.video>
          </AnimatePresence>

          {/* Cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
          
          {/* Subtle animated grain texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Loading indicator — subtle pulse while video loads */}
        {!videoLoaded && !videoError && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white/70 text-[10px] font-medium tracking-widest uppercase">Loading</span>
            </div>
          </div>
        )}

        {/* Title + Subtitle — Bottom Left */}
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.5, duration: 1 }}
           className={`absolute top-[55%] left-6 md:left-12 z-10 ${isRTL ? 'text-right right-6 md:right-12 left-auto' : 'text-left'}`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none font-medium text-white mb-2" style={{ fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em' }}>
            esmaksan <span className="italic font-serif font-normal">{language === 'tr' ? 'makine' : language === 'en' ? 'machinery' : language === 'ru' ? 'машины' : 'آلات'}</span>
          </h1>
          <p className="text-sm md:text-base font-bold tracking-widest uppercase text-white/80 leading-relaxed max-w-[250px] md:max-w-md">
            {t.about.hero.highlight.split(':')[0] || 'A GATEWAY TO IMMERSIVE INDUSTRIAL EXPERIENCE'}
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-28 md:bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>


      </section>

      {/* Services / Who We Are Section */}
      <section className="py-24 w-full bg-[#050505] relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">
          {/* Header content of the section */}
          <div className={`flex flex-col gap-6 mb-16 ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
            {/* Modern Editorial Statement */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-8 h-[2px] bg-[#FACC15] ${isRTL ? 'order-last' : ''}`} />
                <span className="text-[11px] font-bold tracking-widest uppercase text-white/50 font-mono">Esmaksan</span>
              </div>
              <p className="text-[14px] md:text-[15px] font-medium tracking-wide leading-relaxed text-white/80">
                {t.about.vision.desc}
              </p>
            </motion.div>
          </div>

          {/* Feature Cards Grid - Modernized Dark Mode */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: '01', title: t.specs.items[0]?.title, desc: t.specs.items[0]?.desc, icon: 'abstract-1' },
              { id: '02', title: t.specs.items[1]?.title, desc: t.specs.items[1]?.desc, icon: 'abstract-2' },
              { id: '03', title: t.specs.items[2]?.title, desc: t.specs.items[2]?.desc, icon: 'abstract-3' },
              { id: '04', title: t.about.quality.ceCertified, desc: t.about.quality.europeanStandards, icon: 'abstract-4' }
            ].map((card, i) => (
              <motion.div 
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/[0.02] backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[260px] relative overflow-hidden group cursor-default"
              >
                {/* Ambient Glow on Hover */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[#FACC15]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none" />
                
                {/* Top Row: Number & Icon */}
                <div className={`hidden md:flex justify-between items-start relative z-10 ${isRTL ? 'flex-row-reverse' : 'flex-row'} mb-6`}>
                  <span className="text-[15px] font-bold text-white/30 font-mono tracking-widest group-hover:text-white/60 transition-colors duration-500">
                    /{card.id}
                  </span>
                  
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-[#FACC15] group-hover:text-black transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] group-hover:-rotate-6 group-hover:scale-110 border border-white/5 group-hover:border-transparent">
                    <div className="w-5 h-5">
                      {/* Topic-Related SVG Icons */}
                      {i === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>}
                      {i === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>}
                      {i === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="13" x="2" y="5" rx="2"/><path d="M18 13v-3l-3-3h-3"/><path d="M2 13h2"/><path d="M20 13h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>}
                      {i === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>}
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Title & Text */}
                <div className={`mt-auto relative z-10 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-[20px] font-bold tracking-tight mb-4 text-white group-hover:text-[#FACC15] transition-colors duration-300 leading-tight">
                    {card.title}
                  </h3>
                  
                  {/* Animated Expanding Line */}
                  <div className="relative h-[2px] w-full bg-white/10 mb-5 overflow-hidden rounded-full">
                    <div className={`absolute top-0 bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-12 bg-[#FACC15] rounded-full group-hover:w-full transition-all duration-700 ease-[0.22,1,0.36,1]`} />
                  </div>

                  <p className="text-[14px] text-white/50 font-medium leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Brands Marquee */}
          <div className="mt-20 mb-4 pt-16 border-t border-white/10 relative flex flex-col w-full">
            <h3 className="text-center text-xs md:text-[11px] font-black uppercase tracking-[0.3em] text-white/50 mb-12">
              {language === 'tr' ? 'Uyumlu Yedek Parça Markaları' : language === 'en' ? 'Compatible Spare Part Brands' : language === 'ru' ? 'Совместимые бренды запчастей' : 'العلامات التجارية لقطع الغيار المتوافقة'}
            </h3>
            
            <div 
              className="relative w-full overflow-hidden"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
              <motion.div 
                className="flex items-center gap-10 md:gap-20 w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ ease: "linear", duration: 35, repeat: Infinity }}
              >
                {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 flex-shrink-0 group cursor-default select-none px-6 py-4"
                  >
                    <div className="flex items-center justify-center h-8 text-white/40 group-hover:text-[#FACC15] transition-colors duration-300">
                      <svg viewBox={brand.viewBox} fill="currentColor" className="h-full w-auto max-w-[160px]">
                        <path d={brand.path} />
                      </svg>
                    </div>
                    <div className="w-px h-5 bg-white/10 ml-6" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          
        </div>
        {/* The requested thin yellow line at the bottom of the section */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FACC15]/20" />
      </section>



    </div>
  );
};

export default Home;

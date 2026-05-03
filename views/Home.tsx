
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

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
              className="relative w-full overflow-hidden h-24"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
              <motion.div 
                className="flex items-center gap-16 md:gap-32 w-max h-full"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              >
                {[
                  { name: "Caterpillar", domain: "caterpillar.com" },
                  { name: "Komatsu", domain: "komatsu.com" },
                  { name: "Volvo", domain: "volvo.com" },
                  { name: "Kawasaki", domain: "kawasaki.com" },
                  { name: "ZF", domain: "zf.com" },
                  { name: "Allison", domain: "allisontransmission.com" },
                  { name: "Clark", domain: "clarkmhc.com" },
                  { name: "Furukawa", domain: "furukawa.co.jp" },
                  { name: "Caterpillar", domain: "caterpillar.com" },
                  { name: "Komatsu", domain: "komatsu.com" },
                  { name: "Volvo", domain: "volvo.com" },
                  { name: "Kawasaki", domain: "kawasaki.com" },
                  { name: "ZF", domain: "zf.com" },
                  { name: "Allison", domain: "allisontransmission.com" },
                  { name: "Clark", domain: "clarkmhc.com" },
                  { name: "Furukawa", domain: "furukawa.co.jp" }
                ].map((brand, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 md:gap-6 flex-shrink-0 text-white/60 hover:text-[#FACC15] transition-all duration-300 font-black text-4xl md:text-6xl uppercase tracking-widest select-none cursor-default font-sans group"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-2 group-hover:scale-110 group-hover:bg-white group-hover:border-transparent transition-all duration-300">
                      <img 
                        src={`https://logo.clearbit.com/${brand.domain}`} 
                        alt={brand.name} 
                        className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        onError={(e) => {
                           e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    {brand.name}
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

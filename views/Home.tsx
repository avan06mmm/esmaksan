
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

    // Poster / fallback image
  const posterImage = "/uretim2.jpg";

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.5; // Slow cinematic playback
    }
  }, []);

  return (
    <div className="relative font-sans bg-[#f3f4f6]">
      {/* Hero Section — Video Background */}
      <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ height: '100dvh' }}>
        
        {/* Video Background */}
        <div className="absolute inset-0 bg-black">
          {/* Fallback poster image (shows while video loads or on error) */}
          <img 
            src={posterImage} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'}`} 
            alt="Industrial background" 
          />
          
          {/* Video element */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            poster={posterImage}
            onLoadedData={() => {
              setVideoLoaded(true);
              console.log('Video loaded successfully');
            }}
            onError={(e) => {
              setVideoError(true);
              console.error('Video loading error:', e);
            }}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'}`}
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
          >
            <source 
              src="/Esmaksan3d.mp4" 
              type="video/mp4" 
            />
            {/* Fallback content */}
            {videoError && (
              <img 
                src={posterImage} 
                className="absolute inset-0 w-full h-full object-cover"
                alt="Video fallback"
              />
            )}
          </video>

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
          <h1 className="text-[7vw] md:text-[5vw] tracking-tighter leading-none font-medium text-white mb-2" style={{ fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em' }}>
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

         {/* Book a Call CTA */}
         <motion.button 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1 }}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.97 }}
           className={`absolute bottom-8 right-8 ${isRTL ? 'left-8 right-auto' : 'right-8'} z-20 flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-shadow ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
         >
           <span className="text-[14px] font-bold h-full flex items-center">{t.nav.getQuote}</span>
           <div className={`w-8 h-8 rounded-full bg-[#0a64d9] flex items-center justify-center text-white ${isRTL ? 'rotate-180' : ''}`}>
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
               <path d="M5 12h14"></path>
               <path d="m12 5 7 7-7 7"></path>
             </svg>
           </div>
         </motion.button>
      </section>

      {/* Services / Who We Are Section */}
      <section className="py-24 px-6 md:px-8 max-w-[1600px] mx-auto bg-[#f3f4f6]">
        {/* Header content of the section */}
        <div className={`flex flex-col gap-10 mb-16 ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
          
          {/* Section Tag with accent line */}
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 'auto' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className="w-8 h-[2px] bg-[#0a64d9]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0a64d9]">{t.about.hero.tag}</span>
          </motion.div>
          
          {/* Mission Statement — smaller, modern */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl font-normal tracking-tight leading-relaxed text-gray-600 max-w-3xl" 
            style={{ letterSpacing: '-0.01em' }}
          >
            {t.about.vision.desc}
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: '01', title: t.specs.items[0]?.title, desc: t.specs.items[0]?.desc, icon: 'abstract-1' },
            { id: '02', title: t.specs.items[1]?.title, desc: t.specs.items[1]?.desc, icon: 'abstract-2' },
            { id: '03', title: t.specs.items[2]?.title, desc: t.specs.items[2]?.desc, icon: 'abstract-3' },
            { id: '04', title: t.about.quality.ceCertified, desc: t.about.quality.europeanStandards, icon: 'abstract-4' }
          ].map((card, i) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_50px_-20px_rgba(0,0,0,0.1)] transition-shadow duration-300 flex flex-col justify-between min-h-[320px] relative overflow-hidden group"
            >
              {/* Top Row: Number & Icon */}
              <div className={`flex justify-between items-start ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="text-[12px] font-bold text-gray-400">/{card.id}</span>
                <div className="w-10 h-10 text-[#0a64d9] group-hover:scale-110 transition-transform duration-500">
                  {/* Abstract SVG Icons mimicking the Schwartz estates design */}
                  {i === 0 && <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/></svg>}
                  {i === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>}
                  {i === 2 && <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 12h5v-5h10v5h5v5h-5v5h-10v-5h-5z"/></svg>}
                  {i === 3 && <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 8h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/></svg>}
                </div>
              </div>

              {/* Bottom Row: Title & Text */}
              <div className={`mt-24 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold tracking-tight mb-4 text-black">{card.title}</h3>
                <div className={`w-full h-px bg-gray-100 mb-4`} />
                <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products Mini Section to replace the old heavy grid if needed, or keep minimal */}
      <section className="py-12 bg-white flex justify-center border-t border-gray-100">
         <motion.button 
             whileHover={{ scale: 1.05 }}
             className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a64d9] border-b-2 border-[#0a64d9] pb-1"
          >
             {t.featured.viewAll}
         </motion.button>
      </section>

    </div>
  );
};

export default Home;

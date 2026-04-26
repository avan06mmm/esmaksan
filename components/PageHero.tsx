import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

interface PageHeroProps {
  tag: string;
  title: string;
  highlight: string;
  statValue: string | number;
  statLabel?: string;
  statIcon?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ tag, title, highlight, statValue, statLabel = '', statIcon = '✓' }) => {
  const { t } = useLanguage();

  const heroImages = useMemo(() => {
    const all = t.products.items.map((m: any) => m.image).filter(Boolean);
    return all.slice(0, 25);
  }, [t.products.items]);

  return (
    <div className="pt-32 md:pt-40 px-6 md:px-8 max-w-[1600px] mx-auto mb-12">
      <div className="relative rounded-[2rem] overflow-hidden w-full h-[320px] md:h-[380px] shadow-sm border border-ink/5 bg-[#f4f5f7]">
          {/* Parallax / Marquee Product Background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none flex items-center">
            <motion.div 
              className="flex gap-12 md:gap-24 w-max"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ ease: "linear", duration: 400, repeat: Infinity }}
            >
              {[...heroImages, ...heroImages].map((img, i) => (
                <div key={`marquee-${i}`} className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[320px] lg:h-[320px] flex-shrink-0 flex items-center justify-center">
                  <img src={img} className="max-w-full max-h-full object-contain grayscale mix-blend-multiply opacity-[0.15]" alt="" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Top Left */}
          {tag && (
            <div className="absolute top-8 left-8 md:top-10 md:left-10 flex items-center gap-3 z-10">
              <div className="w-2 h-2 bg-brand rounded-sm" />
              <span className="text-[10px] md:text-xs uppercase font-black text-ink tracking-widest">{tag}</span>
            </div>
          )}

          {/* Top Right Label */}
          <div className="absolute hidden md:block top-8 right-8 md:top-10 md:right-10 text-right italic text-ink/40 text-[10px] md:text-[11px] font-bold leading-tight z-10 uppercase tracking-widest max-w-[180px]">
            {t.nav.watermark}
          </div>

          {/* Bottom Right Huge Text */}
          <div className="absolute bottom-6 right-8 md:bottom-10 md:right-10 max-w-3xl text-right z-10 flex flex-col justify-end">
            <h1 className="text-4xl md:text-5xl font-black text-ink tracking-tighter leading-[1.05] uppercase">
              {title} <br className="hidden md:block" />
              <span className="text-brand drop-shadow-sm">{highlight}</span>
            </h1>
          </div>

          {/* Bottom Left Stats Pill */}
          <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 z-10">
            <div className="flex items-center gap-3 bg-white pl-4 pr-1.5 py-1.5 rounded-full shadow-sm border border-ink/5">
              <span className="text-[10px] md:text-xs font-black text-ink tracking-tight uppercase">
                {statValue} {statLabel}
              </span>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand flex items-center justify-center text-ink font-bold text-xs">
                {statIcon}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PageHero;

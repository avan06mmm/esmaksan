import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { useLanguage } from '../LanguageContext';

const rawMarkers = [
  { lat: 37.0902, lng: -95.7129, keys: { tr: 'ABD', en: 'USA', ar: 'الولايات المتحدة' } },
  { lat: 51.1657, lng: 10.4515, keys: { tr: 'Almanya', en: 'Germany', ar: 'ألمانيا' } },
  { lat: 41.8719, lng: 12.5674, keys: { tr: 'İtalya', en: 'Italy', ar: 'إيطاليا' } },
  { lat: 40.4637, lng: -3.7492, keys: { tr: 'İspanya', en: 'Spain', ar: 'إسبانيا' } },
  { lat: 26.8206, lng: 30.8025, keys: { tr: 'Mısır', en: 'Egypt', ar: 'مصر' } },
  { lat: 23.8859, lng: 45.0792, keys: { tr: 'Suudi Arabistan', en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' } },
  { lat: 23.4241, lng: 53.8478, keys: { tr: 'BAE', en: 'UAE', ar: 'الإمارات العربية المتحدة' } },
  { lat: 28.0339, lng: 1.6596, keys: { tr: 'Cezayir', en: 'Algeria', ar: 'الجزائر' } },
  { lat: 31.7917, lng: -7.0926, keys: { tr: 'Fas', en: 'Morocco', ar: 'المغرب' } },
  { lat: 32.4279, lng: 53.6880, keys: { tr: 'İran', en: 'Iran', ar: 'إيران' } },
  { lat: 61.5240, lng: 105.3188, keys: { tr: 'Rusya', en: 'Russia', ar: 'روسيا' } },
  { lat: 20.5937, lng: 78.9629, keys: { tr: 'Hindistan', en: 'India', ar: 'الهند' } },
  { lat: 50.5039, lng: 4.4699, keys: { tr: 'Belçika', en: 'Belgium', ar: 'بلجيكا' } },
  { lat: 48.0196, lng: 66.9237, keys: { tr: 'Kazakistan', en: 'Kazakhstan', ar: 'كازاخستان' } },
  { lat: -35.6751, lng: -71.5430, keys: { tr: 'Şili', en: 'Chile', ar: 'تشيلي' } },
  { lat: -14.2350, lng: -51.9253, keys: { tr: 'Brezilya', en: 'Brazil', ar: 'البرازيل' } },
  { lat: 33.2232, lng: 43.6793, keys: { tr: 'Irak', en: 'Iraq', ar: 'العراق' } },
  { lat: 14.0583, lng: 108.2772, keys: { tr: 'Vietnam', en: 'Vietnam', ar: 'فيتنام' } },
  { lat: 34.8021, lng: 38.9968, keys: { tr: 'Suriye', en: 'Syria', ar: 'سوريا' } },
  { lat: 43.9159, lng: 17.6791, keys: { tr: 'Bosna-Hersek', en: 'Bosnia and Herzegovina', ar: 'البوسنة والهرسك' } },
  { lat: 15.5527, lng: 48.5164, keys: { tr: 'Yemen', en: 'Yemen', ar: 'اليمن' } },
  { lat: 38.9637, lng: 35.2433, keys: { tr: 'Türkiye (Merkez)', en: 'Turkey (HQ)', ar: 'تركيا (المركز)' }, size: 2.5 }
];

export const GlobalMap: React.FC = () => {
  const globeEl = useRef<any>(null);
  const [containerWidth, setContainerWidth] = useState(500);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    // Otomatik donme
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.2;
      globeEl.current.controls().enableZoom = true; 
    }
  }, []);

  useEffect(() => {
    // Responsive cizim
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => resizeObserver.disconnect();
  }, []);

  const markers = rawMarkers.map((m) => ({
    lat: m.lat,
    lng: m.lng,
    name: m.keys[language as keyof typeof m.keys] || m.keys.en,
    size: m.size || 1.0,
    color: '#FACC15'
  }));

  return (
    <div ref={containerRef} className="w-full flex items-center justify-center relative cursor-grab active:cursor-grabbing" style={{ aspectRatio: '1', maxWidth: '100%', margin: '0 auto' }}>
      <Globe
        ref={globeEl}
        width={containerWidth}
        height={containerWidth}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0,0,0,0)"
        pointsData={markers}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.03}
        pointRadius="size"
        pointsMerge={false}
        pointLabel={(d: any) => `
          <div style="background: rgba(10,10,10,0.9); border: 1px solid #FACC15; padding: 6px 12px; border-radius: 8px; font-weight: 800; color: white; font-size: 14px; box-shadow: 0 0 15px rgba(250,204,21,0.4); text-transform: uppercase; font-family: system-ui, -apple-system, sans-serif; letter-spacing: 1px;">
            ${d.name}
          </div>
        `}
      />
    </div>
  );
};

export default GlobalMap;

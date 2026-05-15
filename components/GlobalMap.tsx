import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export const GlobalMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.98, 0.8, 0.08], // Brand yellow/gold #FACC15 equivalent
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        { location: [37.0902, -95.7129], size: 0.04 }, // USA
        { location: [51.1657, 10.4515], size: 0.04 },  // Germany
        { location: [41.8719, 12.5674], size: 0.04 },  // Italy
        { location: [40.4637, -3.7492], size: 0.04 },  // Spain
        { location: [26.8206, 30.8025], size: 0.04 },  // Egypt
        { location: [23.8859, 45.0792], size: 0.04 },  // Saudi Arabia
        { location: [23.4241, 53.8478], size: 0.04 },  // UAE
        { location: [28.0339, 1.6596], size: 0.04 },   // Algeria
        { location: [31.7917, -7.0926], size: 0.04 },  // Morocco
        { location: [32.4279, 53.6880], size: 0.04 },  // Iran
        { location: [61.5240, 105.3188], size: 0.04 }, // Russia
        { location: [20.5937, 78.9629], size: 0.04 },  // India
        { location: [50.5039, 4.4699], size: 0.04 },   // Belgium
        { location: [48.0196, 66.9237], size: 0.04 },  // Kazakhstan
        { location: [-35.6751, -71.5430], size: 0.04 },// Chile
        { location: [-14.2350, -51.9253], size: 0.04 },// Brazil
        { location: [33.2232, 43.6793], size: 0.04 },  // Iraq
        { location: [14.0583, 108.2772], size: 0.04 }, // Vietnam
        { location: [34.8021, 38.9968], size: 0.04 },  // Syria
        { location: [43.9159, 17.6791], size: 0.04 },  // Bosnia and Herzegovina
        { location: [15.5527, 48.5164], size: 0.04 },  // Yemen
        { location: [38.9637, 35.2433], size: 0.08 },  // Turkey (HQ - slightly larger)
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003; // Rotation speed
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative cursor-grab active:cursor-grabbing overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
          opacity: 1,
          transition: 'opacity 1s ease',
        }}
      />
    </div>
  );
};

export default GlobalMap;

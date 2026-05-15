import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export const GlobalMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    
    if (!canvasRef.current) return;

    // We use "any" to bypass TypeScript errors for "onRender"
    const options: any = {
      devicePixelRatio: 2,
      width: 1000,  
      height: 1000, 
      phi: 0,
      theta: 0.3,
      dark: 1, 
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.2, 0.2, 0.2], // Lighter dark to ensure visibility
      markerColor: [0.98, 0.8, 0.08], 
      glowColor: [1, 1, 1], 
      markers: [
        { location: [37.0902, -95.7129], size: 0.05 }, // USA
        { location: [51.1657, 10.4515], size: 0.05 },  // Germany
        { location: [41.8719, 12.5674], size: 0.05 },  // Italy
        { location: [40.4637, -3.7492], size: 0.05 },  // Spain
        { location: [26.8206, 30.8025], size: 0.05 },  // Egypt
        { location: [23.8859, 45.0792], size: 0.05 },  // Saudi Arabia
        { location: [23.4241, 53.8478], size: 0.05 },  // UAE
        { location: [28.0339, 1.6596], size: 0.05 },   // Algeria
        { location: [31.7917, -7.0926], size: 0.05 },  // Morocco
        { location: [32.4279, 53.6880], size: 0.05 },  // Iran
        { location: [61.5240, 105.3188], size: 0.05 }, // Russia
        { location: [20.5937, 78.9629], size: 0.05 },  // India
        { location: [50.5039, 4.4699], size: 0.05 },   // Belgium
        { location: [48.0196, 66.9237], size: 0.05 },  // Kazakhstan
        { location: [-35.6751, -71.5430], size: 0.05 },// Chile
        { location: [-14.2350, -51.9253], size: 0.05 },// Brazil
        { location: [33.2232, 43.6793], size: 0.05 },  // Iraq
        { location: [14.0583, 108.2772], size: 0.05 }, // Vietnam
        { location: [34.8021, 38.9968], size: 0.05 },  // Syria
        { location: [43.9159, 17.6791], size: 0.05 },  // Bosnia and Herzegovina
        { location: [15.5527, 48.5164], size: 0.05 },  // Yemen
        { location: [38.9637, 35.2433], size: 0.1 },   // Turkey (HQ)
      ],
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.005; // Continously rotate the globe
      },
    };

    const globe = createGlobe(canvasRef.current, options);

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div 
      className="w-full flex items-center justify-center relative"
      style={{ 
        maxWidth: '500px', 
        aspectRatio: '1', 
        margin: '0 auto',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '500px',
          maxHeight: '500px',
          contain: 'layout paint size',
          cursor: 'grab'
        }}
      />
    </div>
  );
};

export default GlobalMap;

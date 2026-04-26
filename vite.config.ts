
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
    host: true,
    strictPort: false
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  // Asset optimization and public directory handling
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});

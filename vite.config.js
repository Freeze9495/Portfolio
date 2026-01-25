import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
    }),
  ],
  // ✅ NOUVEAU : Configuration du build
  publicDir: 'public', // Copie automatiquement tout le contenu de public/ vers dist/
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Nettoie dist/ avant chaque build
    copyPublicDir: true // Copie le .htaccess automatiquement
  }
});

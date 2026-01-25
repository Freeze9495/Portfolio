import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react()
  ],
  // ✅ Configuration du build optimisée
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: true,
    // Minification par défaut (esbuild, plus rapide et stable que terser)
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Code splitting pour charger seulement ce qui est nécessaire
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'emailjs': ['@emailjs/browser']
        }
      }
    },
    // Compression et optimisation
    cssCodeSplit: true, // Split CSS par route
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true
  }
});

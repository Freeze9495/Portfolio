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
  // ✅ Configuration du build optimisée
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: true,
    // Optimisations de performance
    minify: 'terser', // Minification agressive
    terserOptions: {
      compress: {
        drop_console: true, // Retire les console.log en prod
        drop_debugger: true
      }
    },
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

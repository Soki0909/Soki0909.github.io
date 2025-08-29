import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Soki0909.github.io/', // GitHub Pagesのベースパス
  build: {
    outDir: 'dist',
    sourcemap: false, // 本番環境ではソースマップを無効化
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});

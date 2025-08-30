import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite設定ファイル - https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ユーザーページなので'/'が正しい
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

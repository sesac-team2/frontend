import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // 도커 환경에서 외부 접속을 허용
    port: 5173,
    watch: {
      usePolling: true, // 파일 변경 감지를 더 확실하게 함
    },
    proxy: {
      '^/auth/(?!.*callback).*': {
        target: 'http://54.236.227.121.nip.io:5002',
        changeOrigin: true,
        secure: false,
      },
      '/projects': {
        target: 'http://54.236.227.121.nip.io:5002',
        changeOrigin: true,
        secure: false,
      },
      '/users': {
        target: 'http://54.236.227.121.nip.io:5002',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

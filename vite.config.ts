import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // 도커 환경에서 외부 접속을 허용
    port: 5173,
    watch: {
      usePolling: true, // 파일 변경 감지를 더 확실하게 함
    },
  },
});

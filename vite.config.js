// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    hmr: {
      port: 5173,
    },
    ws: {
      port: 5173,
    },
  },
});

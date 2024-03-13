import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgt from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      Assets: '/src/Assets',
      Components: '/src/Components',
      Contexts: '/src/Contexts',
      Hooks: '/src/Hooks',
      Pages: '/src/Pages',
      Styles: '/src/Styles',
    },
  },
  plugins: [svgt(), react()],
});

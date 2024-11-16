import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      'process.env.BASE_URL': JSON.stringify(process.env.NODE_ENV === 'production' ? '/PortfolioRiad/' : '/'),
      preventAssignment: true,
    }),
  ],
  base: process.env.NODE_ENV === 'production' ? '/PortfolioRiad/' : '/',
});
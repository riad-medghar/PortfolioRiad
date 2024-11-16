import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { replaceCodePlugin } from 'vite-plugin-replace';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replaceCodePlugin({
      replacements: [
        {
          from: '%BASE_URL%',
          to: process.env.NODE_ENV === 'production' ? '/PortfolioRiad/' : '/',
        },
      ],
    }),
  ],
  base: process.env.NODE_ENV === 'production' ? '/PortfolioRiad/' : '/',
});
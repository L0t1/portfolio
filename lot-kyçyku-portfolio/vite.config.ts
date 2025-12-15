import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/react/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      build: {
        outDir: '../dist/react',
        emptyOutDir: true,
      },
      plugins: [react()],
      // No AI or Gemini API keys needed for this portfolio
      define: {},
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        howToUse: resolve(__dirname, 'how-to-use.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        termsOfService: resolve(__dirname, 'terms-of-service.html'),
        napCalculator: resolve(__dirname, 'nap-calculator.html'),
        sleepTips: resolve(__dirname, 'sleep-tips.html'),
        sleepByAge: resolve(__dirname, 'sleep-by-age.html'),
      },
    },
  },
});

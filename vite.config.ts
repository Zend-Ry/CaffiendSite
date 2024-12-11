import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure this points to the correct root directory
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html', // Ensure this points to the correct index.html file
      },
    },
  },
});
// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0', // Allow access from any IP
  //   port: 3000, // Your desired port
  },
);

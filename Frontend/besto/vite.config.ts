import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // This line can help if you're deploying to a subpath
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/docport-project/', // ← only needed if deploying to GitHub Pages
});

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: `assets/components.js`,
        chunkFileNames: `assets/components.js`,
        assetFileNames: `assets/components.[ext]`,
      },
    },
  },
});

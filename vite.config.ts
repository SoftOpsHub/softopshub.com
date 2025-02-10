import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        jpeg: {
          quality: 80,
        },
      }),
      tailwindcss(),
    ],
  };
});

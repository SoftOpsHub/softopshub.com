import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        jpeg: {
          quality: 60,
        },
        png : {
          quality: 60,
        } , 
        jpg: {
          quality: 60,
        }
        
      
      }),
      tailwindcss(),
    ],
  };
});

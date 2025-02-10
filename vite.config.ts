import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        jpeg: {
          quality: 90,
        },
        png : {
          quality: 90,
        } , 
        jpg: {
          quality: 90,
        }
        
      
      }),
      tailwindcss(),
    ],
  };
});

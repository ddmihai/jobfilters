import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/jobfilters/',
  
  build: {
    assetsInclude: ['src/assets/**']
  },

  plugins: [
    react()
  ]  
})

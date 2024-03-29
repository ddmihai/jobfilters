import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/jobfilters/',
  
  build: {
    assetsInclude: ['src/assets/**']
  },

  plugins: [
    react(),
    reactRefresh(),
  ]  
})

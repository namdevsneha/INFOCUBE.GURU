import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target:'https://google.com',
        secure:false,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      
    }
  },
  plugins: [react()],
})

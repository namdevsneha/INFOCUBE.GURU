import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:true,
    proxy:{
      '/api':{
         target: 'https://infocube-guru-api.vercel.app/',
        changeOrigin: true,
        secure: false,
        ws: true,
     
        rewrite: (path) => path.replace("/api", ""),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log(`Proxying request to: ${proxyReq.getHeader('host')}${req.url}`);
            proxyReq.setHeader('Authorization', 'Bearer KtMcjKNHu7E2tTcGOAZvmPXW');
            
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log(`Received response from: ${proxyRes.req.getHeader('host')}${req.url} with status code: ${proxyRes.statusCode}`);
          });
          proxy.on('error', (err, req, res) => {
            console.error('Proxy error:', err);
          });
        },

      }
    }
  },
  build: {
    proxy: {
      "/api": {
        target: "https://infocube-guru-gl73q1wyq-infocubes-projects.vercel.app/", 
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/api", ""),
      }
    }
  },
  plugins: [react()],
})

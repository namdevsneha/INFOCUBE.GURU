import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'https://infocube-guru-akxl.onrender.com',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
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
      },
    },
  },
  plugins: [react()],
})
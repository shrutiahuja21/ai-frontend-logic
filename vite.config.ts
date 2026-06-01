import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-custom-html',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // If the request is for the root or a path without an extension (SPA route),
          // rewrite it to serve our custom HTML file.
          if (req.url === '/' || (req.url && !req.url.includes('.') && !req.url.startsWith('/@') && !req.url.startsWith('/src') && !req.url.startsWith('/node_modules'))) {
            req.url = '/logistics-control-tower.html';
          }
          next();
        });
      },
    }
  ],
  server: {
    port: 3000,
    strictPort: true,
    open: '/',
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'logistics-control-tower.html'),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@constants": path.resolve(__dirname, "./src/constants"),
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Kalau pakai subdomain Netlify atau custom domain root, biarkan "/"
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false, // matikan sourcemap di production
    minify: 'esbuild', // cepat & kecil
    rollupOptions: {
      output: {
        manualChunks: undefined, // biar ga kebanyakan split file
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})

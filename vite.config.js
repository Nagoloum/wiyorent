import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Pour rediriger toutes les requêtes vers index.html
    historyApiFallback: true,
  },
  build: {
    sourcemap: false, // Active la génération des sourcemaps
  },
})

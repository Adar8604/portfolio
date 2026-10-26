import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work on any host (Vercel, Netlify, GitHub Pages sub-paths).
export default defineConfig({
  plugins: [react()],
  base: './',
})

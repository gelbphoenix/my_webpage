import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgt from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgt(), react()],
})

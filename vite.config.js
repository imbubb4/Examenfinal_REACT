// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Examenfinal_REACT/',   // ✅ SIN COMILLAS INTERNAS
  plugins: [react()],
})

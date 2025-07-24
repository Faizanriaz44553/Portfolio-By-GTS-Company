import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  server:{
    host: true,
    allowedHosts: [
      '3126ab53-528c-4066-9496-2ca39726e3f7-00-123pa5unojbtm.sisko.replit.dev',
    ]
  }
})

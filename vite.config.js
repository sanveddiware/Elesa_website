import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
    
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:{
    proxy:{
      "/api":{
          // target: "https://contactmailelesa-6798yma6w-sanved-diwares-projects.vercel.app/", // your Express backend
          target:"http://localhost:5000",
          changeOrigin: true,
          secure: false,
      }
      
    },
    port:3000,
  }
})

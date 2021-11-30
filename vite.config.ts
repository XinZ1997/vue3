import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const ip = 'http://192.168.1.212/'
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/tarsier-comm': {
        target: ip,
        changeOrigin: true,
      }
    }
  }
})

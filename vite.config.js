import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SanjaySolankiPhotography/', // 👈 your repo name exactly
})

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 🚨 IMPORTANT: Replace <your-repo-name> with the exact name of your GitHub repository.
const repoName = '/my-portfolio/'; 

// https://vitejs.dev/config/
export default defineConfig({
  // 💡 Add the base property here
  base: repoName, 
  plugins: [react()],
})
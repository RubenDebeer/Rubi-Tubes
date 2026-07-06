import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Set BASE to '/' for a user/org page repo (rubendebeer.github.io)
// or '/<repo-name>/' for a project repo (e.g. '/ruben-portfolio/')
const BASE = process.env.VITE_BASE ?? '/'

export default defineConfig({
  plugins: [vue()],
  base: BASE,
})

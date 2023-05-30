import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    FullReload(['src/**/*.css'])
  ]
});

import { defineConfig } from 'vite'
import { resolve } from 'path'
import reloadOnChange from 'vite-plugin-full-reload'

// https://vitejs.dev/config/
const rootPtah = resolve(__dirname, "../");
export default defineConfig({
  rootPtah,
  base: "./",
	server: {
		port: 2023,
	},
  plugins: [
    reloadOnChange(['./src/**/*.css']),
  ],
})

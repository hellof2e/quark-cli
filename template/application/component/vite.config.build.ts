import { resolve } from 'path'
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve("./src/index.tsx"),
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ['quarkc'],
      output: {
        dir: "lib",
      },
    },
  },
});

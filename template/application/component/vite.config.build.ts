import { resolve } from 'path'
import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve("./src/index.tsx"),
      formats: ["es", "cjs"], // 打包输出格式，默认输出 esm/commonjs
      fileName: "index",
    },
    rollupOptions: {
      external: ['quarkc'], // 可选项，是否将 quarkc 打包进组件
      output: {
        dir: "lib",
      },
      plugins: [
        typescript()
      ],
    },
  },
});

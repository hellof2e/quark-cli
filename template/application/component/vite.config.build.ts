import { resolve } from 'path'
import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';

const extensions = ['.js', '.ts', '.tsx']

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
        typescript(),
        commonjs(),
        nodeResolve({
          extensions,
          modulesOnly: true,
        }),
        babel({
          babelHelpers: "runtime",
          exclude: "node_modules/**",
          extensions,
        }),
        filesize(),
      ],
    },
  },
});

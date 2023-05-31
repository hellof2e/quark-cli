import { resolve } from 'node:path'
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';

const extensions = ['.js', '.ts', '.tsx']

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  build: {
    lib: {
      entry: resolve("./src/index.ts"),
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ['quarkc'],
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

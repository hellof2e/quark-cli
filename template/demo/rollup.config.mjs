import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from '@quarkd/rollup-plugin-postcss';
import px2vp from "postcss-px-to-viewport";
import filesize from 'rollup-plugin-filesize';

const extensions = ['.js', '.ts', '.tsx'];

/**
 * @type {import('rollup').RollupOptions}
 */
const options = [
  {
    input: './src/index.ts',
    output: {
      dir: 'lib',
      chunkFileNames: 'index.js',
      format: 'es',
    },
    treeshake: false,
    plugins: [
      postcss({
        plugins: [
          px2vp({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: undefined,
            include: undefined,
            landscape: false,
          })
        ],
        inject: false,
        extensions: ['.css'],
      }),
      typescript(),
      commonjs(),
      nodeResolve({
        extensions,
        modulesOnly: true,
      }),
      babel({ babelHelpers: 'runtime', exclude: 'node_modules/**', extensions }),
      filesize()
    ],
  },
];

export default options;

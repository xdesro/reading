import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/js/index.js',
    output: {
      compact: true,
      format: 'iife',
      dir: 'dist/js',
    },
    plugins: [nodeResolve()],
  },
  {
    input: 'src/js/home.js',
    output: {
      compact: true,
      format: 'iife',
      dir: 'dist/js',
    },
  },
];

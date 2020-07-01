import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
  input: './lib/index.ts',
  output: {
    file: 'dist/chimplist.js',
    name: 'Chimplist',
    format: 'cjs'
  },
  plugins: [
    typescript({ target: 'es5' }),
    resolve(),
    commonjs({ extensions: ['.js', '.ts'] }),
    json()
  ],
  external: ['axios']
};

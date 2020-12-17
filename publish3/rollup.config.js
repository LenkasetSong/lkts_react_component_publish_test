/*
 * @Author: your name
 * @Date: 2020-11-24 09:53:11
 * @LastEditTime: 2020-11-25 10:59:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rollupTest\rollup.config.js
 */
import clear from 'rollup-plugin-clear';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

// rollup.config.js
export default [
  {
    input: 'src/Components/AudioPlayer/pcmPlayer.js',
    output: {
      dir: 'dist', // 可以是 dir 表示输出目录 也可以是 file 表示输出文件
      format: 'es', // 输出的格式 可以是 cjs commonJs 规范 | es es Module 规范 | iife 浏览器可引入的规范
      sourceMap: true,
      entryFileNames: 'AudioPlayer/pcmPlayer.js',
      exports: 'named',
    },
  },
  {
    input: 'src/Components/SpectrumUnitConverter/SpectrumUnitConverter.js',
    output: {
      dir: 'dist', // 可以是 dir 表示输出目录 也可以是 file 表示输出文件
      format: 'es', // 输出的格式 可以是 cjs commonJs 规范 | es es Module 规范 | iife 浏览器可引入的规范
      sourceMap: true,
      entryFileNames: 'SpectrumUnitConverter/SpectrumUnitConverter.js',
      exports: 'named',
    },
  },
  {
    input: 'src/Components/FrequencyInput/index.js',
    output: {
      dir: 'dist', // 可以是 dir 表示输出目录 也可以是 file 表示输出文件
      format: 'es', // 输出的格式 可以是 cjs commonJs 规范 | es es Module 规范 | iife 浏览器可引入的规范
      sourceMap: true,
      entryFileNames: 'FrequencyInput/index.js',
      exports: 'named',
    },
    // 是否开启代码分割
    experimentalCodeSplitting: true,
    // 需要引入的插件
    plugins: [
      clear({
        targets: ['es'],
      }),
      babel({
        exclude: 'node_modules/**', // 只编译源代码
        runtimeHelpers: true,
      }),
      postcss({
        // Extract CSS to the same location where JS file is generated but with .css extension.
        extract: false, // 'FrequencyInput/index.css',
        // Use named exports alongside default export.
        // namedExports: true,
        // Minimize CSS, boolean or options for cssnano.
        // minimize: true,
        // Enable sourceMap.
        sourceMap: true,
        inject: true,
        // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
        extensions: ['.less', '.css'],
        use: {
          sass: null,
          stylus: null,
          less: { javascriptEnabled: true },
        },
      }),
      resolve(),
      commonjs(),
    ],
    // 将模块视为外部模块，不会打包在库中
    // eslint-disable-next-line no-restricted-globals
    external: [
      'antd',
      'antd/es/locale/zh_CN',
      'antd/dist/antd.css',
      'moment',
      'moment/locale/zh-cn',
      'echarts',
      'prop-types',
      'react',
    ],
  },
];

import { loadEnv } from 'vite';
import { createVitePlugins } from './build';
import * as path from 'path';
import { version } from './package.json';

/**
 * 拼合目录路径
 * @param {string} dir
 */
function resolve(dir) {
  return path.join(__dirname, dir);
}

// @see https://cn.vitejs.dev/config/
export default ({ mode, command }) => {
  const isProd = command === 'build';
  const outputDir = `dist`;
  const env = loadEnv(mode, process.cwd());
  const publicUrl = env.VITE_APP_PUBLIC_URL;
  const assetsDir = isProd ? `${version.split('-')[0]}` : `assets`;
  const assetsPath = isProd ? `${publicUrl}${assetsDir}` : resolve(`src/assets`);

  let rollupOptions = {};

  let optimizeDeps = {};

  let proxy = {
    '/api': {
      target: 'xxx/api',
      pathRewrite: { '^/api': '' },
      secure: false,
      changeOrigin: true,
    },
  };

  let define = {
    'process.env': env,
  };

  let alias = {
    '/@': resolve('src'),
    '@': resolve('src'),
  };

  let esbuild = {};

  return {
    base: publicUrl, // index.html文件所在位置
    root: './', // js导入的资源路径，src
    define: define,
    resolve: {
      alias,
    },
    server: {
      // 代理
      https: true,
      host: '0.0.0.0',
      port: 3000,
      proxy,
    },
    build: {
      target: 'es2015',
      minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
      manifest: false, // 是否产出maifest.json
      sourcemap: false, // 是否产出soucemap.json
      outDir: outputDir, // 产出目录
      rollupOptions,
      assetsDir,
    },
    esbuild,
    optimizeDeps,
    plugins: [createVitePlugins(isProd, env)],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        },
        scss: {
          // /@/ 是 src/ 的别名
          // 所以这里假设你有 `src/variables.sass` 这个文件
          // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
          additionalData: `
                $isProd: "${isProd}";
                $assetsPath: "${assetsPath}";
                @import "/@/styles/vars.scss";
                @import "/@/styles/mixins.scss";
                @import "/@/styles/func.scss";`,
        },
      },
    },
  };
};

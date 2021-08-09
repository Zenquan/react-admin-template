const { resolve, isProd } = require('./utils'),
  { loaders } = require('./loaders'),
  { plugins } = require('./plugins'),
  portfinder = require('portfinder');

const baseConfig = {
  entry: {
    app: resolve("src/index.tsx")
  },
  output: {
    path: resolve('dist'),
    filename: "[name].[chunkhash:8].js",
    clean: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      '@': resolve('src'),
      'pages': resolve('src/pages'),
      'utils': resolve('src/utils'),
      'services': resolve('src/services'),
      'stores': resolve('src/stores'),
      'components': resolve('src/components'),
      'layout': resolve('src/layout')
    },
  },
  stats: {
    errorDetails: true, // --display-error-details
  },
  plugins,
  module: {
    rules: loaders
  },
  target: "web",
};

const devConfig = Object.assign(baseConfig, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist',
    host: '127.0.0.1',
    port: process.env.PORT || 5000,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '', },
        secure: false,
        changeOrigin: true,
      },
    },
    inline: true,
    historyApiFallback: true
  },
  watchOptions: {
    ignored: 'node_modules/**'
  },
});

const prodConfig = Object.assign(baseConfig, {
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
});

module.exports = new Promise((resolve, reject) =>  {
  portfinder.getPort((err, port) => {
    if(err){
      reject(err);
      return;
    }

    //端口被占用时就重新设置evn和devServer的端口
    devConfig.devServer.port = process.env.PORT = port;

    resolve(isProd ? prodConfig : devConfig);
  });
});
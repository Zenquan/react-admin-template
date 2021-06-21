const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  { resolve } = require('./utils'),
  FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
  WebpackBar = require("webpackbar"),
  { isProd } = require('./utils');

const basePlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new FriendlyErrorsPlugin(),
  new WebpackBar(),
];

const devPlugins = [
  new HtmlWebpackPlugin({
    title: 'reactAmdmin 后台系统方案',
    template: resolve('public/index.html')
  }),
];

const prodPlugins = [
  new HtmlWebpackPlugin({
    title: 'reactAmdmin 后台系统方案',
    template: resolve('public/index.html'),
    env: 'production',
    minify: true,
    vendor: resolve('lib/dll_react.js')
  }),
  new webpack.DllReferencePlugin({
    // 描述 react 动态链接库的文件内容
    manifest: require(resolve('lib/react-mainfest.json')),
  }),
  // new BundleAnalyzerPlugin()
];

const plugins = isProd ? basePlugins.concat(prodPlugins) : basePlugins.concat(devPlugins);

module.exports = {
  plugins
};
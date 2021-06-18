const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        react: ['react', 'react-dom']
    },
    output: {
        filename: 'dll_[name].js',
        library: "[name]_[hash]",
        path: path.resolve(__dirname, '../lib')
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            path: path.join(__dirname, '../lib', '[name]-mainfest.json'),
            name: '[name]_[hash]'
        }),
    ]
}
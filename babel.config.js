module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "syntax-dynamic-import",
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ],
};
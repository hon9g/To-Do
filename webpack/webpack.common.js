const path = require("path");
const webpack = require("webpack")

module.exports = {
  entry: "./index",
  context: path.resolve(__dirname, '../src'),
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
}

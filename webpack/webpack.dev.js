const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
      static: './public',
      hot: true,
      historyApiFallback: true,
      port: 3000,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        template: './presentation/index.html',
        minify: false,
        publicPath: '/',
    }),
  ]
}

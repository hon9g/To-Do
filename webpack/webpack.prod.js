const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
        template: './presentation/index.html',
        minify: {
            collapseWhitespace: true,
            removeComments: true,
        },
    }),
  ]
}

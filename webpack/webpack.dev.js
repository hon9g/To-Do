const webpack = require('webpack')

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
}

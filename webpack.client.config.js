var path    = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var AssetsPlugin = require('assets-webpack-plugin')
var assetsPluginInstance = new AssetsPlugin({filename: 'shared/webpack-assets.json'})

module.exports = {
  target: 'web',
  entry:  [
    './client'
  ],
  output: {
    path:     path.join(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production'? '[name].[hash].js' : '[name].js',
    chunkFilename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:         ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
	test: /\.css$/,
	exclude: /node_modules/,
	loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=[path][name]__[local]___[hash:base64:5]')
      },
      {
        test: /\.(png|jpg|jpeg)$/,
	loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(process.env.NODE_ENV === 'production' ? "[name].[chunkhash].css" : "[name].css", {allChunks: true}),
    assetsPluginInstance,
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map',
}

if (process.env.NODE_ENV !== 'production') {
  module.exports.entry.unshift(
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server'
  )
  module.exports.plugins.unshift(new webpack.HotModuleReplacementPlugin())
  module.exports.devServer = {
    hot: true,
    proxy: {
      '/*': 'http://slightly.local:' + (process.env.PORT || 3000)
    },
    host: '0.0.0.0'
  }
}

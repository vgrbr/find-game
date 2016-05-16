var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: [__dirname]
      },
      {
         test: /\.(otf|eot|svg|ttf|woff)/,
         loader: 'url-loader?limit=8192'
      },
      {
         test: /\.(jpg|png)/,
         loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(less|css)$/,
        loader: ExtractTextPlugin.extract('style-loader',
          // 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' +
          'css-loader' +
          '!less-loader' +
          '!postcss-loader'
        )
      }
    ]
  },
  postcss: [
    require('autoprefixer'),
  ],
}

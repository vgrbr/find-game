var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[hash]-bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[hash]-style.css', { allChunks: true }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Find Objects Game',
      template: 'index.ejs',
      inject: 'body'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
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
    require('autoprefixer')
  ],
}

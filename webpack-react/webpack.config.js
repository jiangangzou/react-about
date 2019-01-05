const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.styl/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loaders: [
            'url-loader?limit=8192&name:[name]-[hash:5].[ext]',
            'image-webpack-loader'
        ]
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      file: 'index.html',
      template: 'public/index.html'
    })
  ],
  devServer: {
    port: 3000,
    open: true
  },
  devtool: 'inline-source-map'
}

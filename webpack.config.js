const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const dist = path.join(__dirname, 'dist');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(png|jpg|gif)$/i,
        loader: 'url-loader'
      },
      {
        test: /\.svg$/i,
        loader: 'svg-url-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    contentBase: dist,
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/assets/apple-touch-icon.png',
      template: './src/index.html'
    })
  ]
};

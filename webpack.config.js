const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const dist = path.join(__dirname, 'dist')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: dist,
    filename: 'index_bundle.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [".ts", ".tsx", '.js', '.jsx']
  },
  module: {
    rules: [{
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: "ts-loader"
        }]
      },
      {
        enforce: "pre",
        test: /\.js$/
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'scheda.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Scheda',
    libraryExport: 'default'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
    ],
  }
};

module.exports = config;

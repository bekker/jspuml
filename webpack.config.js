const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    filename: 'jspuml.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Puml',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    publicPath: '/dist/'
  }
};

const path = require('path');
const ngtools = require('@ngtools/webpack');
const webpack = require("webpack");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'sourcemap',
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: {
    main: './src/main.ts',
    vendor: './src/vendor.ts'
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'dist/',
    filename: "[name].js"
  },
  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: "./src/main.ts"
    }),
    new CommonsChunkPlugin({
      name: 'vendor'
    }),
    new CommonsChunkPlugin({
      async: true
    })
  ],
  module: {
    loaders: [
		{
        test: /\.ts$/,
        loader: '@ngtools/webpack'
    },
	  {
        test: /\.css$/,
        loader: 'style-loader'
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  }
};
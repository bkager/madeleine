const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx", 
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: "./index.html"})],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
      publicPath: "/build",
    }, 
}
}
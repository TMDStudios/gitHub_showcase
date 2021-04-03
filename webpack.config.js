const path = require("path");
const webpack = require("webpack");

module.exports = {
  output: {
    path: path.resolve(__dirname, "./showcase/frontend/static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
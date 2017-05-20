/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    homepage:[
      "whatwg-fetch",
      "babel-polyfill",
      "./build/App.jsx"
    ],
    notfound: [
      "whatwg-fetch",
      "babel-polyfill",
      "./build/NotFound.jsx"
    ]
  },
  output: {
    path: path.join(__dirname, "assets/scripts"),
    filename: "[name].js",
    publicPath: "/assets/scripts/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader?limit=8192"
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }]
  }
};

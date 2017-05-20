/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: {
    homepage: [
      "whatwg-fetch",
      "webpack-hot-middleware/client",
      "babel-polyfill",
      "./build/App.jsx"
    ],
    notfound: [
      "whatwg-fetch",
      "webpack-hot-middleware/client",
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    }),
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        plugins: [
          [
            "react-transform", {
              transforms: [{
                transform: "react-transform-hmr",
                imports: ["react"],
                locals: ["module"]
              }, {
                transform: "react-transform-catch-errors",
                imports: ["react", "redbox-react"]
              }]
            }
          ]
        ]
      },
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css$/,
      loaders: ["style-loader", "raw-loader"],
      include: path.join(__dirname, "public/layouts")
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml",
      include: path.join(__dirname, "public/media")
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      include: path.join(__dirname, "public/media")
    }, {
      test: /\.gif$/,
      loader: "url-loader?mimetype=image/gif",
      include: path.join(__dirname, "public/media")
    }, {
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
      include: path.join(__dirname, "public/media")
    }]
  }
};

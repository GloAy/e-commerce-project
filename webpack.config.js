const path = require("path");

module.exports = {
  devServer: {
    static: path.resolve(__dirname, "./views"),
    historyApiFallback: true,
  },
  entry: [
    "regenerator-runtime/runtime.js",
    path.resolve(__dirname, "./views/index.js"),
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          publicPath: "assets",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  output: {
    filename: "bundle.js",
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
};

const path = require("path");

module.exports = {
  devServer: {
    static: path.resolve(__dirname, "./views"),
    historyApiFallback: true,
  },
  entry: [
    "regenerator-runtime/runtime.js",
    path.resolve(__dirname, "./views/index.tsx"),
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
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
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
    extensions: [".tsx", ".ts", ".js"],
  },
};

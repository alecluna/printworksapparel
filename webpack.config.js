const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js"
  },
  devtool: "inline-source-map",
  watch: true,
  module: {
    rules: [
      { test: /\.css$/, use: ["css-loader"] },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Titik masuk utama
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/, // Menerapkan Babel pada file .js
        exclude: /node_modules/, // Perbaiki penulisan di sini
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Menggunakan loader untuk memproses CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Menggunakan template HTML
    }),
  ],
  devServer: {
    static: "./dist", // Menyediakan folder output untuk Webpack Dev Server
  },
};

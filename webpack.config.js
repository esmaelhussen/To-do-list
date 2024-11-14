const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js', // Entry point for your app
  },
  devtool: 'inline-source-map',
  devServer: {
    static: "./dist", // Serve static files from the 'dist' folder
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template HTML file
      base: "/To-do-list/", // Ensure correct resolution of relative paths
    }),
  ],
  output: {
    filename: "[name].bundle.js", // Output bundled file
    path: path.resolve(__dirname, "dist"), // Output folder for bundles
    clean: true, // Clean the output folder before each build
    publicPath: "/To-do-list/", // Update this for GitHub Pages
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Handle CSS files
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single', // Extract runtime chunk
  },
};

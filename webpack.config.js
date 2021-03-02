const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [new MiniCssExtractPlugin()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
        module: {
            rules: [
                { test: /\.css$/i, use: ["style-loader", "css-loader"]},
                { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]},
                { test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader', options: {name: '[path][name].[ext]' }, },
                

            ],
          },
  };

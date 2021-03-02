const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: 
    {
        index: "./src/start_index.js",
        acerca_de: "./src/start_acerca_de.js",
        historia: "./src/start_historia.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template: "./src/index/index.html",
        filename: "index.html",
        chunks: ["index"]
    }
    ),
    new HtmlWebpackPlugin({
        template: "./src/historia/historia.html",
        filename: "historia.html",
        chunks: ["historia"]
    }
    ),
    new HtmlWebpackPlugin({
        template: "./src/acerca_de/acerca_de.html",
        filename: "acerca_de.html",
        chunks: ["acerca_de"]
    }
    )],
        module: {
            rules: [
                { test: /\.css$/i, use: ["style-loader", "css-loader"]},
                { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]},
                { test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader', options: {name: '[path][name].[ext]' }, },
                

            ],
          },
  };

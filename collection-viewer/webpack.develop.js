"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    target: "web",
    mode: "development",
    entry: ["./src/vendor.js", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        host: "0.0.0.0",
        port: 9001,
        historyApiFallback: true,
        writeToDisk: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["*.js", "*.css", "*.txt"],
        }),
        new HtmlWebpackPlugin({
            title: "Mobile Collection Viewer",
            template: "./src/index.html",
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.?css$/,
                use: [
                    "vue-style-loader",
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|png|jp(e*)g|gif|webp)?$/,
                loader: "file-loader",
            },
        ],
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src"),
            assets: path.resolve(__dirname, "src/assets"),
            components: path.resolve(__dirname, "src/components"),
            configuration: path.resolve(__dirname, "src/configuration"),
            directives: path.resolve(__dirname, "src/directives"),
            routes: path.resolve(__dirname, "src/routes/"),
            services: path.resolve(__dirname, "src/services"),
            store: path.resolve(__dirname, "src/store"),
        },
    },
};

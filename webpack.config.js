const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const devMode = env.mode === "development";

  let envKeys = {};
  if (devMode) {
    // config to access env variables from .env
    const envVar = dotenv.config().parsed;
    envKeys = Object.keys(envVar).reduce((prev, next) => {
      prev[next] = JSON.stringify(envVar[next]);
      return prev;
    }, {});
  }

  return {
    mode: env.mode,
    entry: {
      bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      assetModuleFilename: "[name][ext]",
      clean: true,
    },
    ...(devMode && { devtool: "source-map" }),
    ...(devMode && {
      devServer: {
        static: {
          directory: path.resolve(__dirname, "dist"),
        },
        port: 4000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
      },
    }),
    module: {
      rules: [
        {
          test: /\.(sc|sa|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[local]-[hash:base64:5]",
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.(png|svg|jpeg|jpg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      devMode &&
        new webpack.DefinePlugin({
          process: {
            env: envKeys,
          },
        }),
      new HtmlWebpackPlugin({
        title: "Lokesh Ravindran",
        filename: "index.html",
        template: "src/index.html",
        favicon: "src/assets/icon.png",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
    ],
  };
};

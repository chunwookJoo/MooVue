const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".vue", ".js"], // 확장자 생략
    alias: {
      "~": path.resolve(__dirname, "src"), // 별칭 사용 (src 대신 ~를 사용)
    },
  },
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true, // 기존 dist폴더 삭제 후 다시 생성
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `
							@use "sass:color";
							@use "sass:list";
							@use "sass:map";
							@use "sass:math";
							@use "sass:meta";
							@use "sass:selector";
							@use "sass:string";
							@import "~/scss/_variables";
							@import "~/scss/_fonts";
							@import "~/scss/_mixins";
						`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};

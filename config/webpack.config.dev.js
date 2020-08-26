/*
 * @Autor: Clairoll
 * @Date: 2020-08-24 16:15:33
 * @LastEditTime: 2020-08-24 17:24:29
 * @Email: 1755033445@qq.com
 * @description: webpack 开发模式的配置
 */
const webpackMerge = require("webpack-merge");

const baseWebpackConfig = require("./webpack.config.base");
const webpackConfig = webpackMerge.merge(baseWebpackConfig, {
  devtool: "eval-source-map",
  mode: "development",
  stats: { children: false },
});

module.exports = webpackConfig;

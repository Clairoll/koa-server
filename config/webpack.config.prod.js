const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.base");
const TerserWebpackConfig = require("terser-webpack-plugin");

const webpackConfig = webpackMerge.merge(baseWebpackConfig, {
  mode: "production",
  stats: { children: false, warnings: false },
  optimization: {
    minimize: true,
    minimizer: [
      // 配置生产环境的压缩方案：js 和css
      new TerserWebpackConfig({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            //  是否注释console
            drop_console: true,
            dead_code: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
          mangle: true,
        },
        // 开启多进程打包
        parallel: true,
        // 启动source-map
        sourceMap: false,
      }),
    ],
    splitChunks: {
      chunks: "initial", // 代码分割时对异步代码生效，all：所有代码有效，initial：同步代码有效
      minChunks: 3, // 引入的次数大于等于1时才进行代码分割,
      name: "commons",
    },
  },
});

module.exports = webpackConfig;

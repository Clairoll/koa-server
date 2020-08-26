/*
 * @Autor: Clairoll
 * @Date: 2020-08-24 14:19:00
 * @LastEditTime: 2020-08-26 11:11:25
 * @Email: 1755033445@qq.com
 * @description: 项目入口文件
 */
import koa from "koa";
import path from "path";
import helmet from "koa-helmet";
import koaBody from "koa-body";
import statics from "koa-static";
import jsonuntil from "koa-json";
import cros from "@koa/cors";
import compose from "koa-compose";
import compress from 'koa-compress'

import router from "./routes/index";

const app = new koa();

// 判断是否处于生产环境
const isProduct =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod"
    ? true
    : false;

// 打包整合中间件
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, "../static")), // 静态资源托管
  cros(),
  jsonuntil({ pretty: false, param: "pretty" }),
  helmet(),
]);

if(isProduct) {
  // 压缩代码
  app.use(compress())
}
app.use(middleware);
app.use(router());
app.listen(3000);

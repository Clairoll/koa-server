/*
 * @Autor: Clairoll
 * @Date: 2020-08-24 14:20:38
 * @LastEditTime: 2020-08-26 10:52:11
 * @Email: 1755033445@qq.com
 * @description: 路由压缩整合
 */
import combineRoute from "koa-combine-routers";
import DemoRoute from "./DemoRoute";

module.exports = combineRoute(DemoRoute);

/*
 * @Autor: Clairoll
 * @Date: 2020-08-24 14:36:39
 * @LastEditTime: 2020-08-26 10:51:46
 * @Email: 1755033445@qq.com
 * @description: 路由定义
 */
import Router from "koa-router";
import demoController from "../api/DemoController";

const router = new Router();

router.get("/demo", demoController.demo);

export default router;

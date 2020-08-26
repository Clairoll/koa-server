/*
 * @Autor: Clairoll
 * @Date: 2020-08-24 14:36:25
 * @LastEditTime: 2020-08-26 10:51:35
 * @Email: 1755033445@qq.com
 * @description:  具体接口逻辑实现
 */
class DemoController {
  constructor() {}
  async demo(ctx) {
    ctx.body = {
      msg: "body msg",
    };
  }
}

export default new DemoController()
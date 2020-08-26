# 基于webpack的快速koa开发模板

## 一、项目结构

```javascript
│  .babelrc // Babel配置文件
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│
├─config // webpack配置文件
│      webpack.config.base.js
│      webpack.config.dev.js
│      webpack.config.prod.js
│
├─src
│  │  index.js // 项目入口
│  │
│  ├─api // 接口处理逻辑文件
│  │      DemoController.js
│  │
│  └─routes // 接口文件
│          DemoRoute.js
│          index.js
│
└─static // 静态资源文件
│
└─dist // 打包生产文件
```

## 二、项目命令

1. 启动： `npm start`

2. 打包：`npm run build`

3. 清除打包文件：`npm clean`

4. 调试：`npm run dev`

   
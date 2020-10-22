## 基于 React 的管理后台快速搭建模板

该项目基于 [Create React App](https://github.com/facebook/create-react-app) 构建.

<br />

## ！！！注意 前端代理 Proxy 在 package.json 中配置

## 功能

- 登录/登出
- 基础侧边栏 Layout
- 多级路由
- 异步请求封装

<br />

## 脚本

#### 使用 npm 或者 yarn 作为包管理工具

```
yarn / npm install
```

Install all the dependencies.

```
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3999](http://localhost:3999) to view it in the browser.

```
yarn test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
yarn build
```

Builds the app for production to the `build` folder.<br />

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
yarn lint
```

Lint the code in the `src` folder via eslint .<br />

See the section about [Command Line Interface](https://eslint.org/docs/user-guide/command-line-interface) for more information.

<br />

## 项目结构

```
├── build  项目构建配置
├── public  入口文件
├── README.md  help
├── craco.config.js craco配置文件，可添加额外的webpack配置
├── .eslintrc.js 项目的全局eslint配置
├── .prettierrc.js 项目的全局prettier配置
├── .stylelintrc.js 项目的全局stylelint配置
├── .gitignore 项目git版本忽略文件列表
├── package.json
└── src
    ├── index.js  项目入口文件
    ├── App.js  应用主体，路由页
    ├── api  接口地址列表
    ├── assets  项目静态资源
    ├── components  全局组件
    ├── view  页面组件
    ├── layout  框架布局
    ├── utils  工具函数
    |     ├── AsyncLoadable.jsx  React组件异步加载
    |     ├── axios / axios.request.js 基于axios的异步请求封装
    |     └── auth.js 用户权限存取
    ├── routes  路由（与侧边menu）配置表
    └── styles  全局项目样式文件
```

<br />

## 依赖

### antd

基础 UI 组件库 [Ant Design](https://https://ant.design/components/overview-cn/)

### craco, craco-alias, craco-antd, craco-less

webpack 相关的配置层插件，适用于 Create React App 构建的项目 https://github.com/gsoft-inc/craco

### nprogress

加载进度条插件 Slim progress bars for Ajax'y applications. https://github.com/rstacruz/nprogress

### axios

基于 Promise 封装，适用于浏览器和 node 环境的 HTTP 请求客户端。<br />
Promise based HTTP client for the browser and node.js https://github.com/axios/axios

### ahooks

易用的 React hooks 组件库 https://github.com/alibaba/hooks

### @loadable/component

React 的一个代码分割库 https://loadable-components.com/

### Eslint

Javascript 代码检查工具，通过引入相关插件，结合配置使用，同时需在 VSCode 中安装插件 https://eslint.org/

```
提示：

在新建项目中配置eslint及prettier时，安装以下必要库：

    "eslint",
    "prettier"
    "eslint-config-airbnb",
    "eslint-config-prettier",
    "eslint-plugin-prettier"

根据不同环境(browser / node)，不同框架(react / fastify)按需求引入不同插件:
    "eslint-plugin-react" (react下)

项目文件根目录复制入以下配置文件：
    .eslintrc.js (区别browser和node环境，更改env参数)
    .prettier.js


VScode中安装 ESlint / Prettier 配合完成代码检查和风格统一

```

### stylelint

CSS 代码检查工具，通过引入相关插件，结合配置使用 https://stylelint.io/

### prettier

支持多种语言的代码格式化工具，结合配置文件使用，同时需在 VSCode 中安装插件 https://prettier.io/

<br />

## 扩展阅读

```
VScode代码注释插件推荐

Document This 完成函数注释，符合JSDoc要求

koroFileHeader 完成文件头部注释，自动更新编辑状态，同样可以完成函数注释
```

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

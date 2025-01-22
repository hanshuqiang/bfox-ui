##项目描述

基于element二次封装的UI库，主要重新封装了table组件，只需传入api地址，无需自己写多余的网络请求，数据赋值等

## 本地运行

```
yarn
npm run dev
```

## NPM 包发布流程

登录npmjs.com(在根路径下执行)

```
npm login
//输入账号密码 账号：hanpanpan  密码：xxxxx
```

发布

```
npm publish
//主意：每次提交的package.json中的版本号不能一样
```

## 一、开发框架初始化

这一套开发框架我们把它命名为 `bfox-ui`。在技术选型上使用的是 Vite + Vue3 + Typescript。

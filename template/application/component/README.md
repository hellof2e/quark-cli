# Quark 组件

基于本工程，您可以构建属于自己的跨技术栈/无框架 组件。并允许被发布到 npm 平台供他人使用。

## 如何使用

```
npm install
npm run dev
```

入口文件为 `src/index.tsx`，使用 `vite` 进行开发和生产打包

## 发布到 npm

如果您想要将当前组件发布到 npm，请在 `package.json` 中配置：

```js
// 需要上传到 npm 的文件，也可用 .npmignore 替代
"files": [
  "/lib"
],
```

## 打包产物

```
npm run build
```

打包后的产出为： `lib/index.js`和`lib/index.mjs`。

## 使用产物

您可以在本地登录 npm 后，在根目录执行 `npm publish`，发布到 `npm` 平台，供他人使用。

<img src="https://raw.githubusercontent.com/hellof2e/quark-cli/main/demo2.jpg" />

### 1、安装

```javascript
npm install quark-my-component
```

### 2、使用

无论是`Vue`，`React`，`Angular`还是`Jq`项目，该组件都可以被使用。

```js
import "quark-my-component/lib/index";

<my-component count="0" />;
```

<img src="https://raw.githubusercontent.com/hellof2e/quark-cli/main/demo.jpg" />

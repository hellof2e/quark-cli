# Quark 组件

基于本工程，您可以构建属于自己的跨技术栈/无框架 组件。并允许被发布到 npm 平台供他人使用。

## 如何使用

```
npm install
npm run dev
```

入口文件为 `src/main.tsx`，使用 `vite` 进行开发时的构建，生产使用 `rollup` 进行打包。

## 打包产物

```
npm run build
```
打包后的产出为： `lib/index.js`。

## 使用产物

您可以在本地登录npm后，在根目录执行 `npm publish`，发布到 `npm` 平台，供他人使用。
```bash
➜  my-project npm publish
npm notice
npm notice 📦  quark-my-component@0.0.1
npm notice === Tarball Contents ===
npm notice 822B README.md
npm notice 830B package.json
npm notice === Tarball Details ===
npm notice name:          quark-my-component
npm notice version:       0.0.1
npm notice filename:      quark-my-component-0.0.1.tgz
npm notice package size:  1.0 kB
npm notice unpacked size: 1.7 kB
npm notice shasum:        694d8b09884efcb9b4ac9aabc5dcc33b9424e2c7
npm notice integrity:     sha512-XLA3uK1SoGtrb[...]pYD7CaaI5xWkg==
npm notice total files:   2
npm notice
npm notice Publishing to https://registry.npmjs.org/
+ quark-my-component@0.0.1
```

### 1、安装

```javascript
npm install quark-my-component
```

### 2、使用

无论是`Vue`，`React`，`Angular`还是`Jq`项目，该组件都可以被使用。

```js
import 'quark-my-component/lib/index'

<my-component count="0" />
```
# Quark 组件模版

本工程用于通过命令行构建跨技术栈的前端组件工程。

通过生成的模版工程，您可以构建属于自己的跨技术栈组件。

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

打包后产出的 `lib/index.js` 文件可以用于直接在前端项目中去使用



## 使用产物

这里我们在`Vue`或者`React`项目中，引入组件的方式为`import quark-demo/lib/index.js`。

```javascript
@customElement({
  tag: 'my-component',
  style,
})
```

在`Vue`或者`React`中使用

```javascript
<my-component />
```

直接 `npm publish` 发布到 `npm` 平台（让开发者 npm install 后去使用）。
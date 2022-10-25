### Quark-Template

为`@quarkd/core`使用生成的模板文件，其中入口文件为`main.tsx`，使用vite进行开发时的构建，生产使用rollup进行打包。

其中`main.tsx`为使用`@quarkd/core`书写的自定义组件，打包后会在目录下生成`lib/index.js`文件。

这里我们在`Vue`或者`React`项目中，引入组件的方式为`import quark-demo/lib/index.js`。其中组件的tag名称为自定组件的名称。
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



### 项目启动

- npm i
- npm run dev

### 项目打包
npm run build
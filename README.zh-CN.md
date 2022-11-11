# Create CLI

通过这个CLI，您可以创建一个跨框架/技术栈的组件，或许你也可以将其打包成 npm 包进行发布，供他人使用。

[English](./README.md) | 简体中文

```tsx
import QuarkElement, { customElement } from '@quarkd/core'
@customElement({
  tag: 'my-component',
})
class MyComponent extends QuarkElement {
  render() {
    return (
      <div>
        <h1>Hello Quark!</h1>
      </div>
    )
  }
}
```

然后，当成普通标签在各类框架（React/Vue/Angular/JQ）中使用：
```html
<my-component></my-component>
```

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/14307551/201297870-65ced65e-78ee-45f5-8bdf-5823b6cae462.png">


## 安装

```
npm i -g @quarkd/quark-cli
```

## 创建项目

### npx

```
npx create-quark
```

or

### npm

```
npm create quark
```

## 启动项目

```
cd quark-project
npm i
npm start
```

Then open http://localhost:3000/ to see your app.

## 使用场景举例（为您的项目/团队提效降本）

Quark-CLI 可以让大家在直接在日常开发中开发横跨多个技术栈/框架的业务组件。比如一个相同样式的营销弹窗，可以做到：

- 同时运行在不同技术栈（Angular、Vue、React等）的前端工程中
- 同时运行在不同版本的技术栈中，比如能同时运行在 Vue2.x、Vue3.x 中


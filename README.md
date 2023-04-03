# Quark CLI

使用此 CLI，您可以使用它来创建跨框架/技术堆栈组件，或者您可以将其打包为 npm 包以供分发以供其他人使用。

简体中文 | [English](./README.en-US.md)

## 安装并创建

> 注意：Vite 需要 Node.js 版本 14.18+、16+。

```
npx create-quark-app create project-name
```

## 如何使用

```jsx
import { QuarkElement, property, customElement } from "quarkc";

@customElement({ tag: "quark-count" })
export default class MyComponent extends QuarkElement {
	@property({
		type: Number,
	})
	count = 0;

	add = () => {
		this.count += 1;
	};

	render() {
		return <button onClick={this.add}>count is: {this.count}</button>;
	}
}
```

然后，在各种框架（React/Vue/Angular/JQ）中将其作为普通的 html 元素使用即可。

```html
<my-component count="0"></my-component>
```

## 文档

如需完整文档，请访问 [quark.hellobike.com](https://quark.hellobike.com)

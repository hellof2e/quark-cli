<!-- ## Defining a component
自定义一个继承自 `QuarkElement` 的类， 然后使用 `@customElement` 装饰器修饰。

```tsx
import { QuarkElement, customElement } from "quarkc";

@customElement({ tag: "quark-count" })
export default class Count extends QuarkElement {/***/}
```

装饰器 `@customElement` 底层通过 [customElements.define](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 向浏览器注册自定义元素。

### Quark 组件是一个 HTML 元素
通过 `@customElement` 修饰的元素，相当于在[自定义HTML元素](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 。因此，你可以像使用任何 `HTML` 内置元素那样使用自定义元素。

```html
<quark-count />
```
```tsx
const count = document.createElement('quark-count');
``` -->

---
title: Hello from front-matter
---

# Markdown File


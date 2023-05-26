## Rendering
为你的自定义元素添加一个 `render` 方法。
```tsx
import { QuarkElement, customElement } from "quarkc";
@customElement({ tag: "quark-count" })
export default class Count extends QuarkElement {
   render() {
     return (
        <button>Count</button>
     );
  } 
}
```

`Qaurk` 使用 `tsx` 来作为 `UI` 表达式，因此 `render` 函数内可以包含任何 `tsx` 语法,如条件渲染、三目运算符等。你可以像写 `React` 组件一样，写 `Quark` 组件。

条件渲染：
```tsx
import { QuarkElement, customElement } from "quarkc";
@customElement({ tag: "quark-count" })
export default class Count extends QuarkElement {
   count = 0
   renderItem = () => {
     if (this.count > 0) {
        return <div>{this.count}</div>
     }
     return null
   }
   render() {
     return (
        <button>Click</button>
        {this.renderItem()}
     );
  } 
}
```

三目运算符：
```tsx
import { QuarkElement, customElement } from "quarkc";
@customElement({ tag: "quark-count" })
export default class Count extends QuarkElement {
   count = 0
   render() {
     return (
        <div>{this.count > 0 ? "More" : "Less"}</div>
     );
  } 
}
```

列表渲染：
```tsx
import { QuarkElement, customElement } from "quarkc";
@customElement({ tag: "quark-count" })
export default class Count extends QuarkElement {
   list = [{key: 1, value: 1}, {key: 2, value: 2},{key: 3, value: 3}]
   render() {
     return (
        <div>
          {
            this.list.map((item) => {
                return <div key={item.key}>{item.value}</div>
            })
          }
        </div>
     );
  } 
}
```
等...
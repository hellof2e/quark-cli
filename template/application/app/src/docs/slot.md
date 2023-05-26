## Slot 插槽
### 默认插槽33

```tsx
import { QuarkElement, customElement } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-count", style })
export default class Count extends QuarkElement {
   render() {
        return (
            <button>
                <slot></slot>
            </button>
        );
  } 
}
```
```html
<quark-count>我是默认插槽</quark-count>
```

### 具名插槽
组件内部给 `slot` 添加 `name`，外部使用时指定 `name`。
```tsx
import { QuarkElement, customElement } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-count", style })
export default class Count extends QuarkElement {
   render() {
        return (
            <button>
                <slot name="abc"></slot>
            </button>
        );
  } 
}
```
```html
<quark-count slot="abc">我是具名插槽</quark-count>
```
### 高级技巧
可以通过 `onslotchange` 事件获取到 `slot` 挂载完成时机。
```tsx
import { QuarkElement, customElement, createRef } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-count", style })
export default class Count extends QuarkElement {
   slotRef = createRef()
   onSlotChange = () => {
    // 此处已获取到 slot 的 dom 实例。
    const { current } = this.ref
   }
   render() {
        return (
            <button>
                <slot name="abc" ref={this.slotRef} onslotchange={this.onSlotChange}></slot>
            </button>
        );
  } 
}
```

更多 `slot` 插槽使用可参考[Slot](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)

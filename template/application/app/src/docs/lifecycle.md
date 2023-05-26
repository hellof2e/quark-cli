## Lifecycle
`Quark` 对外提供了如下几个生命周期：

| 生命周期方法               | 调用时机            |
| ------------------ | ---------------- | 
| `componentDidMount`              | `connectedCallback` 触发时执行，此时组件 `dom` 已渲染完毕         | 
| `shouldComponentUpdate`            | `attributeChangedCallback` 触发时执行，用于控制当前属性变化是否导致组件更新渲染         | 
| `componentDidUpdate`         | `attributeChangedCallback` 触发, `render` 执行后触发，此时可拿到更新后的 `dom` 做相关操作         | 
| `componentWillUnmount`         | `disconnectedCallback` 触发时、`dom` 移除前执行,此时可做副作用移除相关操作     | 

其中 `connectedCallback`、`attributeChangedCallback`、`disconnectedCallback` 均为 `Web Compoents` 组件原生生命周期，可[参考](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)

举个例子:

```tsx

import { QuarkElement,
  property,
  state
  customElement
} from "quarkc";
import style from "./style.css";

@customElement({
  tag: "quark-count",
  style,
})
export default class QuarkCount extends QuarkElement {
  @state()
  count = 0

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    if (propName === "xxx") {
      // 阻止更新
      return false
    }
    return true;
  }

  componentDidUpdate(propName: string, oldValue: string, newValue: string) {
    // 已更新
  }

  componentWillUnmount() {
    // 清除副作用
    clearInterval(this.interval)
  }

  tick() {
    this.count++
  }

  render() {
    return (
     <div>{this.count}</div>
    );
  }
}

```
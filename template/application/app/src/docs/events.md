## Events
### 原生事件
通过 `onXXX` 的方式监听原生事件。
```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "quark-input", style })
export default class Input extends QuarkElement {
   onClick = () => {
       console.log("按钮被点击“)
   }
   onInput = () => {
      console.log("input 事件“)
   }

   render() {
        return (
            <div>
                <button onClick={this.onClick}>Click</button>
                <input onInput={this.onInput}></input>
            </div>
            
        );
  } 
}
```

### 自定义事件
通过 `$emit` 发送事件。
```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "quark-input", style })
export default class Input extends QuarkElement {
   onInput = () => {
      this.$emit("input", {
      detail: {
        value: 'xxx',
      },
    });
   }

   render() {
        return (
            <div>
                <input onInput={this.onInput}></input>
            </div>
            
        );
  } 
}
```

然后在你的自定义元素上绑定事件：
```tsx
/**Vue中*/
<quark-input @input="this.onInput"/>
```
或者
```tsx
/**其它任何框架或者无框架中*/
myInputElement.addEventListener('input', (evt) => {})
```
 通过 `this.$emit` 触发自定义事件，`emit` 的第一个参数为事件名，第二个参数为传递的参数。可通过 `evt.detail` 获取到传递的数据。
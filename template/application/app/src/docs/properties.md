## Reactive properties

### Props

通过 `@property` 为你的组件属性增加响应式特性，`@property` 支持通过参数来标注类型。

```tsx
import { QuarkElement, customElement, property} from "quarkc";
@customElement({ tag: "quark-count" })
export default class Count extends QuarkElement {
   @property({
     type: Number,
   })
   count = 0
   @property({
     type: Boolean,
   })
   disabled = false
   click = () => {
     if(!disabled) {
        console.log('count click')
     }
   }
   render() {
        return (
            <button onClick={this.click}>{count}</button>
        );
  } 
}
```

```html
<quark-count count = "6" disabled />
```
当 `count` 或者 `disabled` 属性变更后，组件将自动更新。

- 由于 `HTML` 元素的属性只能是字符串，因此组件内部的属性需要正确标记类型，这样 `Quark` 底层会帮助做类型转换。

### State

通过 `@state` 为你组件的内部状态增加响应式特性。

```tsx
import { QuarkElement, customElement, property} from "quarkc";
@customElement({ tag: "quark-count" })
export default class Count extends QuarkElement {
   @state()
   count = 0
   click = () => {
     this.count += 1;
   }
   render() {
        return (
            <button onClick={this.click}>{count}</button>
        );
  } 
}
```
点击按钮后，组件将自动更新。



### 高级技巧

针对有些组件需要传递复杂数据类型的场景，可采用如下方式：

组件内部暴露一个 `setColumns` 方法。
```tsx
import { QuarkElement, customElement } from "quarkc";
export interface PickerColumn {
  text: string;
  children: PickerColumn[];
}
@customElement({tag: "quark-cascade-picker"})
class QuarkCascadePicker extends QuarkElement {
  constructor() {
    super();
  }
  columns: PickerColumn[] = [];
  setColumns(columns: PickerColumn[]) {
    if (!columns || columns.length < 1) {
      return;
    }
    this.columns = columns;
    
  }
  render() {
    return (
      /***/
    );
  }
}

export default QuarkCascadePicker;
```

使用时，通过 `ref` 拿到组件的实例，然后调用暴露的 `setColumns` 方法即可完成复杂数据类型的传递。
```tsx
export default () => {
  const pickerRef = useRef(null);
  useEffect(() => {
    const { current: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns([]);
  }, []);
  return (
    <div>
      <quark-cascade-picker
        ref={pickerRef}
      />
    </div>
  );
};
```
[更多使用技巧参考](https://github.com/hellof2e/quark-design/blob/main/packages/quark/src/cascadepicker/index.tsx) 





## Ref

通过 `ref` 获取 `dom` 节点实例。


```jsx
import {
  QuarkElement,
  customElement,
  property,
  state,
  createRef
} from "quarkc";
import style from "./style.css";


class Home extends QuarkElement {
  render() {
    return(
      <div>markdown</div>
    )
  }
}
```
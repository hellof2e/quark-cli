## Styles

### 独立 css 文件方式
`Quark` 支持独立 `css` 文件的方式开发组件，只需要在 `@customElement` 传入 `style` 即可。

```tsx
import { QuarkElement, customElement } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-count", style })
export default class Count extends QuarkElement {
   @property({
     type: Boolean,
   })
   disabled = false
   render() {
        return (
            <button class="quark_count_button">Click</button>
        );
  } 
}
```

```css
/*
* index.css
*/

:host .quark_count_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: unset;
}
:host([disabled]) {
  cursor: not-allowed;
  opacity: 0.68;
  user-select: none;
}
```

你可能需要相关导入 `css` 文件的插件，比如 `rollup` 的 [rollup-plugin-import-css](https://www.npmjs.com/package/rollup-plugin-import-css)

### CSS In JS

直接在组件内部书写样式。

```tsx
import { QuarkElement, customElement } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-count", style })
export default class Count extends QuarkElement {
   @property({
     type: Boolean,
   })
   disabled = false
   style = {
    width: "100%",
    marginTop: "10px"
   }
   render() {
        return (
            <button style={style}>Click</button>
        );
  } 
}
```

推荐使用独立 `css` 文件的方式来开发。

### 主题
可以使用 `css` [自定义属性](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)的方式来自定义主题。
```css
/*
* index.css
*/

:host .quark_count_button {
  color: var(--quark-primary-color, red);
}
:host([disabled]) {
  color: var(--quark-disable-color, gray);
}
```
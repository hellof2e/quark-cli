import { QuarkElement, Fragment, property, customElement } from "quarkc";
import style from "./main.css?inline";

declare global {
  interface HTMLElementTagNameMap {
    "my-component": MyComponent;
  }
}

@customElement({ tag: "my-component", style })
class MyComponent extends QuarkElement {
  @property({ type: Number }) // 外部属性
  count = 0;

  add = () => { // 内部事件
    this.count += 1;
  }

  componentDidMount() { // 生命周期
    console.log('dom loaded!');
    // ...
  }

  render() {
    return (
      <Fragment>
        <div>
          <a href="https://quark.hellobike.com" target="_blank">
            <img src="https://quark-design.hellobike.com/assets/quark-logo.f9a6a307.png" class="logo" alt="quark logo" />
          </a>
        </div>

        <h1>Quark - 为跨技术栈而生</h1>

        <div className="card">
          <button onClick={this.add}>
            count is: {this.count}
          </button>
        </div>
      </Fragment>
    );
  }
}

export default MyComponent;
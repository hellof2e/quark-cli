import { QuarkElement, property, customElement, state,  createRef, } from "quarkc";
// import testHTML, { attributes } from "./readme.md";
import style from "./index.css?inline";

@customElement({ tag: "app-docs", style })
class Home extends QuarkElement {
  @state()
  title = 'docs'


  render() {
    return (
      <h1>{this.title}</h1>
    );
  }
}

export default Home;
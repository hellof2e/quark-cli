import { QuarkElement, customElement, state,  createRef, } from "quarkc"
import style from "./index.less?inline"
import logo from "../../assets/logo.png"

@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  @state()
  msg = 'Welcome to Your Quark App'

  componentDidMount(): void {}

  render() {
    return (
      <>
        <div class="hello">
          <img alt="quark logo" width="150" src={logo} />
          <h1>{ this.msg }</h1>
          <p>
            For a guide and recipes on how to configure / customize this project, <br />
            check out the
            <a href="https://quark.hellobike.com" target="_blank" rel="noopener"> Quarkc documentation</a>.
          </p>
          <h3>Route</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sub">Sub</a></li>
          </ul>
        </div>
      </>
    )
  }
}

export default Home;
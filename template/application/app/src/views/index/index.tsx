import { QuarkElement, Fragment, customElement, property, state } from "quarkc";
import { docs } from "@/config/index";
import style from "./index.css?inline";

// const modulesPage = (import.meta as any).glob(
//   "/src/docs/**/**.md"
// )
@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  @property({
    type: String,
  })
  path = '/src/docs/events.md';

  @state()
  md = '';

  componentDidMount() {
    // modulesPage[this.path]().then((data) => {
    //   this.md = data.default
    // });

    // console.log(modulesPage, modulesPage[this.path](),docs, 11);
    
  }

  render() {
    return (
      <Fragment>
        <aside class="nav-links">
          <ul className="sidebar-links">
            {
              docs.map((item) => {
                return (
                  <section class="sidebar-group depth-0">
                    <p className="sidebar-heading">
                      <span>{item.name}</span>
                    </p>
                    <ul class="sidebar-links sidebar-group-items">
                      {
                        item.children.map(subItem => {
                          return (
                            <li>
                              <a href={`/${subItem.enName}`}>
                                {subItem.name}
                              </a>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </section>
                )
              })
            }
          </ul>
        </aside>
        {/* <div dangerouslySetInnerHTML={{ __html: this.md }}></div> */}
      </Fragment>
    );
  }
}

export default Home;
import QuarkElement, { customElement, property, state } from '@quarkd/core'
import style from './style.css'

@customElement({
  tag: 'my-component',
  style,
})
export default class MyComponent extends QuarkElement {
  @state() counter: number = 0

  @property() atitle: string = ''

  componentDidMount() {
    console.log(this.atitle, 333)
  }

  handleClick = () => {
    this.counter++
  }

  render() {
    return (
      <div>
        <a href='https://quark-design.hellobike.com' target='_blank'>
          <img
            src='https://m.hellobike.com/resource/helloyun/12395/0USLE_quark.png?x-oss-process=image/quality,q_80'
            className='logo vanilla'
            alt='JavaScript logo'
          />
        </a>
        <h1>{this.atitle}</h1>
        <div class='card'>
          <button onClick={this.handleClick} type='button'>
            count is {this.counter}
          </button>
        </div>
        <p class='read-the-docs'>Click on the Quark logo to learn more</p>
      </div>
    )
  }
}

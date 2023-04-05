# Quark CLI

With this CLI, you can use this to create a cross-framework/tech stack component, or perhaps you can package it as an npm package for distribution for others to use.

English | [简体中文](./README.md)

## Installation:

> NOTE: Vite requires Node.js version 14.18+, 16+.

```
npm i -g @quarkd/cli
```

## Create project

With NPX:

```shell
npx create-quark-app
```

## how to use

```tsx
import { QuarkElement, property, customElement } from "quarkc";

@customElement({ tag: "my-component" })
export default class Component extends QuarkElement {
  @property({
    type: Number
  })
  count = 0; // default value

  add = () => {
    this.count += 1;
  }
  
  render() {
    return (
        <button onClick={this.add}>count is: { this.count }</button>
    );
  }
}
```

Use it as a normal html element in various frameworks (React/Vue/Angular/JQ):

```html
<my-component count="0"></my-component>
```

## Documentation

For full documentation, visit [quark.hellobike.com](https://quark.hellobike.com)
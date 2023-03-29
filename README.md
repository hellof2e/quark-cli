# Quark CLI

With this CLI, you can use this to create a cross-framework/tech stack component, or perhaps you can package it as an npm package for distribution for others to use.

English | [简体中文](./README.zh-CN.md)

```tsx
import { QuarkElement, customElement } from 'quarkc'

@customElement({
  tag: 'my-component',
})
class MyComponent extends QuarkElement {
  render() {
    return (
      <div>
        <h1>Hello Quark!</h1>
      </div>
    )
  }
}
```

Use it as a normal html element in various frameworks (React/Vue/Angular/JQ):

```html
<my-component></my-component>
```


## Installation:

> NOTE: Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

```
npm i -g @quarkd/quark-cli
```

## Create project

With NPX:

```shell
npx create-quark
```

Or with NPM:

```shell
npm create quark
```

## Quick Overview

```
cd quark-project
npm install
npm start
```

Then open http://localhost:3000/ to see your app.


<img width="100%" alt="image" src="https://user-images.githubusercontent.com/14307551/201297870-65ced65e-78ee-45f5-8bdf-5823b6cae462.png">


## Examples of usage scenarios

Increase efficiency and reduce cost for your project/team！

Quark-CLI allows you to develop business components across multiple technology stacks/frameworks directly in daily development. For example, a marketing pop-up window of the same style can do:

- Running in front-end projects of different technology stacks (Angular, Vue, React, etc.) at the same time
- Run in different versions of the technology stack at the same time, such as running in Vue2.x, Vue3.x at the same time

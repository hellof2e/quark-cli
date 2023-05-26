// const markdown = require('markdown-it')
import markdown from "markdown-it"
import hljs from "highlight.js"

function highlight(str, lang, style) {
  let link = ''

  if (style) {
    link = '<link class="hljs-style" rel="stylesheet" href="' + style + '"/>'
  }

  if (lang && hljs.getLanguage(lang)) {
    return (
      '<pre class="hljs"><code>' +
      link +
      hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
      '</code></pre>'
    )
  }

  return ''
}

function markdownToVue(source: string, options: MarkdownOptions) {
  const { source: vueSource, imports, components } = extractComponents(source)
  const md = markdownIt({
    html: true,
    highlight: (str, lang) => highlight(str, lang, options.style),
  })
  let templateString = htmlWrapper(md.render(vueSource))
  templateString = templateString.replace(/process.env/g, '<span>process.env</span>')
  templateString = injectCodeExample(templateString)

  return `
<div class="varlet-site-doc">${templateString}</div>
  `
}

function extractComponents(source) {
  const componentRE = /import (.+) from ['"].+['"]/
  const importRE = /import .+ from ['"].+['"]/g
  const vueRE = /```vue((.|\r|\n)*?)```/g
  const imports = []
  const components = []

  console.log();
  
  // 替换```vue....```的内容
  source = source.replace(vueRE, (_, p1) => {
    // 解析出import语句列表
    const partImports = p1.match(importRE)
    const partComponents = partImports?.map((importer) => {
      // 去除换行符
      importer = importer.replace(/(\n|\r)/g, '')
      // 解析出导入的组件名
      const component = importer.replace(componentRE, '$1')
      // 收集导入语句及导入的组件
      !imports.includes(importer) && imports.push(importer)
      !components.includes(component) && components.push(component)
      // 返回使用组件的字符串
      return `<${kebabCase(component)} />`
    })
    return partComponents ? `<div class="varlet-component-preview">${partComponents.join('\n')}</div>` : ''
  })
  return {
    imports,
    components,
    source,
  }
}

export default  function VarletMarkdownVitePlugin(options) {
  return {
    name: 'varlet-markdown-vite-plugin',// 插件名称
    enforce: 'pre',// 插件调用顺序
    // Rollup钩子，转换文件内容
    transform(source, id) { // id:  /Users/xushunfa459/Desktop/0000/quark-app/src/docs/defining.md
      // console.log(source, id, 1);
      if (!/\.md$/.test(id)) {
        return
      }
      console.log(source, id, 2);
      try {
        return markdownToVue(source, options)
      } catch (e) {
        this.error(e)
        return ''
      }
    },
    // Vite钩子，用于热更新
    // async handleHotUpdate(ctx) {
    //   if (!/\.md$/.test(ctx.file)) return
    //   const readSource = ctx.read
    //   ctx.read = async function () {
    //     return markdownToVue(await readSource(), options)
    //   }
    // },
  }
}
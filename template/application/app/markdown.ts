// import markdownIt from 'markdown-it'
import md from 'markdown-it'
import hljs from 'highlight.js'


import path from 'path'
import file from 'fs'

import type { Plugin } from 'vite'


export interface MarkdownOptions {
  style?: string
}

const mdRelationMap = new Map<string, string>();

class MdModule {
  public url: string;
  
  constructor(url: string) {
    this.url = url;
  }
}

function highlight(str: string, lang: string, style?: string) {

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

const _md = new md({
  html: true,
  highlight: (str, lang) => highlight(str, lang),
});
export const transformMarkdown = (mdText: string): string => {
  // 加上一个 class 名为 article-content 的 wrapper，方便我们等下添加样式
  return `
    <section class='md-content'>
      ${_md.render(mdText)}
    </section>
  `;

  // return `@customElement({ test: "quark-badge" })`
}

export function markdown(options: MarkdownOptions): Plugin {
  const tsxRE = /\.tsx$/;
  const markdownRE = /\<g-markdown.*\/\>/g;
  const filePathRE = /(?<=file=("|')).*(?=('|"))/;

  const mdRE = /\.md$/;

  return {
    name: 'vite-plugin-varlet-markdown',

    enforce: 'pre',

    // 功能相当于 webpack 的 loader
    transform(code, id) {
      
      // console.log(/\<g-markdown.*\/\>/g.test(code), 111);

      // if (!tsxRE.test(id) || !markdownRE.test(code)) return code;

      if (!mdRE.test(id)) return;

      try {
      

      const mdList = code.match(markdownRE);

      // const mdList = code.match(/\.md$/g);
      // console.log(mdList, 333);
      
      let transformCode = transformMarkdown(code);
      mdList?.forEach(md => {
        // 匹配 markdown 文件目录
        const fileRelativePaths = md.match(filePathRE);
        if (!fileRelativePaths?.length) return;

        // markdown 文件的相对路径
        const fileRelativePath = fileRelativePaths![0];
        // 找到当前 tsx 的目录
        const fileDir = path.dirname(id);
        // 根据当前 tsx 文件的目录和引入的 markdown 文件相对路径，拼接出 md 文件的绝对路径
        const mdFilePath = path.resolve(fileDir, fileRelativePath);
        // 读取 markdown 文件的内容
        const mdText = file.readFileSync(mdFilePath, 'utf-8');
        // console.log(mdFilePath, mdText, 123);
        
        // 将 g-markdown 标签替换成转换后的 html 文本
        // transformCode = transformCode.replace(md, transformMarkdown(mdText));
        // 记录引入当前 md 文件的 tsx 文件 id
        mdRelationMap.set(mdFilePath, id);
      })

      transformCode = `${transformCode}`

      // transformCode = transformCode.replace(/{/g, `{'${'\u007b'}'}`)
      // transformCode = transformCode.replace(/}/g, `{'${'\u007d'}'}`)
      // transformCode = transformCode.replace(/}/g, '\u007d')
      // transformCode = transformCode.replace(/[\{\}]/g, (match) => `{'${match}'}`)
      
      // console.log(transformCode, 8989);
        // 将转换后的代码返回
        return transformCode;
      } catch (e: any) {
        this.error(e)
        return ''
      }
    },

    // 自定义 HMR 更新时调用
    handleHotUpdate(ctx) {
      const { file, server, modules } = ctx;
      
      // 过滤非 md 文件
      if (path.extname(file) !== '.md') return;
    
      // 找到引入该 md 文件的 tsx 文件
      const relationId = mdRelationMap.get(file) as string;
      // 找到该 tsx 文件的 moduleNode
      const relationModule = [...server.moduleGraph.getModulesByFile(relationId)!][0];
      // 发送 websocket 消息，进行单文件热重载
      server.ws.send({
        type: 'update',
        updates: [
          {
            type: 'js-update',
            path: relationModule.file!,
            acceptedPath: relationModule.file!,
            timestamp: new Date().getTime()
          }
        ]
      });
    
      // 指定需要重新编译的模块
      return [...modules, relationModule]
    },


  }
}

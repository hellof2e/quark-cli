import { defineConfig } from 'vite';
import path from "path";
// import { vitePluginMdToHTML } from 'vite-plugin-md-to-html';
// import VarletMarkdownVitePlugin from "./mdVitePlugin"
// import {copy} from "./copy.ts"
// import { get } from 'lodash-es'

// import Markdown from "vite-plugin-react-markdown";
import {markdown} from "./markdown.ts"
import { vitePluginMdToHTML } from 'vite-plugin-md-to-html';

const { resolve } = path;

export default defineConfig({
  server: {
		port: 2023,
		host: "0.0.0.0",
	},
	resolve: {
		alias: [
			{ find: "@", replacement: resolve(__dirname, "./src") },
		],
	},
  plugins: [
    markdown(),
    vitePluginMdToHTML(),
  ],
  // esbuild: {
  //   jsxFactory: 'h',
  //   jsxFragment: 'Fragment',
  // },
})
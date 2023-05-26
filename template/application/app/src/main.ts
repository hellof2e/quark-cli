import { Router } from '@vaadin/router'
import "@/components/Header"
import "./main.css"

const outlet = document.querySelector('#root')
export const router = new Router(outlet)

const modulesPage = (import.meta as any).glob(
  "/src/docs/**/**.md"
)

const pageRouter = []
for(const path in modulesPage) {
  const name = (/docs\/(.*)\/*.md/.exec(path) as any[])[1]

  console.log(name,  modulesPage[path]);
  pageRouter.push({
    path: `/${name}`,
    action: async () => {  
      const md = await modulesPage[path]();
      const node = document.createElement('div');
      node.innerHTML = md.default;
      return node;
    }
  })
}

router.setRoutes(pageRouter)

router.setRoutes([{
    path: '/',
    component: 'app-home', // custom element name
    action: async () => { await import('./views/index/'); }
  }, {
    path: '/docs',
    component: 'app-docs',
    action: async () => { await import('./views/docs'); }
  },
  ...pageRouter,
]);
// 官网配置
export default {
  header: [
    {
      name: "Introduction",
      cName: "指南",
      type: "guide",
      path: "introduce",
    },
    // {
    //   name: "Components",
    //   cName: "组件",
    //   type: "component",
    //   path: "#/component/button",
    // },
  ],
  docs: [{
    name: "开始",
    enName: "Getting",
    children: [
      {
        name: "简介",
        enName: "docs",
        show: true,
      },
      {
        name: "快速上手",
        enName: "quickstart",
        show: true,
      },
    ],
  }, {
    name: "基础",
    enName: "Essentials",
    children: [
      {
        name: "自定义元素 Defining",
        enName: "defining",
        show: true,
      },
      {
        name: "渲染 Rendering",
        enName: "rendering",
        show: true,
      },
      {
        name: "响应式属性 Reactive properties",
        enName: "properties",
        show: true,
      },
      {
        name: "样式 Styles",
        enName: "styles",
        show: true,
      },
      {
        name: "插槽 Slot",
        enName: "slot",
        show: true,
      },
      {
        name: "生命周期 Lifecycle",
        enName: "lifecycle",
        show: true,
      },
      {
        name: "事件 Events",
        enName: "events",
        show: true,
      },
      {
        name: "引用 Ref",
        enName: "ref",
        show: true,
      },
    ],
  }]
};

// 导入组件
import demo from './src/demo.vue';

// 为组件提供 install 安装方法，供按需引入
demo.install = (Vue) => {
  Vue.component(demo.name, demo);
};

// 默认导出组件
export default demo;

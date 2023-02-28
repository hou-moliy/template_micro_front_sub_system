import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import store from "@/store";
import { constantRoutes, asyncRoutes } from "@/router";
Vue.use(VueRouter);
// 判断是否在微应用试用下
const __qiankun__ = window.__POWERED_BY_QIANKUN__;
let instance = null;
let router = null;
/**
 * name 导出生命周期函数
 */
const microMain = () => {
  return {
    /**
     * name 微应用初始化
     * param {Object} props 主应用下发的props
     * description  bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发
     * description 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等
     */
    async bootstrap (props = {}) {
      // 存储全局使用 props是基座传输过来的值，可进行token等存储使用
      Vue.prototype.$MicroBootstrap = props;
    },
    /**
     * name 实例化微应用
     * param {Object} props 主应用下发的props
     * description 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
     */
    async mount (props) {
      // 注册应用间通信  props是基座传输过来的值，可进行token等存储使用
      console.log(props, "子应用");
      await props.registerGlobalModule(store, props); // 将主应用的状态操作注册到子应用中
      console.log(store.state.user, "子应用");
      // 注册微应用实例化函数
      render(props);
    },
    /**
     * name 微应用卸载/切出
     */
    async unmount () {
      instance.$destroy();
      instance.$el.innerHTML = "";
      instance = null;
    },
    /**
     * name 手动加载微应用触发的生命周期
     * param {Object} props 主应用下发的props
     * description 可选生命周期钩子，仅使用 loadMicroApp 方式手动加载微应用时生效
     */
    async update (props) {
      console.log("update props", props);
    },
  };
};

/**
 * name 子应用实例化函数
 * param {Object} props param0 qiankun将用户添加信息和自带信息整合，通过props传给子应用
 * description {Array} routes 主应用请求获取注册表后，从服务端拿到路由数据
 * description {String} 子应用路由前缀 主应用请求获取注册表后，从服务端拿到路由数据
 */
const render = ({ name, container } = {}) => {
  let routerAll = [];
  if (asyncRoutes !== undefined || asyncRoutes !== null) {
    routerAll = constantRoutes.concat(asyncRoutes);
  } else {
    routerAll = constantRoutes;
  }
  router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    base: __qiankun__ ? name : process.env.VUE_APP_PROJECT_PATH,
    mode: "history", // require service support
    routes: routerAll,
  });
  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
};
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export { microMain, render };

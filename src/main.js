import Vue from "vue";
import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n
import "@/styles/index.scss"; // global css
import App from "./App";
import store from "./store";
import router from "./router";
import "@/icons"; // icon
import "./permission"; // permission control
import "@/icons/iconfont/iconfont.css";
import Directives from "./directives";
Vue.use(Directives);
Vue.use(ElementUI, { locale });
console.log("进入子容器2");
// 微前端配置文件注入
import micro from "@/microApp";
Vue.config.productionTip = false;
const __qiankun__ = window.__POWERED_BY_QIANKUN__;
let bootstrap, mount, unmount = null;
if (__qiankun__) {
  let microApp = micro.microMain();
  bootstrap = microApp.bootstrap;
  unmount = microApp.unmount;
  mount = microApp.mount;
} else {
  new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App),
  });
}
//  导出微应用生命周期
export { bootstrap, mount, unmount };



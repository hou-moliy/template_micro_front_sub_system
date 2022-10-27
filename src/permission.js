import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth";
import defaultSettings from "@/settings";
NProgress.configure({ showSpinner: false });
document.title = defaultSettings.title;
// 白名单
const whiteList = ["/login"];
router.beforeEach((to, from, next) => {
  NProgress.start();
  const hasToken = getToken();
  const rolesLen = store.getters.roles.length;
  if (to.path === "/login") {
    next();
  } else {
    if (hasToken) {
      rolesLen ? next() : getAsyncRoutes(to, next);
    } else {
      whiteList.indexOf(to.path) !== -1 ? next() : next(`/login?redirect=${to.path}`);
    }
  }
});

const getAsyncRoutes = (to, next) => {
  store.dispatch("user/getInfo").then(res => {
    // 拉取userInfo
    const roles = res.roles;
    store.dispatch("permission/generateRoutes", { roles }).then(accessRoutes => {
      // 根据roles权限生成可访问的路由表
      router.addRoutes(accessRoutes); // 动态添加可访问路由表
      next({ ...to, replace: true }); // hack方法 确保addRoutes已完成
    });
  })
    .catch(err => {
      store.dispatch("user/logout").then(() => {
        Message.error(err);
        next({ path: "/" });
      });
    });
};

router.afterEach(() => {
  NProgress.done();
});

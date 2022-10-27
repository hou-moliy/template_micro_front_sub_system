import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 *
 * hidden: true                   如果设置为true，项目将不显示在侧边栏(默认为false)
 * alwaysShow: true               如果设置为true，将始终显示根菜单
 *                                如果没有设置alwaysShow，当item有多个子路由时，
 *                                它将变成嵌套模式，否则不显示根菜单
 * redirect: noRedirect           如果设置了noRedirect则在breadcrumb中没有重定向
 * name:'router-name'             该名称由使用<keep-alive>(必须设置!!)
 * meta : {
    roles: ['admin','editor']    控制页面角色(你可以设置多个角色)
    title: 'title'               显示在侧边栏和面包屑中的名称(建议设置)
    icon: 'svg-name'/'el-icon-x' 显示在侧边栏的图标
    breadcrumb: false            如果设置为false，项目将隐藏在面包屑中(默认为true)
    activeMenu: '/example/list'  如果设置了path，侧边栏会突出显示你设置的路径
  }
 */

/**
 * constantRoutes
 * 没有权限要求的基页
 * 所有角色都可以被访问
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [{
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/dashboard/index"),
    }],
  },
  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "Example", icon: "el-icon-s-help", roles: ["editor"] },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index"),
        meta: { title: "Table", icon: "table", roles: ["editor"] },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree/index"),
        meta: { title: "Tree", icon: "tree", roles: ["editor"] },
      },
    ],
  },
  {
    path: "/form",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/form/index"),
        meta: { title: "Form", icon: "form" },
      },
    ],
  },
  {
    path: "/documentationMenu",
    component: Layout,
    children: [
      {
        path: "documentation",
        component: () => import("@/views/documentation/index"),
        name: "Documentation",
        meta: { title: "Documentation", icon: "documentation", affix: true },
      },
    ],
  },
  {
    path: "/tabMenu",
    component: Layout,
    children: [
      {
        path: "tab",
        component: () => import("@/views/tab/index"),
        name: "Tab",
        meta: { title: "Tab", icon: "tab" },
      },
    ],
  },
  // 404 page 必须放到最后
  { path: "*", redirect: "/404", hidden: true },
];
export const asyncRoutes = [];
const createRouter = () => new Router({
  mode: "history", // require service support
  base: process.env.VUE_APP_PROJECT_PATH || "/",
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

const router = createRouter();

export function resetRouter () {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

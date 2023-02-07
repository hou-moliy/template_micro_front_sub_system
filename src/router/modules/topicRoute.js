// 子应用的菜单
import Layout from "@/layout";
const newTopicManageList = () => import("@/views/newTopicList/newTopicManageList/index");
const newTopicList = () => import("@/views/newTopicList/index");
const formworkWalls = () => import("@/views/newTopicList/formworkWalls/index");
const auditTopic = () => import("@/views/newTopicList/newTopicManageList/audit");
const appRouter = {
  path: "/topicManage",
  component: Layout,
  name: "模块化页面",
  meta: { title: "专题列表", icon: "dashboard" },
  children: [
    {
      path: "newTopicManageList",
      name: "专题列表",
      component: newTopicManageList,
      meta: { title: "专题列表", icon: "dashboard" },
    },
    {
      path: "index",
      name: "模块化详情",
      hidden: true,
      component: newTopicList,
      meta: { title: "模块化详情", icon: "dashboard" },
    },
    {
      path: "formworkWalls/index",
      name: "模板墙",
      component: formworkWalls,
      meta: { title: "模板墙", icon: "dashboard" },
    },
    {
      path: "newTopicManageAudit",
      name: "专题审核",
      component: auditTopic,
      meta: { title: "专题审核", icon: "dashboard" },
    },
  ],
};

export default appRouter;

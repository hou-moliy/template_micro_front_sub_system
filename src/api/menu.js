import request from "./request";
const baseURL = process.env.VUE_APP_BASE_API || "/admin";

// 获取路由
export const getRouters = () => {
  return request({
    url: "/common/getRouters",
    method: "get",
    baseURL
  });
};
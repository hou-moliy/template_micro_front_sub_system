import request from "./request";
const baseURL = process.env.VUE_APP_BASE_API || "/admin";

// 登录方法
export function login (username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid,
  };
  return request({
    url: "/common/login",
    method: "post",
    data: data,
    baseURL
  });
}

// 获取用户详细信息
export function getInfo () {
  return request({
    url: "/common/getInfo",
    method: "get",
    baseURL
  });
}
// 退出方法
export function logout () {
  return request({
    url: "/common/logout",
    method: "post",
    baseURL
  });
}

// 获取验证码
export function getCodeImg () {
  return request({
    url: "/common/captchaImage",
    method: "get",
    baseURL
  });
}

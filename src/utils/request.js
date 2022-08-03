// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import { Message } from "element-ui";
import store from "@/store";
import axios from "axios";
import router from "@/router";
import { getTokenTime } from "./auth";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}); // 创建一个axios的实例

//判断token是否过期
function isTimeout() {
  //当前时间
  const currentTime = Date.now();
  //存token时的时间戳
  const tokenTime = getTokenTime();
  //规定过期时间（两小时）
  // const timeout = 2 * 60 * 60 * 1000;
  const timeout = 3 * 1000;
  return currentTime - tokenTime > timeout;
}

service.interceptors.request.use(async (config) => {
  // 当前请求的配置
  // console.log(config)
  if (store.state.user.token.token) {
    if (isTimeout()) {
      await store.dispatch("user/logout"); //退出登录
      router.push("/login"); //跳到登录页面
      return Promise.reject(new Error("登录过期"));
    } else {
      config.headers.Authorization = store.state.user.token.token;
    }
  }
  return config;
}); // 请求拦截器
service.interceptors.response.use(
  (res) => {
    return res;
  },
  async function (error) {
    if (error?.response?.status === 401) {
      Message.error("登录过期");
      await store.dispatch("user/logout"); //退出登录
      router.push("/login"); //跳到登录页面
    } else {
      Message.error(error.message);
    }
    return Promise.reject(error);
  }
);
// ) // 响应拦截器
export default service; // 导出axios实例

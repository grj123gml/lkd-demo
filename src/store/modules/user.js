import { login, getUserInfo } from "@/api/user";
import router from "@/router";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    token: "",
    clientToken: "",
    userInfo: {},
  },
  mutations: {
    setClientToken(state, payload) {
      state.clientToken = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    async getToken(context, obj) {
      const res = await login(
        obj.username,
        obj.password,
        obj.code,
        context.state.clientToken
      );
      console.log(res);
      context.commit("setToken", res.data);
      if (!res.data.success) {
        Message({
          showClose: true,
          message: "登录失败",
          type: "error",
        });
      } else {
        Message({
          showClose: true,
          message: "恭喜你，登录成功",
          type: "success",
        });
        router.push("/home");
      }
    },
    async getUserInfo(context) {
      const userInfo = await getUserInfo(context.state.token.userId);
      console.log(userInfo);
      context.commit("setUserInfo", userInfo.data);
    },
    // 退出
    logout(context) {
      context.commit("setToken", "");
      context.commit("setUserInfo", "");
    },
  },
};

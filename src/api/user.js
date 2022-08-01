import request from "@/utils/request";

/**
 * 图片验证码请求
 * @param {String} clientToken 请求随机数
 * @returns
 */
export function getVerificationCode(clientToken) {
  return request({
    method: "GET",
    url: `/api/user-service/user/imageCode/${clientToken}`,
    responseType: "blob",
  });
}
/**
 *登录接口
 * @param {Object} data username password yanzhengma
 * @returns promise
 */
export function login(loginName, password, code, clientToken) {
  return request({
    url: "/api/user-service/user/login",
    method: "post",
    data: {
      loginName,
      password,
      code,
      clientToken,
      loginType: 0,
    },
  });
}

import request from "@/utils/request";

/**
 * 获取搜索工单列表
 */
export function getSearchListApi() {
  return request({
    url: "/api/task-service/task/search",
    method: "GET",
  });
}

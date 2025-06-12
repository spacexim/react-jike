import { request } from "@/utils";

// 1. 获取频道列表
export function getChannelAPI() {
  return request({
    url: "/channels",
    method: "GET",
  });
}

export function createArticleAPI(data) {
  return request({
    url: "/mp/articles?draft=false",
    method: "POST",
    data,
  });
}

//* 这个文件用来管理整个项目的所有接口
import http from "./http";

// 首页轮播图接口
export const IndexBannerListApi = (params) => http.get("/home/banner", params);
// 首页推荐商品接口
export const RecommendList = (data) => http.post("/home/recommend", data);
// 分类的数据接口
export const ClassifyList = (data) => http.post("/classify", data);
// 获取短信验证码接口
export const IdentifyingCode = (data) => http.post("/register/getCode", data);
// 详情页数据接口
export const DetailList = (data) => http.post("/detail", data);

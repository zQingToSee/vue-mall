import { IndexBannerListApi } from "../../utils/api";
import { RecommendList } from "../../utils/api";

const homemodule = {
  namespaced: true,
  state: {
    imgList: [],
    shopList: [],
  },
  mutations: {
    changeData(state, payload) {
      state.imgList = payload.result.list;
    },
    changePost(state, payload) {
      state.shopList = payload.result.list;
    },
  },
  actions: {
    async getData({ commit }) {
      const res = await IndexBannerListApi();
      if (res.status === "0") {
        commit("changeData", res);
      } else {
        console.log("请求出错了");
      }
    },
    async getPost({ commit }) {
      const res = await RecommendList();
      if (res.status === "0") {
        commit("changePost", res);
      } else {
        console.log("请求出错了");
      }
    },
  },
  getters: {},
};

export default homemodule;

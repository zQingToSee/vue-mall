import { DetailList } from "../../utils/api";

const detailmodule = {
  namespaced: true,
  state: {
    imgList: [],
    detailList: [],
  },
  mutations: {
    changeData(state, payload) {
      console.log(payload.result);
      state.imgList = payload.result.imgArr;
      state.detailList = payload.result;
    },
  },
  actions: {
    async getData({ commit }, payload) {
      const res = await DetailList({ productId: payload.productId });
      commit("changeData", res);
    },
  },
};

export default detailmodule;

import { DetailList } from "../../utils/api";

const detailmodule = {
  namespaced: true,
  state: {
    imgList: [],
  },
  mutations: {
    changeData(state, payload) {
      console.log(payload);
      state.imgList = payload.result.imgArr;
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

import { ClassifyList } from "../../utils/api";

const classifymodule = {
  namespaced: true,
  state: {
    classList: [],
  },
  mutations: {
    changeData(state, payload) {
      state.classList = payload.result;
    },
  },
  actions: {
    async getData({ commit }, payload) {
      const res = await ClassifyList({ type: payload });
      commit("changeData", res);
    },
  },
};

export default classifymodule;

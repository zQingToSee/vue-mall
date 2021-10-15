import { IdentifyingCode } from "../../utils/api";

const loginmodule = {
  namespaced: true,
  state: {},
  mutations: {
    changeCode(state, payload) {
      console.log(payload.msg);
      if (payload.status === 0) {
        localStorage.setItem("token", "ok");
      }
    },
  },
  actions: {
    async getCode({ commit }, payload) {
      const res = await IdentifyingCode({
        phone: payload.phone,
        templateId: payload.templateId,
      });
      commit("changeCode", res);
    },
  },
};

export default loginmodule;

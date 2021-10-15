import Vue from "vue";
import Vuex from "vuex";

import homemodule from "./home";
import classifymodule from "./classify";
import loginmodule from "./login";
import detailmodule from "./detail";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home: homemodule,
    classify: classifymodule,
    login: loginmodule,
    detail: detailmodule,
  },
});

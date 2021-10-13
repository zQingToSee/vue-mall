import Vue from "vue";
import Vuex from "vuex";

import homemodule from "./home";
import classifymodule from "./classify";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home: homemodule,
    classify: classifymodule,
  },
});

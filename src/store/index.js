import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import { getDatesArray } from "@/helper.js";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    selectedDate: "20201206",
    dates: null,
    result: null
  },
  mutations: {
    SET_CURRENT_DATE(state, currentDate) {
      state.selectedDate = currentDate;
    },
    SET_RESULT(state, result) {
      state.result = result;
    },
    SET_DATES(state, dates) {
      state.dates = dates;
    },
    SET_SELECTED_DATA(state, selected) {
      state.selectedDate = selected;
    }
  },
  actions: {
    setSelectedDate({ commit }, currentDate) {
      commit("SET_CURRENT_DATE", currentDate);
    },
    fetchResult({ commit }) {
      axios
        .get("https://run.mocky.io/v3/c47ddac2-6507-4a59-8994-90dee560a619")
        .then(result => {
          commit("SET_RESULT", result.data);
          const { selectedDate, dates } = getDatesArray(result.data);
          commit("SET_SELECTED_DATA", selectedDate);
          commit("SET_DATES", dates);
        });
    }
  },
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      table: {
        value: [],
        lastID: Number
      }
    };
  },
  mutations: {
    setTable(state, table) {
      state.table = table;
    }
  },
  actions: {
    getTable({ commit }) {
      axios
        .get("http://harvest.krasrm.com/api/get-table")
        .then(response =>
          commit("setTable", {
            lastID: response.data.lastID,
            value: response.data.table
          })
        )
        .catch(e => alert("error get table: ", e.toString()));
    }
  }
});

import axios from "axios";

const state = {
  table: {
    value: [],
    lastID: Number
  }
};

const getters = {};

const actions = {
  getTable({ commit }) {
    axios
      .get("http://harvest.krasrm.com/api/get-table")
      .then(response =>
        commit("setTable", {
          lastID: response.data.lastID,
          value: response.data.table
        })
      )
      .catch(e => alert("error get table: " + e.toString()));
  }
};

const mutations = {
  setTable(state, table) {
    state.table = table;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

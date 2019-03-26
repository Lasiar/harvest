import axios from "axios";

const state = {
  table: {
    value: [],
    lastID: Number
  }
};

const getters = {
  getUniqCity: state => {
    return [...new Set(state.table.value.map(item => item.city))].map(city => {
      return {
        count: state.table.value.filter(item => item.city === city).length,
        city: city
      };
    });
  }
};

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
  },
  countCity(payload) {
    return this.state.table.table.value.map(item => item[payload]).length;
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

import Vue from "vue";
import Vuex from "vuex";
import {name} from "faker";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
    fullNames: state =>
      state.users.map(({firstName, lastName}) => `${firstName} ${lastName}`),
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    addUser(state, payload) {
      state.users.push(payload);
    },
    removeUser(state, payload) {
      state.users.splice(payload, 1);
    },
  },
  actions: {
    create({commit}) {
      commit("addUser", {
        firstName: name.firstName(),
        lastName: name.lastName(),
      });
    },
    getList({commit, dispatch}) {
      commit("setUsers", []);
      dispatch("create");
      dispatch("create");
      dispatch("create");
    },
    remove({commit}, payload) {
      commit("removeUser", payload);
    },
  },
});

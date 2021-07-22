import Vue from "vue";
import Vuex from "vuex";
import VueSession from "vue-session/index.esm";
Vue.use(VueSession)

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test:null,
    fortniteReviews:null,
    isLoggedIn: false,
    username: null,
    name: null,
    role: "",
  },
  mutations: {
    setFortniteReviews(state, fortniteReviews){
      state.fortniteReviews = fortniteReviews;
    },
    setTest(state, test){
      state.test = test;
    },
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setName(state, name) {
      state.name = name;
    },
    setRole(state, role) {
      state.role = role;
    },  },
  actions: {
    setFortnite({commit}, payload){
      commit("setFortniteReviews", payload.fortniteReviews)
      commit("setTest", payload.test)
      commit("setUsername",payload.username)
    },
    setLoggedInUser({ commit }, payload) {

      commit("setIsLoggedIn",payload.isLoggedIn)
      commit("setUsername",payload.username)
      commit("setName",payload.name)
      commit("setRole",payload.role)

    },
    clearUser({ commit }){
      commit("setIsLoggedIn", false)
      commit("setUsername",null)
      commit("setName",null)
      commit("setRole","")
    },
  },
  modules: {},
});
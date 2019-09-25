import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    showPhonePopup: false,
    moreTreshhold: false,
    windowWidth: null,
    windowHeight: null
  },
  mutations: {
    openDrawer (state) {
      state.drawer = !state.drawer;
    },
    togglePhonePopup (state) {
      state.showPhonePopup = !state.showPhonePopup;
    },
    moreTreshhold (state, payload) {
      state.moreTreshhold = payload;
    },
    windowSize (state, payload) {
      state.windowWidth = payload.width;
      state.windowHeight = payload.height;
    }
  },
  actions: {

  },
  getters: {
  }
});

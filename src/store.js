import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    listsInit(state, payload) {
      if (payload) {
        state.lists = payload;
      }
    },
    listsAdd(state, payload) {
      state.lists.push(payload);
    },
    listSearch(state, payload) {
      console.log(payload);

      // var arr = state.lists.map(item => {
      //   if (!item.content.indexOf(payload.content)) {
      //     return item;
      //   }
      // });

      // console.log(arr);

      const arr = [];
      state.lists.forEach(item => {
        if (!item.content.indexOf(payload.content)) {
          arr.push(item);
        }
      });
      state.lists = arr;
    }
  },
  actions: {}
});

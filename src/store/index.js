import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blog_id: '',
    blog_contents: '1'
  },
  mutations: {
    getBlogContents(state, contents){
      state.blog_contents = contents
    }
  },
  actions: {
    getBlogContents({ commit }, id ) {
      axios({
        url: "api/getBlogContents",
        method: "get",
        params: {
            id: id,
        }
      }).then(res => {
        if (res != "") {
          commit('getBlogContents', res.data)
        }
      });
    }
  },
  modules: {
  }
})

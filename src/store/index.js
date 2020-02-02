import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import VueXAlong from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_blog_id: '',
    blog_contents: '1',
    blog_title: '',
    token: ''
  },
  mutations: {
    set_current_blig_id(state, id) {
      state.current_blog_id = id
    },
    set_token(state, token) {
      state.token = token
    },
  },
  actions: {
    getBlogContents({ commit }, id) {
      var url = "api/getBlogContents/" + id;
      axios({
        url: url,
        method: "get",
      }).then(res => {
        if (res.data.code == 1) {
          commit('setBlogContents', res.data.data)
        }
      });
    }
  },
  modules: {
  },
  plugins: [
    VueXAlong({    //  vuex 插件 保持刷新不失效
      name: 'along',     //存放在localStroage或者sessionStroage 中的名字
      local: false,      //是否存放在local中  false 不存放 如果存放按照下面session的配置配
      session: { list: [], isFilter: true } //如果值不为false 那么可以传递对象 其中 当isFilter设置为true时， list 数组中的值就会被过滤调,这些值不会存放在seesion或者local中
    })
  ]
})


import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
// 创建一个对象 本地存储
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    ipArea: '',
    // 北京 城市id
    cityId: 'AREA|88cff55c-aaa4-e2e0'
  },
  getters: {
  },
  // setArea (state, payload) {
  //   state.area = payload
  // },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setIpArea (state, payload) {
      state.ipArea = payload
    },
    setCityId (state, payload) {
      state.cityId = payload
    }
  },
  actions: {
  },
  modules: {
  },
  // 本地存储1
  plugins: [vuexLocal.plugin]
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addFormArr: {},
    editFromArr: {}
  },
  mutations: {
    setAddForm(state, addArr) {
      state.addFormArr = addArr
      // console.log(state.addFormArr)
    },
    setEditForm(state, row) {
      state.editFromArr = row
      // console.log(state.editFromArr)
    }
  },
  actions: {},
  modules: {}
})

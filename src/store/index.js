import Vue from 'vue'
import Vuex from 'vuex'
import todo from './todo'
import messages from './messages'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: [
    todo,
    messages
  ]
})

export default store

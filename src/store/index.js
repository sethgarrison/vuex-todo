import Vue from 'vue'
import Vuex from 'vuex'
// import stores from individual files
import todo from './todo'
import messages from './messages'

// wire up vue to use vuex
Vue.use(Vuex)

// create the Vuex store instance - attaching individual stores as modules
const store = new Vuex.Store({
  modules: [
    todo,
    messages
  ]
})

// export the store instance
export default store

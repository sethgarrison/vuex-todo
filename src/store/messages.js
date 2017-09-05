// LOCAL ACTION TYPES
export const MESSAGE_SHOW = 'MESSAGE_SHOW'
export const MESSAGE_HIDE = 'MESSAGE_HIDE'

// Initial state
const state = {
  message: ''
}

// getters accessed by components
const getters = {
  message: state => state.message
}

// mutations
const mutations = {
  [MESSAGE_SHOW] (state, msg) {
    state.message = msg
  },
  [MESSAGE_HIDE] () {
    state.message = ''
  }
}

// the messages store
export default {
  state,
  getters,
  mutations
}

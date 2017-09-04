// IMPORT ACTION TYPES
import {ADD_TODO, LOAD_TODOS, TODO_REPLACE, TODO_DELETE} from './todo'

// LOCAL ACTION TYPES
export const MESSAGE_SHOW = 'MESSAGE_SHOW'
export const MESSAGE_HIDE = 'MESSAGE_HIDE'

const state = {
  message: ''
}

const getters = {
  message: state => state.message
}

const mutations = {
  [MESSAGE_SHOW] (state, msg) {
    state.message = msg
  },
  [ADD_TODO] (state) {
    state.message = ''
  },
  [LOAD_TODOS] (state) {
    state.message = ''
  },
  [TODO_REPLACE] (state) {
    state.message = ''
  },
  [TODO_DELETE] (state) {
    state.message = ''
  },
  [MESSAGE_HIDE] () {
    state.message = ''
  }
}

export default {
  state,
  getters,
  mutations
}

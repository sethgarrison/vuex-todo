// IMPORTED API METHODS
import {getTodos, createTodo, updateTodo, destroyTodo} from '@/api/todoService'
import {MESSAGE_SHOW, MESSAGE_HIDE} from './messages'

// LOCAL AND EXPORTED ACTION TYPES
export const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const LOAD_TODOS = 'LOAD_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const TODO_REPLACE = 'TODO_REPLACE'
export const TODO_DELETE = 'TODO_DELETE'

const state = {
  todos: [],
  currentTodo: ''
}

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(t => !t.isComplete)
    case 'completed':
      return todos.filter(t => t.isComplete)
    default:
      return todos
  }
}

const getters = {
  todos: state => state.todos,
  currentTodo: state => state.currentTodo
}

const actions = {
  fetchTodos ({ commit }) {
    commit(MESSAGE_SHOW, 'Loading Todos')
    getTodos()
      .then(res => commit(LOAD_TODOS, res.data))
      .then(res => commit(MESSAGE_HIDE))
  },
  saveTodo ({ commit }, name) {
    commit(MESSAGE_SHOW, 'Saving Todo')
    createTodo(name)
      .then(res => commit(ADD_TODO, res.data))
      .then(res => commit(MESSAGE_HIDE))
  },
  toggleTodo ({ commit }, id) {
    commit(MESSAGE_SHOW, 'Saving Todo')
    const todo = state.todos.find(t => t.id === id)
    const toggled = {...todo, isComplete: !todo.isComplete}
    updateTodo(toggled)
      .then(res => commit(TODO_REPLACE, res.data))
      .then(res => commit(MESSAGE_HIDE))
  },
  deleteTodo ({ commit }, id) {
    commit(MESSAGE_SHOW, 'Deleting Todo')
    destroyTodo(id)
      .then(res => commit(TODO_DELETE, id))
      .then(res => commit(MESSAGE_HIDE))
  }
}

const mutations = {
  [LOAD_TODOS] (state, todos) {
    state.todos = [...state.todos, ...todos]
  },
  [ADD_TODO] (state, todo) {
    state.todos = [...state.todos, todo]
  },
  [TODO_REPLACE] (state, todo) {
    state.todos = state.todos.map(t => {
      if (t.id === todo.id) {
        return {...t, isComplete: todo.isComplete}
      }
      return t
    })
  },
  [TODO_DELETE] (state, id) {
    state.todos = state.todos.filter(t => t.id !== id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

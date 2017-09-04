<template>
  <form @submit.prevent="addTodo">
    <input v-model="text">
    <button>Add Todo</button>
  </form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'addTodo',
    data () {
      return {
        text: ''
      }
    },
    methods: {
      ...mapActions([
        'saveTodo'
      ]),
      addTodo () {
        this.saveTodo(this.text)
        this.text = ''
      }
    }
  }
</script>

<template>
  <div>
    <h1>My Todo List</h1>

    <ul>
      <todo
        v-for="todo in visibleTodos"
        :todo-item="todo"
        @deleteTodo="deleteTodo"
        @toggleTodo="toggleTodo"
        :key="todo.id">
      </todo>
    </ul>

    <p v-if="!todos.length">
      You don't have anything todo? I don't believe you.
      Go ahead, add something... I dare you.
    </p>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { getVisibleTodos } from '@/store/todo'
  import todo from '@/components/todo'

  export default {
    name: 'todoList',
    props: ['filter'],
    components: {
      todo
    },
    created () {
      this.fetchTodos()
    },
    computed: {
      ...mapGetters([
        'todos'
      ]),
      visibleTodos () {
        return getVisibleTodos(this.todos, this.filter)
      }
    },
    methods: {
      ...mapActions([
        'toggleTodo',
        'deleteTodo',
        'fetchTodos'
      ])
    }
  }
</script>

<style scoped>

  ul, li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

</style>

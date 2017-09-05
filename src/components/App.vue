<template>
  <div class="hello">
      <message></message>
      <add-todo></add-todo>
      <!--todo list takes one binding which is the active filter (fetched from route query)-->
      <todo-list :filter="activeFilter"></todo-list>
      <my-footer></my-footer>
  </div>
</template>

<script>
  import todoList from '@/components/TodoList'
  import addTodo from '@/components/AddTodo'
  import message from '@/components/Message'
  import myFooter from '@/components/Footer'

  export default {
    name: 'hello',
    components: {
      todoList,
      addTodo,
      message,
      myFooter
    },
    computed: {
      // computed property to return the state paramater which filters the todo list
      activeFilter () {
        return this.$route.query.filter
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

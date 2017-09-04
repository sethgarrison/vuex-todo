<template>
  <li>
    <button @click="$emit('deleteTodo', todoItem.id)">X</button>
    <input type="checkbox"
           @change="$emit('toggleTodo', todoItem.id)"
           :checked="todoItem.isComplete">
    <p>{{todoItem.name}}</p>
  </li>
</template>

<script>
  export default {
    props: ['todoItem']
  }
</script>

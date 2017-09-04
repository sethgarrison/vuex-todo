<template>
  <div v-if="message" v-text="message">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'message',
    computed: mapGetters([
      'message'
    ])
  }
</script>

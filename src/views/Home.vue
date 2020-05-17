<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TodoList
  }
}
</script>

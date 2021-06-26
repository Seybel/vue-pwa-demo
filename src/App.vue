<template>
  <div id="app">
    <Users/>
  </div>
</template>

<script>
import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {
    Users
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

body {
    font-family: 'Lato', sans-serif;
    background: #eeeeee;
}

</style>

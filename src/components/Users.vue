<template>
    <div>
      <h1>Our Users</h1>

      <ul v-for="user in users" :key="user.id">
          <li>
              {{ user.name }}
              <span> {{ user.email }} </span>
          </li>

      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      users: {}
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      try {
        // fetch users
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const res = await data.json()
        this.users = res
      } catch (err) {
        console.log(`API:- ${err}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    background: #fff;
    padding: 1em;
    box-shadow: 1px 1px rgba(0,0,0,.1);
    margin-bottom: 10px;
    font-weight: bold;
}

li span {
    display: block;
    font-weight: normal;
    font-size: .8em;
}
</style>

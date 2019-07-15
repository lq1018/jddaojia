<template>
    <div class="balance-wrap">
      <button @click="add">+</button>
      <p>余额：{{count}}</p>
      <button @click="red">-</button>
    </div>
</template>

<script>
  import store1 from './store'
  export default {
    name: 'index',
    computed: {
      count () {
        return store1.state.balance
      }
    },
    methods: {
      add () {
        store1.commit('add')
      },
      red () {
        store1.commit('red')
      }
    }
  }
</script>

<style scoped>

</style>

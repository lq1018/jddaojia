<template>
  <div class="wrap">

  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        num: 1
      }
    },
    methods: {
      numCompute: function (number) {
        if (this.num === 1 && number === -1) return
        this.num += Number(number)
        this.$emit('counteService', this.num)
      }
    },
    onShow () {
      wx.setNavigationBarTitle({title: '提交订单'})
    }
  }
</script>

<style scoped>


</style>

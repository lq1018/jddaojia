<template>
  <div class="wrap">
    <ul>
      <li class="ub" @click="numCompute(-1)">-</li>
      <li class="number">{{num}}</li>
      <li class="ub" @click="numCompute(1)">+</li>
    </ul>
  </div>
</template>

<script>
  export default {
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
    }
  }
</script>

<style scoped>
  .wrap ul{
    display: flex;
  }
  .wrap ul .ub{
    padding: 3px 8px;
    border-top: #d3d3d3;
    border-bottom: #d3d3d3;
    color: #039EDF;
  }
  .number{
    padding: 3px 15px;
    border-left: #d3d3d3;
    border-right: #d3d3d3;
  }
</style>


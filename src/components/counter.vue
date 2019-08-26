<template>
  <div class="wrap">
    <ul>
      <li class="ub" @click="numCompute(-1)">-</li>
      <li class="number">{{sum}}</li>
      <li class="ub" @click="numCompute(1)">+</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['number1'],
    data () {
      return {
        num: 0
      }
    },
    methods: {
      numCompute: function (number) {
        if (this.num === 0 && number === -1) return
        this.num += Number(number)
        if (number < 0) {
          this.$emit('counterService', this.num)
        } else {
          this.$emit('counterService', this.num)
        }
      }
    },
    computed: {
      sum () {
        if (this.number1 || this.number1 === 0) {
          this.num = this.number1
        }
        return this.num
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


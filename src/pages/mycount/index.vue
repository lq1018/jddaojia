<template>
  <div>
    <p v-for="(item,index) in myinfo" :key="index">{{item.name}}: <span>{{item.value}}</span></p>
    <p>我的余额： <span>{{balance}}</span></p>
    <a href="/pages/balance/main" class="balance">修改你的余额</a>
  </div>
</template>
<script>
  import store1 from '../balance/store'
  export default {
    name: 'index',
    data () {
      return {
        myinfo: [{
          name: '昵称',
          value: 'lq122'
        },
        {
          name: '账号',
          value: '1229229122'
        },
        {
          name: '性别',
          value: '男'
        }
        ]
      }
    },
    computed: {
      balance () {
        return store1.state.balance
      }
    }
  }
</script>

<style scoped>
p{
  line-height: 30px;
  color: #7ffdff;
  padding-bottom:3px;
  border-bottom: 1px solid #cccccc;
}
</style>

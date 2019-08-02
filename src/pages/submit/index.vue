<template>
  <div class="wrap">
    账号： <input type="text" v-model="counter">
    密码： <input type="password" v-model="pwd">
    <button class="btn" @click.stop="login">登录</button>
  </div>
</template>

<script>
  const app = getApp()
  export default {
    name: 'index',
    data () {
      return {
        counter: null,
        pwd: null
      }
    },
    methods: {
      login: function () {
        const _this = this
        wx.request({
          url: 'http://192.168.1.21:8070/WebHandler/LiuUserHandler.ashx',
          method: 'POST',
          data: {
            type: 'login',
            counter: _this.counter,
            pwd: _this.pwd
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            app.globalData.user = res.data.user
            if (res.data.result_state === '2') {
              wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 2000,
                success (res) {
                  console.log(res)
                  wx.switchTab({
                    url: '/pages/mycount/main',
                    success (res) {
                      console.log('成功')
                    },
                    fail () {
                      console.log('失败')
                    }
                  })
                }
              })
            }
          },
          fail: function (err) {
            console.log(err + 'fji')
          }

        })
      }
    },
    onShow () {
      wx.setNavigationBarTitle({title: '提交订单'})
    }
  }
</script>

<style scoped>
.wrap{
  width: 80%;
  margin: 30px auto;
}
  .wrap input{
    height: 60px;
    outline: none;
    border: 1px solid #039EDF;
    border-radius: 8px;
  }

</style>

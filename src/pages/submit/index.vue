<template>
  <div class="wrap">
    <div class="content">
      <div class="inpBox account">
        账号： <input type="text" v-model="counter">
      </div>
      <div class="inpBox pwd">
        密码： <input type="password" v-model="pwd">
      </div>
      <button class="btn" @click.stop="login">登录</button>
      <div class="goRegister" @click="$nextPage('/pages/Rejister/main')">还没账号？去注册</div>
    </div>
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
            let user = res.data.user
            user.Telephone = _this.$entryTel(user.Telephone)
            app.globalData.$user = user
            if (res.data.result_state === '2') {
              wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 2000,
                success (res) {
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
      wx.setNavigationBarTitle({title: '登录界面'})
    }
  }
</script>

<style scoped>
  .content {
    width: 80%;
    margin: 30px auto 0;
  }
  .content .inpBox{
    display: flex;
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .inpBox input {
    width: 80%;
    height: 40px;
    border:1px solid #5cb154;
    border-radius: 10px;
  }
  .btn {
    background-color: #5cb154;
    color: #ffffff;
    border-radius: 10px;
  }
  .goRegister {
    text-align: center;
    color: #3091f2;
    margin-top: 20px;
  }

</style>

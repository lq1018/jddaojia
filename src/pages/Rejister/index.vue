<template>
  <div class="wrap">
    <div class="content">
      <div class="inpBox account">
        账号： <input type="text" v-model="counter">
      </div>
      <div class="inpBox">
        手机：<input type="text" v-model="telephone">
      </div>
      <div class="inpBox pwd">
        密码： <input type="password" v-model="pwd">
      </div>
      <button class="btn" @click.stop="login">注册</button>
      <div class="goRegister" @click="$nextPage('/pages/submit/main')">已有账号？去登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        counter: null,
        pwd: null,
        telephone: null
      }
    },
    methods: {
      login: function () {
        const _this = this
        wx.request({
          url: 'http://192.168.1.21:8070/WebHandler/LiuUserHandler.ashx',
          method: 'POST',
          data: {
            type: 'register',
            counter: _this.counter,
            pwd: _this.pwd,
            telephone: _this.telephone
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
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
      wx.setNavigationBarTitle({title: '注册界面'})
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
<

<template>
    <div class="wrap">
      <div class="logo">
        <img src="/static/images/jddjLogo.jpg" alt="">
      </div>
      <div class="content">
        <div class="log login" @click="$nextPage('/pages/submit/main')">登录/注册</div>
        <div class="log wchatLogin">微信手机号登录快捷登录</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    onShow () {
      wx.setNavigationBarTitle({title: '登录'})
    }
  }
</script>

<style scoped>
.logo {
  width: 200px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img {
  width: 96px;
  height: 60px;
}
  .content {
    padding: 0 10px;
  }
  .content .log {
    margin: 0 auto 10px;
    width: 90%;
    line-height: 40px;
    border-radius: 20px;
    text-align: center;
  }
  .content .log.login {
    background-color: #e3e8ee;
    color: #000;
  }
  .content .log.wchatLogin {
    background-color: #5cb154;
    color: #ffffff;
  }
</style>

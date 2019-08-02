<template>
<div class="wrap">
  <div class="user">
    <div class="userImg">
      <img :src="userInfo.avatarUrl" v-if="isLogin ===true" alt="头像">
      <img src="/static/images/userIcon.png" v-if="isLogin ===false" alt="头像">
    </div>
    <div class="login" v-if="isLogin===true">
      <div class="userName">{{userInfo.nickName}}</div>
      <div class="userSex">{{userInfo.gender}}</div>
    </div>
    <div class="login" v-if="isLogin===false">
      <button class="loginBtn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGetUserInfo">登录</button>
    </div>
    <div class="exit">
      <div class="exits" @click="exitLogin">退出</div>
    </div>
  </div>
  <div class="countInfo">
     <ul class="countList">
       <li @click="$nextPage('/pages/newAddress/main')">
         <div class="title">收货地址</div>
         <div class="detail">
           <img src="/static/images/right.png" alt="">
         </div>
       </li>
     </ul>
  </div>
</div>
</template>
<script>
  export default {
    name: 'index',
    computed: {
      isLogin () {
        return this.$store.state.isLogin
      },
      userInfo () {
        return this.$store.state.userInfo
      }
    },
    data () {
      return {
        user: null
      }
    },
    mounted (e) {
      console.log(this.user)
    },
    methods: {
      onGetUserInfo: function (e) {
        this.$store.commit('updateIsLogin', true)
        this.$store.commit('updateUser', e.mp.detail.userInfo)
      },
      exitLogin: function () {
        this.$store.commit('updateIsLogin', false)
        this.$store.commit('cleanUserInfo')
      }
    },
    onLoad () {
      this.user = getApp().globalData.user
    }
  }
</script>

<style scoped>
.user{
  height: 80px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
  .user .userImg img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid #5cb154;
  }
  .user .login{
    flex: auto;
    margin: 0 20px;
  }
  .user .login .loginBtn{
    width: 60px;
    font-size: 14px;
    padding: 3px 6px;
    background-color: #66ae5c;
    color: #ffffff;
    float: left;

  }
  .login .userName{
    margin-bottom: 5px;
  }
  .user .exit {
    margin: 0 10px;
  }
  .user .exit .exits{
    font-size: 14px;
    border: 1px solid #039EDF;
    padding: 5px 10px;
    color: #66ae5c;
  }
  .countInfo{
    margin-top: 20px;
  }
  .countInfo .countList{
    padding: 0 10px;
  }
  .countList li{
    display: flex;
    line-height: 60px;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    background-color: #ececec;
  }
  .countList li .title{
    font-size: 14px;

  }
  .countList li .detail img{
    width: 20px;
    height: 20px;
  }

</style>

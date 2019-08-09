<template>
<div class="wrap">
  <div class="user">
    <div class="userImg">
      <img :src="userInfo.avatarUrl" v-if="isLogin ===true" alt="头像">
      <img src="/static/images/userIcon.png" alt="头像">
    </div>
    <div class="login" v-if="user">
      <div class="userName">{{user.LiuName}}</div>
      <div class="userSex">{{user.Telephone}}</div>
    </div>
    <div class="login" v-if="! user">
      <button class="loginBtn" @click="$nextPage('/pages/loginRejister/main')" >登录/注册</button>
    </div>
  </div>
  <div class="acativity">
    <ul>
      <li v-for="(item, index) in acativityList" :key="index">
        <div class="img"><img :src="item.imgSrc" alt=""></div>
        <div class="imgName">{{item.name}}</div>
      </li>
    </ul>
  </div>
  <div class="adBox">
    <img src="/static/images/adImg.jpg" alt="">
  </div>
  <div class="countInfo">
     <ul class="countList">
       <li @click="$nextPage(item.url)" v-for="(item, index) in countList" :key="index">
         <div class="title">{{item.title}}</div>
         <div class="detail">
           <img src="/static/images/right.png" alt="">
         </div>
       </li>
     </ul>
  </div>
  <div class="exit" v-if="user" @click="exit">
    退出登录
  </div>
</div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        acativityList: [
          {
            imgSrc: '/static/images/kajia.png',
            name: '我的砍价'
          },
          {
            imgSrc: '/static/images/choujiang.png',
            name: '我的抽奖'
          },
          {
            imgSrc: '/static/images/pintuan.png',
            name: '我的拼团'
          },
          {
            imgSrc: '/static/images/youhuiquan.png',
            name: '我发起的助力'
          }
        ],
        countList: [
          {
            title: '优惠券',
            url: ''
          },
          {
            title: '鲜豆',
            url: ''
          },
          {
            title: '礼品卡',
            url: ''
          },
          {
            title: '收货地址',
            url: '/pages/manageAddress/main'
          },
          {
            title: '意见反馈',
            url: ''
          },
          {
            title: '帮助说明',
            url: ''
          }
        ],
        user: null
      }
    },
    methods: {
      exit: function () {
        this.user = !this.user
      }
    },
    onShow () {
      this.user = getApp().globalData.$user
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
  background-color: #5cb154;
}
  .user .userImg img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid #cccccc;
  }
  .user .login{
    flex: auto;
    margin: 0 20px;
  }
  .user .login .loginBtn{
    font-size: 14px;
    padding: 3px 6px;
    background-color: #66ae5c;
    color: #ffffff;
    float: left;
    border: 1px solid #ffffff;
  }
  .login .userName{
    margin-bottom: 5px;
  }
  .acativity {
    margin:20px 0;
  }
  .acativity ul {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
  .acativity li{
    width: 25%;
    display: flex;
    flex-direction: column;
  }
  .acativity .img,.imgName{
    text-align: center;
    font-size: 12px;
  }
  .acativity .img {
    margin-bottom: 10px;
  }
  .acativity .img img{
    width: 25px;
    height: 25px;
  }
  .adBox img {
    height: 70px;
    width: 100%;
  }
  .countInfo{
    margin-top: 20px;
  }
  .countInfo .countList{
    padding: 0 10px;
  }
  .countList li{
    display: flex;
    line-height: 40px;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    background-color: #f8f8f8;
  }
  .countList li .title{
    font-size: 14px;

  }
  .countList li .detail img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .exit {
    background-color: #e4e4e4;
    line-height: 50px;
    text-align: center;
    color: #5cb154;
    margin: 20px 0;
  }

</style>

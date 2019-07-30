<template>
    <div class="wrap">
     <ul class="content">
       <li class="title">我的收获地址</li>
       <li>
         <div class="left">
           <div class="l-top">
             <span class="name">刘庆</span>
             <span class="phone">15112314565</span>
           </div>
           <div class="l-bottom">
             <span class="site">家</span>
             <span class="address">福州市晋安区融侨悦城</span>
           </div>
         </div>
         <div class="right">
           <img src="/static/images/redact.png">
         </div>
       </li>
     </ul>
      <div class="btn" @click="$nextPage('/pages/newAddress/main')">
        新建收获地址
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style scoped>
.content{
  padding: 0 10px;
}
  .content li{
    background-color: #f6f6f6;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  .content li.title{
    font-size: 16px;
  }
  .content li .left{
    flex: auto;
    display: flex;
    flex-direction: column;
  }
  .content li .left .l-top,.l-bottom{
    height: 30px;
    line-height: 30px;
  }
  .content li .right img{
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
  .left .l-top .phone,.l-bottom .address{
    margin-left: 5px;
  }
  .left .l-bottom .site{
    padding: 2px 3px;
    background-color: #66ae5c;
    color: #ffffff;
  }
  .btn{
    font-size: 18px;
    height: 60px;
    color: #ffffff;
    line-height: 60px;
    background-color: #66ae5c;
    text-align: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
</style>

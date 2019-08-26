<template>
    <div class="wrap">
     <ul class="content">
       <li class="title">我的收货地址</li>
       <li v-for="(item,index) in addressList" :key="index">
         <div class="left">
           <div class="l-top">
             <span class="name">{{item.Receiver}}</span>
             <span class="phone">{{item.Telephone}}</span>
           </div>
           <div class="l-bottom">
             <span class="site">{{item.Laber}}</span>
             <span class="address">{{addressStr[index]}}</span>
           </div>
         </div>
         <div class="right" @click="$nextPage('/pages/redactAddress/main?AddressId='+item.LiuAddressId)">
           <img src="/static/images/redact.png">
         </div>
       </li>
     </ul>
      <div class="btn" @click="$nextPage('/pages/newAddress/main')">
        新建收货地址
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        addressList: [],
        addressStr: []
      }
    },
    methods: {
    },
    onShow () {
      const _this = this
      wx.request({
        url: 'http://192.168.1.21:8070/WebHandler/LiuAddressHandler.ashx',
        method: 'GET',
        data: {
          type: 'getAddress',
          userId: _this.$global.user.LiuUserId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res) {
          _this.addressList = res.data.allAddress
          for (let i = 0; i < _this.addressList.length; i++) {
            let province = _this.addressList[i].Province.replace(/(,)/g, '')
            let address = _this.addressList[i].Address
            _this.addressStr[i] = province + address
          }
          _this.$global.defaultAddress = _this.addressStr[0]
          _this.$global.addressname = _this.addressList[0].Receiver
          _this.$global.addresstel = _this.addressList[0].Telephone
        }
      })
    }
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
    margin-bottom: 10px;
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

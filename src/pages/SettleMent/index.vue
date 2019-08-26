<template>
  <div class="Swrap">
    <div class="Swrap-top">
      <div class="top-wrap">
        <div class="top-wrap-left">
          <div class="nameandtel">
            <div class="Sname">
              {{addressname}}
            </div>
            <div class="Stel">
              {{addressTel}}
            </div>
          </div>
          <div class="Saddress">
            {{address}}
          </div>
        </div>
        <img class="jd" src="/static/images/right.png" alt="" @tap="chooseaddress"/>
      </div>
    </div>
    <div class="Swrap-nav">
      <div class="nav-choose">
        配送时间
        <img class="jd" src="/static/images/right.png" alt="" />
      </div>
    </div>
    <div class="Swrap-nav">
      <div class="nav-choose">
        优惠劵
        <img class="jd" src="/static/images/right.png" alt="" />
      </div>
    </div>
    <div class="Swrap-center">
      <div class="Scenter">
        <div class="nowmerchant">
          ———— {{nowmerchant}}————
        </div>
        <div class="Sgood-wrap" v-for="(item,index) of goodlist" :key="index">
          <img  class="Sgood-i" :src="item.GoodsLogo" alt="" />
          <div class="Sgood-right">
            <div class="goodsname">{{item.GoodsName}}</div>
            <div class="goodspriceandcishu">
              <div class="Sprice">￥{{item.GoodsPrice}}x</div><div class="Scishu">{{item.num}}</div>
            </div>

          </div>
          <div class="Sgood-last">
            <div class="money">
              ￥{{item.GoodsPrice*item.num}}
            </div>

          </div>
        </div>
        <div class="Sgoodsallmoney">
          <span>商品金额</span><span>￥1</span>
        </div>
        <div class="Sgoodsallmoney">
          <span>配送费</span><span>无</span>
        </div>
        <div class="Sgoodsdiscount">
          <span>红包</span><span class="wu">暂无红包</span>
        </div>
        <div class="Sgoodsdiscount">
          <span>优惠</span><span class="wu">暂无优惠</span>
        </div>
        <div class="truemoney">
          <div class="truemoney-box">
            实付金额<span class="truepay">￥{{price}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="Swrap-nav">
      <div class="nav-choose">
        优惠劵
        <img class="jd" src="/static/images/right.png" alt="" />
      </div>
    </div>
    <div class="Swrap-nav">
      <div class="nav-choose">
        号码保护
        <img class="jd" src="/static/images/right.png" alt="" />
      </div>
    </div>
    <div class="Swrap-nav">
      <div class="nav-choose">
        备注
        <img class="jd" src="/static/images/right.png" alt="" />
      </div>
    </div>
    <div class="bottom-nav">
      <div class="go-box">
        <span class="rmb">￥</span><span class="allrmb">{{price}}</span>
      </div>
      <div :class="['Settlement','goshoping']" >
        提交订单
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        nowmerchant: '',
        goodlist: '',
        price: '',
        jiage: 0,
        addressname: '',
        address: '',
        addressTel: ''
      }
    },
    methods: {
    },
    onLoad (res) {
      this.nowmerchant = this.$global.nowmerchant
      this.goodlist = this.$global.Allgoodlist
      this.price = this.$global.allprice
      this.address = this.$global.defaultAddress
      this.addressname = this.$global.addressname
      this.addressTel = this.$global.addresstel
    }
  }
</script>

<style scoped>
  /*body{*/
  /*  height:100%;*/
  /*  width:100%;*/
  /*  background-color: #f1f1f1;*/
  /*}*/
  .Swrap{
    width:100%;
    overflow: auto;
    font-size:14px;
    background-color: #f1f1f1;
  }
  .Swrap-top{
    margin-top:10px;
    height: 80px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Swrap-center{
    background-color:#fa541c;
  }
  .bottom-nav{
    height: 8%;
    width: 100%;
    position: fixed;
    bottom:0;
    background-color: #ccc;
    display: flex;
    z-index: 300;

  }
  .go-box{
    width:70%;
    position: relative;
    color:#ccc;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .Settlement{
    width:30%;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;

  }
  .rmb{
    color:red;
    font-size:12px;
    margin-left: 2.5%;
  }
  .allrmb{
    color:red;
  }
  .goshoping{
    background-color: #49B152;
  }
  .top-wrap{
    width: 95%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .jd{
    height: 20px;
    width:20px;
  }
  .top-wrap-left{
    width:70%;
    font-size: 14px;
    font-weight: 600;
  }
  .nameandtel{
    height: 50%;
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .Saddress{
    width:100%;
    height: 50%;
    display: flex;
    align-items: center;
  }
  .Sname{
    display: flex;
    align-items: center;
  }
  .Stel{
    margin-left:20px;
    display: flex;
    align-items: center;
  }
  .nav-choose{
    margin:0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Swrap-nav{
    background-color: #ffffff;
    height: 50px;
    width: 100%;
    margin-top:20px;
  }
  .Swrap-center{
    width:100%;
    background-color: #ffffff;
    margin-top:20px;
  }
  .Scenter{
    width:95%;
    margin:0 auto;

  }
  .nowmerchant{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Sgood-wrap{
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Sgood-i{
    height:60px;
    width:60px;

  }
  .Sgood-right{
    height: 70%;
    width:70%;

  }
  .Sgood-last{
    height: 70%;
    width:14%;

    position: relative;
  }
  .goodsname{
    height: 50%;
  }
  .goodspriceandcishu{
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  /*.Sprice{*/
  /*  height: 100%;*/
  /*}*/
  /*.Scishu{*/
  /*  height: 100%;*/
  /*}*/
  .money{
    position: absolute;
    bottom:0;
    right: 0;
  }
  .Sgoodsallmoney{
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Sgoodsdiscount{
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top:1px solid #cccccc;
  }
  .wu{
    color: #cccccc;
  }
  .truemoney{
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top:1px solid #cccccc;

  }
  .truemoney-box{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .truepay{
    font-weight: bolder;
    font-size:16px;
  }
</style>

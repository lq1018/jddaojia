<template>
<div class="wrap">
  <div class="merchant">
    <div class="content">
      <div class="left">
        <img src="/static/images/walmart.png" alt="">
      </div>
      <div class="right">
        <div class="top">
          <div class="merchantName">
            沃尔玛-鼓山店
          </div>
          <div class="sales">
            <div class="sales-left">月售1万+</div>
            <div class="sales-right">51分钟 | 3.3km</div>
          </div>
          <div class="delivery">
            <div class="deli-left">0元起送 | 基础运费6元起</div>
            <div class="deli-right">达达专送</div>
          </div>
        </div>
        <div class="center">
          <ul class="discounts">
            <li  v-for="(item,index) in discountsList" :key="index" v-if="index < num">
              <span :class="[item.type]">{{item.name}}</span>
              {{item.title}}
            </li>
          </ul>
          <span :class="[num > 2 ? 'up' : 'down','direction']" v-if="discountsList.length > 2" @click="showList"><img src="/static/images/down.png" alt=""></span>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'index',
    beforeMount () {
      this.num = 2
    },
    data () {
      return {
        num: 2,
        discountsList: [
          {
            name: '红包',
            title: '兑5元红包',
            type: 'hb'
          },
          {
            name: '领券',
            title: '免5元运费，满5元免5元运费，满48元免4元运费',
            type: 'lq'
          },
          {
            name: '返券',
            title: '实付满89元订单完成后返20元优惠券(每天1单)',
            type: 'fq'
          },
          {
            name: '满减',
            title: '欧莱雅满88减38，满176减76，满264减114',
            type: 'mj'
          }
        ]
      }
    },
    methods: {
      showList: function () {
        this.num = this.num === 2 ? this.discountsList.length : 2
        console.log(this.num)
      }
    }
  }
</script>

<style scoped>
.merchant{
  padding: 0 10px;
  border-bottom: 1px solid #cccccc;
}
  .content{
    padding: 8px 0;
    background-color: #f8f8f8;
    display: flex;
  }
  .right{
    width: calc(100% - 60px);
    padding: 0 5px;
  }
  .left img{
    width: 60px;
    height: 60px;
  }
  .right .top{
    padding-bottom: 10px;
    border-bottom: 1px dotted #cccccc;
  }
  .right .merchantName{
    font-size: 14px;
    font-family: 新宋体;
  }
  .right .sales{
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
  }
  .sales .sales-left,.sales .sales-right{
    font-size: 12px;
    color: #666666;
  }
  .top .delivery{
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
  }
  .delivery .deli-left,.deli-right{
    font-size: 12px;
    color: #666666;
  }
  .delivery .deli-left{
    vertical-align: text-bottom;
  }
  .deli-right{
    border: 1px solid #039EDF;
    color: #039EDF;
    border-radius: 2px;
  }
  .center{
    padding-top: 6px;
    display: flex;
    justify-content: space-between;
  }

  .center .discounts{
    width: calc(100% - 20px);
  }
  .center .discounts{
    width: 90%;
  }
  .discounts li {
    font-size: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666666;
    margin-bottom: 8px;
  }
  .discounts li span{
    color: #ffffff;
    padding: 2px 5px;
    border-radius: 2px;
    font-family: 新宋体;
  }
.center .direction img{
  width: 16px;
  height: 16px;
}
@keyframes rotate1  {
   from {transform: rotateZ(0deg);}
   25% {transform: rotateZ(45deg);}
   50% {transform: rotateZ(90deg);}
   75% {transform: rotateZ(135deg);}
   to {transform: rotateZ(180deg);}
}
@keyframes rotate2 {
  from {transform: rotateZ(180deg);}
  25% {transform: rotateZ(135deg);}
  50% {transform: rotateZ(90deg);}
  75% {transform: rotateZ(45deg)}
  to {transform: rotateZ(0deg);}
}
.center .direction.up img{
transform: rotateZ(180deg);
  animation: rotate1 .5s;
}
.center .direction.down img{
  transform: rotateZ(0deg);
  animation: rotate2 .5s;
}
  .discounts li span.hb{
    background-color: #ff6a93;
  }
  .discounts li span.lq{
    background-color: #ef745e;
  }
  .discounts li span.fq{
    background-color: #f4aa3e;
  }
  .discounts li span.mj{
    background-color: #66ae5c;
  }




</style>

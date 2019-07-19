<template>
    <div class="merchant">
      <div class="content">
        <div class="left">
          <img :src="merchantList.logoSrc">
        </div>
        <div class="right">
          <div class="top">
            <div class="merchantName">
              {{merchantList.name}}
            </div>
            <div class="sales">
              <div class="sales-left">月售{{merchantList.sales}}</div>
              <div class="sales-right">{{merchantList.time}} | {{merchantList.distance}}</div>
            </div>
            <div class="delivery">
              <div class="deli-left">{{merchantList.sendPrice}}元起送 | 基础运费{{merchantList.basisPrice}}元起</div>
              <div class="deli-right">{{merchantList.deliveryName}}</div>
            </div>
          </div>
          <div class="center" v-if="discountList">
            <ul class="discounts">
              <li  v-for="(discounts,index1) in discountList" :key="index1" v-if="index1 < num">
                <span :class="[discounts.type]">{{discounts.name}}</span>
                {{discounts.title}}
              </li>
            </ul>
            <span :class="[num > 2 ? 'up' : 'down','direction']" v-if="discountList.length > 2" @click="showList"><img src="/static/images/down.png" alt=""></span>
          </div>
          <div class="bottom" v-if="nearStore">
            <ul class="near">
              <div class="icon-store">
                <span><img src="/static/images/store.png" alt="">附近还有{{nearStore.length}}家</span>
                <span :class="[num1 > 1 ? 'up' : 'down','direction']" v-if="nearStore.length >= 2" @click="storeList"><img src="/static/images/down.png"></span>
              </div>
              <li class="nearStore" v-if="num1 >= nearStore.length" v-for="(store,index2) in nearStore" :key="index2">
                <div class="storeName">{{store.name}}</div>
                <div class="storeDistance">{{store.time}} | {{store.distance}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['merchantList', 'discountList', 'nearStore'],
    beforeMount () {
      this.num = 2
      this.num1 = 1
    },
    data () {
      return {
        num: 2,
        num1: 1
        // merchantList: [
        //   {
        //     name: '沃尔玛-鼓山店',
        //     logoSrc: '/static/images/walmart.png',
        //     sales: 999,
        //     sendPrice: 0,
        //     basisPrice: 6,
        //     time: '50分钟',
        //     distance: '2.5km',
        //     deliveryName: '达达专送',
        //     id: 0,
        //     discountsList: [
        //       {
        //         name: '红包',
        //         title: '兑5元红包',
        //         type: 'hb'
        //       },
        //       {
        //         name: '领券',
        //         title: '免5元运费，满5元免5元运费，满48元免4元运费,认识我那个分解机积分IE见覅偶',
        //         type: 'lq'
        //       },
        //       {
        //         name: '返券',
        //         title: '实付满89元订单完成后返20元优惠券(每天1单)',
        //         type: 'fq'
        //       },
        //       {
        //         name: '满减',
        //         title: '欧莱雅满88减38，满176减76，满264减114',
        //         type: 'mj'
        //       }
        //     ],
        //     nearStore: [
        //       {
        //         name: '沃尔玛-长城分店',
        //         time: '55分钟',
        //         distance: '2.5km'
        //       },
        //       {
        //         name: '沃尔玛-王庄分店',
        //         time: '30分钟',
        //         distance: '1.0km'
        //       }
        //     ]
        //   },
        //   {
        //     name: '沃尔玛-鼓山店',
        //     logoSrc: '/static/images/walmart.png',
        //     sales: 459,
        //     sendPrice: 18,
        //     basisPrice: 3,
        //     time: '50分钟',
        //     distance: '2.5km',
        //     deliveryName: '达达专送',
        //     id: 1,
        //     discountsList: [
        //       {
        //         name: '领券',
        //         title: '免5元运费，满5元免5元运费，满48元免4元运费,认识我那个分解机积分IE见覅偶',
        //         type: 'lq'
        //       },
        //       {
        //         name: '返券',
        //         title: '实付满89元订单完成后返20元优惠券(每天1单)',
        //         type: 'fq'
        //       },
        //       {
        //         name: '满减',
        //         title: '欧莱雅满88减38，满176减76，满264减114',
        //         type: 'mj'
        //       }
        //     ],
        //     nearStore: [
        //       {
        //         name: '沃尔玛-长城分店',
        //         time: '55分钟',
        //         distance: '2.5km'
        //       },
        //       {
        //         name: '沃尔玛-王庄分店',
        //         time: '30分钟',
        //         distance: '1.0km'
        //       }
        //
        //     ]
        //   }]
      }
    },
    methods: {
      showList: function () {
        this.num = this.num === 2 ? this.discountsList.length : 2
      },
      storeList: function () {
        this.num1 = this.num1 === 1 ? this.nearStore.length : 1
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
    box-sizing: border-box;
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
    margin-bottom: 5px;
    border-bottom: 1px dotted #cccccc;
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
  .center .direction.up img,.icon-store .direction.up img{
    transform: rotateZ(180deg);
    animation: rotate1 .5s;
  }
  .center .direction.down img,.icon-store .direction.down img{
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
  .bottom .near{
    padding: 6px 0;
  }
  .bottom .near .icon-store{
    font-size: 14px;
    font-family: 新宋体;
    line-height: 30px;
    display: flex;
    justify-content: space-between;

  }
  .bottom .near .icon-store span:nth-of-type(1) img{
    width: 12px;
    height: 12px;
    margin-right: 3px;
  }
  .icon-store span:nth-of-type(2) img{
    width: 16px;
    height: 16px;
  }
  .near .nearStore{
    display: flex;
    justify-content: space-between;
    line-height: 30px;
  }
  .nearStore .storeName{
    font-size: 14px;
    font-family: 新宋体;
  }
  .nearStore .storeDistance{
    font-size: 12px;
    color: #666666;
  }
</style>

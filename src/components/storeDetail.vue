<template>
  <div class="wrap">
    <div class="top">
      <div class="top-left">
        <img :src="storeIfo.MerchantLogo" alt="">
        <div class="store">
          <div class="storeName">{{storeIfo.MerchantName}}</div>
          <div class="storeOther">
            <span>达达专送-{{storeIfo.DeliveryTime}}</span> | 基础运费{{storeIfo.BasedPrice}}元
          </div>
        </div>
      </div>
      <div class="top-right">
        <div class="collect" :class="{acitve : lock}" @click="isAcitve">
        </div>
        <div class="vip">
          <img src="/static/images/VIP.png" alt="">
        </div>
      </div>
    </div>
    <div class="search">
      <div class="searchInp" @click="searchPage">
        <span><img src="/static/images/search.png" alt=""></span>
        <span>搜索店内商品</span>
      </div>
      <div class="lingquan" @click="lqActive">
        <img src="/static/images/lingquan.png" alt="">
      </div>
      <div class="youhuiquan" v-if="lqLock">
        <div class="con">这里没有优惠券</div>
        <span @click="lqActive">X</span>
      </div>
    </div>
    <div class="content">
      <div class="con-left">
        <span v-for="(goods,index) in goodsClassify" :class="{goodsActive : openId === index}" @click="add(index,goods.GoodsSortId)" :key="index">{{goods.SortName}}</span>
      </div>
      <div class="con-right">
          <ul v-show="index1 === openId" v-for="(goods1,index1) in goodsClassify" :key="index1">
            <li v-for="(everyGoods,index2) in goodsList" :key="index2">
                <goodslist :everyGoods="everyGoods"
                           @addShoppingCar1="addShoppingCar1"
                           :goods-sort-id="goods1.GoodsSortId"/>
            </li>
          </ul>
      </div>
    </div>
<!-- 点击购物车显示页面   -->
    <div class="bottom">
      <div class="shopCar">
         <span class="icon">
           <img src="/static/images/shopCar.png">
         </span>
        <span class="num" v-if="totalNumber > 0">{{totalNumber}}</span>
        <span class="totalPrice">{{totalMoney}}</span>
      </div>
      <div class="settleCount">结算</div>
    </div>
  </div>
</template>

<script>
  import counter from './counter'
  import goodslist from './goodsList'
  export default {
    components: {counter, goodslist},
    props: ['storeIfo', 'goodsClassify', 'goodsList'],
    data () {
      return {
        lock: false,
        lqLock: false,
        openId: 0,
        goodsCar: [], // 存储添加的商品的相关信息
        len: 0,
        index: [],
        totalMoney: 0,
        goodsSortId: null,
        totalNumber: 0
      }
    },
    methods: {
      isAcitve: function () {
        this.lock = !this.lock
      },
      add: function (index, goodsId) {
        this.openId = index
        this.goodsSortId = goodsId
        this.$emit('goodsList', this.goodsSortId)
      },
      isShow: function (index) {
        this.openId = index
      },
      searchPage: function () {
        wx.navigateTo({
          url: '/pages/search/main',
          success (res) {
          }
        })
      },
      lqActive: function () {
        this.lqLock = !this.lqLock
      },
      addShoppingCar1: function (shoppingGoods) {
        let id = shoppingGoods.GoodsListId
        if (shoppingGoods.num > 0) {
          this.goodsCar.push(shoppingGoods)
          let obj = {}
          this.goodsCar = this.goodsCar.reduce((cur, item) => {
            obj[item.GoodsListId] = obj[item.GoodsListId] ? '' : obj[item.GoodsListId] = true && cur.push(item)
            return cur
          }, [])
        } else {
          let index = this.goodsCar.findIndex(item => item.GoodsListId === id)
          if (index !== -1) {
            this.goodsCar.splice(index, 1)
          }
        }
        console.log(this.goodsCar)
        this.totalPrice()
      },
      //  计算总价购物车中商品的总价格
      totalPrice: function () {
        this.totalMoney = 0
        let len = this.goodsCar.length
        this.totalNumber = 0
        for (let i = 0; i < len; i++) {
          this.totalNumber += this.goodsCar[i].num
          this.totalMoney += this.goodsCar[i].num * this.goodsCar[i].GoodsPrice
        }
        this.totalMoney = parseFloat(this.totalMoney).toFixed(2)
      }
    },
    onShow () {
      // const id = wx.getStorageSync('goodsId')
      // const goodsNum = wx.getStorageSync('goodsNum')
      // if (id && goodsNum > 0) {
      //   const index = this.shoppingCar.findIndex(item => item.GoodsListId === id)
      //   if (index === -1) {
      //     this.shoppingCar.push(this.goodsList.find(item => item.GoodsListId === id))
      //     const index1 = this.shoppingCar.findIndex(item => item.GoodsListId === id)
      //     if (index1 !== -1) {
      //       this.shoppingCar[index1].num = goodsNum
      //     }
      //   } else {
      //     this.shoppingCar[index].num = goodsNum
      //   }
      // } else if (id && goodsNum === 0) {
      //   const index = this.shoppingCar.findIndex(item => item.GoodsListId === id)
      //   this.shoppingCar.splice(index, 1)
      // }
      // console.log(this.shoppingCar)
      // this.totalPrice()
      console.log(this.goodsCar)
      this.totalPrice()
    }
  }
</script>

<style scoped>
  .top{
    padding: 10px;
    background-color: #5cb154;
    display: flex;
    justify-content: space-between;
  }
  .top .top-left{
    display: flex;
  }
  .top-left img{
    width: 50px;
    height: 50px;
    margin-right: 6px;
  }
  .top-left .storeName{
    color: #ffffff;
    margin-bottom: 3px;
  }
  .top-left .storeOther{
    font-size: 10px;
    color: #ffffff;
  }
  .top-left .storeOther span{
    border: 1px solid #ffffff;
  }
  .top-right{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .top-right .collect{
    width: 20px;
    height: 20px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABp0lEQVRYR8WXjVGDQBCFcxVoCbEC7UCsQK1AU4FYgaYCYwWGCkwqEDvQCowVqBXge7pEQA72LptwMzsMM7vvfffHHW40cHMD+49aAYqiGAPsFJEg9hF8X0ksnHPLNnDUHUvNEZ4M1nwicsQSdXyvtX8AELlBRirGvgGi0DUEF0xADc0exNRXQ5AZaqbVhDUARNjTpx6Rpvit9JBP1mvaC5JOAEKg3ymINNeY+XLWECXADJlXmyhG1N5jFFInC+4tQsCi5IAAXHB3FmoRGlMC5Cjk9hmiPRPgI2AFm0MSoDBXDRAkALfEYUCNZeo7AeZQvLBUDdDKht4FEwLwE7pC7AWQW6R+QWRcfgnP8PJooRqgcc7DrHoY8WTjEbyLxqOZnf67D8hUEGLbH6VXeCS107Da5S3vigxeaWleG4EdQGQwvmzOr/dOaDwSrebeESgpjSC85r0ATNgQotNcBSAQMXeGnxtP355W/xdgJLiAePPVtAnM55pENYCMhAZCba6egsYW7YIIMo8C6BiJYPNoAIFI8OR1no1ft1wz582coDUQY9BXMzjAN3MnnlRpLv4fAAAAAElFTkSuQmCC);
    background-size: 100%;
    margin-bottom: 5px;
  }
  .top-right .acitve{
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAChUlEQVRYR8WXzVLTUBTHzwmL6lAVnXFoWeETeNMXaHwABnwCYQNL6/AAtntmxCVswCewnWFvfQDauGVj3FDAGYm2C3Ekx3OuBpPSNGlowp3pdJrcc/6/ez7uvUW45YG3rA8jAXpKLfKLZTAMC4jmGHKRPw4iOuR5zZJtt0aBfzXNqodoEYBiOyU2gOiC57X5Wats286w3TWA00rlNRHV2FCERw8iB4lezdt2UyacKaVYeI9tRDTKxuUFbM93Oo3ghCuAc6XmLhA/jHUy5JqN6xwRl23qY4GDdkR2gejZQ9t25bEGGCWOxSIULAtmFhZgplyGH40Q+M1KJwChAU4qlW3+eul7FeF7m5ta/PfREVweH4PLv6c83pY6nRrqgjOMz77zu0tLcL9eh4t2G/pbW3DZ601Z9787Tt8T5NXX+NEbnQ8O++ODA/h1eJjFiq8thDujgT3TbHN1VuVtcWMDZtfX4axaBRoMMlu575i77SOemOa5X8GPdnf1u28MkdeQFHAk/g4BkPAPdnby0geJgM0ReCqK0m5ev59L+EWPU/BFamCfa+BFbksOCDHAu1AX5A3BbbiGehc0DIfFH+QM8L3geXLoAZwqtUKG8T5PAPS853KYXR1GXIxNLsblXCCIWqVud0W0QqfhT8SmvyllBkL0iU9DK3QaBsWy7Aqp+jt81/DFQxHIGkLEy93u6nBkI++E04xElHhkBHzKaUCME48FkAk3gYgTTwQgk4J3hgm6Q9944uYn/l/AN6dVvjntxTnUhwxvsXwF308yNzGATkcCiEnEE6cg1KJjICYVTwUQFYk04qkB/kFY8k9H55x3N855O0nOE29EaZylsZmoCNMIxNn8ATRNHxmBv4xXAAAAAElFTkSuQmCC);
  }
  .top-right .vip img{
    width: 48px;
    height: 24px;
  }
  .search{
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
  }
  .search .youhuiquan{
    position: absolute;
    width: 100%;
    height: 500px;
    background-color: rgba(0,0,0,0.1);
    z-index: 999;
  }
  .search .youhuiquan span{
    font-size: 25px;
    color: #ffffff;
  }
  .search .youhuiquan .con{
    width: 200px;
    height: 150px;
    text-align: center;
    background-color: red;
    position: absolute;
    top: 50%;
    margin-left: -100px;
    margin-top: -75px;
    left: 50%;
  }
  .searchInp{
    width: 80%;
    background-color: #e4e4e4;
    display: flex;
    padding-left: 5px;
    align-items: center;
  }
  .searchInp span:nth-of-type(1){
    margin-right: 5px;
  }
  .searchInp span:nth-of-type(2){
    width: 90%;
    box-sizing: border-box;
    font-size: 12px;
    padding-left: 10px;
    line-height: 20px;
  }
  .searchInp img{
    width: 16px;
    height: 16px;
  }
  .search .lingquan img{
    width: 40px;
    height: 20px;
  }
  .content{
    display: flex;
  }
  .content .con-left{
    width: 20%;
    height: 440px;
    overflow: auto;

  }
  .con-left span{
    display: inline-block;
    width: 100%;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
    background-color: #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
  }
  .con-left span.goodsActive{
    background-color: #f8f8f8;
    color: #5cb154;
  }
  .con-right {
    width: 80%;
  }
  .con-right .ul{
    height: 440px;
    overflow: auto;
  }
  .con-right li{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #cccccc;

  }
  .wrap .bottom{
    position: fixed;
    height: 60px;
    background-color: #e4e4e4;
    left: 0px;
    right: 0px;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
  }
  .bottom .shopCar {
    width: 70%;
    line-height: 60px;
  }
  .bottom .shopCar .icon{
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #5cb154;
    border-radius: 50%;
    text-align: center;
    top: -10px;
    left: 20px;
  }
  .bottom .shopCar .icon img {
    width: 25px;
    height: 25px;
  }
  .bottom .shopCar .num {
    position: relative;
    padding: 3px;
    border-radius: 50%;
    background-color: red;
    color: #ffffff;
    font-size: 10px;
    top: -35px;
    left: 50px;
  }
  .bottom .shopCar .totalPrice {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 0px;
    left: 0px;
    left: 0px;
  }
  .bottom .settleCount {
    flex: auto;
    text-align: center;
    background-color: #5cb154;
    color: #ffffff;
    line-height: 60px;
  }
  .bot{
    width:100%;
    height: 50px;
  }


</style>

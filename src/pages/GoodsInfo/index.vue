<template>
    <div class="wrap">
      <div class="top">
        <div class="showImg">
          <img :src="theGoods.GoodsLogo" alt="">
        </div>
        <div class="goodsInfo">
          <div class="goosName">
            {{theGoods.GoodsName}}
          </div>
          <div class="tuijian">
            推荐好物
          </div>
        </div>
        <div class="goodsCar">
          <div class="price">￥{{theGoods.GoodsPrice}}</div>
          <div class="counter">
            <counter
              @counterService="counterService"
              :number1="Goodsnum"/>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="shopCar">
         <span class="icon">
           <img src="/static/images/shopCar.png">
         </span>
          <span class="num" v-if="num > 0">{{num}}</span>
          <span class="totalPrice">{{totalMoney}}</span>
        </div>
        <div class="settleCount">结算</div>
      </div>
    </div>
</template>

<script>
  import counter from '@/components/counter'
  export default {
    name: 'index',
    components: {counter},
    data () {
      return {
        Goodsnum: null,
        goodsId: null,
        theGoods: {},
        goodsCar: [],
        totalMoney: 0,
        num: 0,
        show: false
      }
    },
    methods: {
      counterService: function (everyNum) {
        this.Goodsnum = everyNum
        const _this = this
        let obj = {}
        const len = this.goodsCar.length
        if (len > 0) {
          let index = this.goodsCar.findIndex(item => item.GoodsListId === this.goodsId)
          if (index !== -1) {
            this.goodsCar[index].num = this.Goodsnum
          } else {
            this.goodsCar[len] = this.theGoods
            this.goodsCar[len].num = this.Goodsnum
          }
        } else {
          this.goodsCar[0] = this.theGoods
          this.goodsCar[0].num = this.Goodsnum
        }
        // 对象数组去重
        this.goodsCar = this.goodsCar.reduce((cur, item) => {
          obj[item.GoodsListId] = obj[item.GoodsListId] ? '' : obj[item.GoodsListId] = true && cur.push(item)
          return cur
        }, [])
        this.getNum()
        this.getTotalMoney()
        wx.setStorageSync(_this.goodsId, _this.Goodsnum)
      },
      getTotalMoney: function () {
        this.totalMoney = 0
        for (let i = 0; i < this.goodsCar.length; i++) {
          this.totalMoney += this.goodsCar[i].GoodsPrice * this.goodsCar[i].num
        }
        this.totalMoney = parseFloat(this.totalMoney).toFixed(2)
      },
      getNum: function () {
        this.num = 0
        for (let i = 0; i < this.goodsCar.length; i++) {
          this.num += this.goodsCar[i].num
        }
        return this.num
      }
    },
    onLoad (res) {
      this.Goodsnum = Number(res.goodsNum)
      this.goodsId = res.goodsId
      const _this = this
      wx.request({
        url: 'http://192.168.1.21:8070/WebHandler/LiuGetGoodsHandler.ashx',
        method: 'POST',
        data: {
          type: 'theGoods',
          goodsId: this.goodsId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res) {
          _this.theGoods = res.data.thegoods[0]
          console.log(_this.theGoods)
        }
      })
    },
    onShow () {
      this.goodsCar = wx.getStorageSync('goodsCar')
      this.totalMoney = wx.getStorageSync('totalMoney')
      this.getNum()
      wx.clearStorageSync()
    }
  }
</script>

<style scoped>
  .wrap{
    background-color: #f3f3f3;
  }
  .top .showImg {
    text-align: center;
    margin-bottom: 6px;
    background-color: #ffffff;
  }
  .top .showImg img{
    height: 150px;
    width: 150px;
  }
  .goodsInfo{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
  }
  .goodsInfo .goodsName {
    width: 75%;
    margin-right: 8px;
    font-size: 12px;
  }
  .goodsInfo .tuijian{
    width: 22%;
    border-radius: 8px;
    border: 1px solid #cccccc;
    font-size: 10px;
    text-align: center;
    line-height: 20px;
    height: 20px;
  }
  .goodsCar {
    padding: 10px;
    background-color: #ffffff;
    justify-content: space-between;
    display: flex;
  }
  .goodsCar .price {
    color: #ff4400;
    font-size: 20px;
  }
  .goodsCar .counter {
    width: 40%;
    display: flex;
    justify-content: center;
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
  #popup {
    width: 100%;
    height: 60px;
  }
</style>

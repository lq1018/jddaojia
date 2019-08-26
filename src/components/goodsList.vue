<template>
    <div class="wrap">
        <div class="goodsImg">
          <img :src="everyGoods.GoodsLogo" alt="">
        </div>
        <div class="goodsDetail">
          <div class="goodsName" @click.stop="nextPage(everyGoods.GoodsListId)">
            {{everyGoods.GoodsName}}
          </div>
          <div class="goodsSales">
            月售{{everyGoods.GoodsSales}}件 | 好评99%
          </div>
          <div class="goodsPrice">
            <span>￥{{everyGoods.GoodsPrice}}</span>
            <div class="counter" @click="addShoppingCar(everyGoods)">
              <counter @counterService="counterService"
                        :number1="everyNum"/>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import counter from './counter'
  export default {
    name: 'goodsList',
    components: {
      counter
    },
    props: ['everyGoods', 'goodsSortId'],
    data () {
      return {
        everyNum: 0,
        shoppingCar: {},
        goodsID: null
      }
    },
    methods: {
      nextPage: function (goodsId) {
        this.$nextPage('/pages/GoodsInfo/main?goodsId=' + goodsId + '&goodsNum=' + this.everyNum)
      },
      counterService: function (everyNum) {
        this.everyNum = everyNum
      },
      addShoppingCar: function (everyGoods) {
        everyGoods.num = this.everyNum
        this.shoppingCar = everyGoods
        this.$emit('addShoppingCar1', this.shoppingCar)
      }
    },
    onShow () {
      // const id = wx.getStorageSync(this.everyGoods.GoodsListId)
      let goodsID = this.everyGoods.GoodsListId
      if (wx.getStorageSync(goodsID) || wx.getStorageSync(goodsID) === 0) {
        // const num = wx.getStorageSync(this.everyGoods.)
        // this.everyNum = num
        // this.addShoppingCar(this.everyGoods)
        let num = wx.getStorageSync(goodsID)
        this.everyNum = num
        this.addShoppingCar(this.everyGoods)
      }
    }
  }
</script>

<style scoped>
  .wrap {
    display: flex;
    width: 100%;
  }
  .wrap .goodsImg img{
    width: 60px;
    height: 60px;
  }
  .wrap .goodsDetail{
    width: calc(100% - 60px);
  }
  .goodsDetail .goodsName{
    font-size: 14px;
    font-weight: bold;
  }
  .goodsDetail .goodsSales{
    font-size: 10px;
    color: #666666;
  }
  .goodsDetail .goodsPrice{
    display: flex;
    justify-content: space-between;
  }
  .goodsPrice span{
    color: #f40;
  }
  .goodsPrice counter{
    width: 100px;
  }
</style>

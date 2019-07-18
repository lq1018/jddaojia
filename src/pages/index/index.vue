<template>
<div class="wrap">
  <div class="location">
    <span><img :src="imgSrc1" class="img1"></span>
    <div class="mapLocation" @click="getLocation">{{location}}</div>
    <span><img :src="imgSrc2" class="img2"></span>
  </div>
  <div class="search">
    <a href="/pages/search/main">
    <div class="searchInp">
      <span><img :src="imgSrc3" alt="">搜索附近的商家商品</span>
    </div>
    </a>
  </div>
    <scroll-view scroll-x="true" class="scroll-view_H first-scroll"  style="white-space: nowrap; width: 100%;display: flex;">
      <div class="scroll-view-item_H">
        <ul>
          <li v-for="(item,index) in goodsItem" @click="nextPage" :key="index">
            <img :src="item.imgSrc" alt="">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="scroll-view-item_H">
        <ul>
          <li>
            <img src="/static/images/market.png" alt="">
            <span>超值拼团</span>
          </li>
        </ul>
      </div>
    </scroll-view>

</div>

</template>

<script>
export default {
  data () {
    return {
      location: '选择你的位置',
      imgSrc1: '/static/images/location.png',
      imgSrc2: '/static/images/triangle.png',
      imgSrc3: '/static/images/search.png',
      goodsItem: [
        {
          imgSrc: '/static/images/market.png',
          name: '超市便利'
        },
        {
          imgSrc: '/static/images/market.png',
          name: '超市便利'
        },
        {
          imgSrc: '/static/images/market.png',
          name: '超市便利'
        },
        {
          imgSrc: '/static/images/market.png',
          name: '超市便利'
        },
        {
          imgSrc: '/static/images/market.png',
          name: '超市便利'
        },
        {
          imgSrc: '/static/images/market.png',
          name: '超市便利'
        },
        {
          imgSrc: '/static/images/market.png',
          name: '超市便利'
        },
        {
          imgSrc: '/static/images/market.png',
          name: '超市便利'
        },
        {
          imgSrc: '/static/images/market.png',
          name: '超市便利'
        },
        {
          imgSrc: '/static/images/market.png',
          name: '超市便利'
        }]
    }
  },
  created () {
    // let app = getApp()
    // this.getLocation()
  },
  components: {
  },
  methods: {
    getLocation () {
      let _this = this
      wx.chooseLocation({
        success: function (res) {
          _this.location = res.name
        }
      })
    },
    nextPage () {
      wx.navigateTo({
        url: '/pages/MerchantList/main',
        success (res) {
        }
      })
    } }}
</script>

<style scoped>
.location{
  background-color:#5cb154;
  line-height: 40px;
  color: #fff;
  padding: 0 5px;
}
.mapLocation{
  display: inline;
  font-size: 14px;
  padding: 5px 0;
}
.location img{
    width: 20px;
    height: 20px;
    vertical-align: text-bottom;
  }
.search{
  padding: 5px 5px 10px;
  background-color: #5cb154;
}
  .search .searchInp{
    line-height: 35px;
    border-radius: 20px;
    text-align: center;
    margin: 0 auto;
    background-color: #ffffff;
  }
  .searchInp span{
    color: #aaaaaa;
    font-size: 14px;
  }
  .searchInp img{
    width: 20px;
    height: 20px;
    vertical-align: text-bottom;
    margin-right: 5px;
  }

.scroll-view-item_H{
    display: inline-block;
    background-color: #ffffff;
  }
  .scroll-view-item_H.first-scroll{
    width: 100%;
  }
  .scroll-view-item_H ul{
    display: flex;
    padding: 10px 20px;
    flex-wrap: wrap;
    justify-content: space-between;

  }
  .scroll-view-item_H ul li{
    width:20%;
    line-height:40px;
    margin-bottom: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
.scroll-view-item_H ul li img{
  width: 32px;
  height: 32px;
}
  .scroll-view-item_H ul li span{
    font-size: 12px;
  }


</style>

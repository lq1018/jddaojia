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
          <li v-for="(item,index) in goodsItem" @click="$nextPage('/pages/MerchantList/main?MerchantId=' + item.MerchantSortId)" :key="index">
            <img :src="item.SortImg" alt="">
            <span>{{item.SortName}}</span>
          </li>
        </ul>
      </div>
    </scroll-view>
  <div class="barginBox">
    <div class="barginTop">
      <div class="title">劲爆砍价</div>
      <div class="more">更多</div>
    </div>
    <div class="barginContent">
      <scroll-view scroll-x="true" class="scroll-view" style="white-space: nowrap; width: 100%; display: flex">
        <ul class="scroll-view-item">
          <li v-for="(item,index1) in barginGoods" :key="index1">
             <div class="barginImg">
               <img :src="item.imgSrc" alt="">
             </div>
             <div class="barginName">{{item.name}}</div>
          </li>
        </ul>
      </scroll-view>
    </div>
  </div>
  <div class="swiper">
    <swiper :indicator-dots="indicatorDots"
            :autoplay="autoplay" :interval="interval" :duration="duration" circular=true>
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <img :src="item" class="slide-image" style="width: 100%; height: 100%"/>
        </swiper-item>
      </block>
    </swiper>
  </div>

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
      goodsItem: [],
      imgUrls: [
        '/static/images/swriper1.jpg',
        '/static/images/swiper2.jpg',
        '/static/images/swpier3.jpg',
        '/static/images/swiper4.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      barginGoods: [
        {
          name: '火龙果',
          imgSrc: '/static/images/fru1.jpg'
        },
        {
          name: '牛油果',
          imgSrc: '/static/images/fru2.jpg'
        },
        {
          name: '黄桃',
          imgSrc: '/static/images/fru3.jpg'
        },
        {
          name: '八喜酸奶',
          imgSrc: '/static/images/fru4.jpg'
        },
        {
          name: '雪糕',
          imgSrc: '/static/images/fru5.jpg'
        },
        {
          name: '牛肉',
          imgSrc: '/static/images/fru6.jpg'
        },
        {
          name: '小龙虾',
          imgSrc: '/static/images/fru7.jpg'
        },
        {
          name: 'iphonexs',
          imgSrc: '/static/images/fru8.jpg'
        },
        {
          name: 'vivo',
          imgSrc: '/static/images/fru9.jpg'
        }
      ]
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
    }
  },
  onLoad () {
    const _this = this
    wx.request({
      url: 'http://192.168.1.21:8070/WebHandler/LiuGetGoodsHandler.ashx',
      method: 'POST',
      data: {
        type: 'MerchantClassify'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success (res) {
        console.log(res.data.merchantSort)
        _this.goodsItem = res.data.merchantSort
      }
    })
  }

}
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
  .barginTop {
    display: flex;
    justify-content: space-between;
    padding: 8px 5px;
  }
  .barginTop .title {
    font-size: 16px;
  }
  .barginTop .more {
    font-size: 12px;
  }
  .barginContent .scroll-view-item{
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;

}
  .barginContent .scroll-view-item li{
    width:90px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 8px;
  }
  .barginName {
    text-align: center;
    font-size: 14px;
    color: #1c2438;
  }
  .barginImg img{
    width: 80px;
    height: 80px;
  }
  .swiper {
    width: 90%;
    margin: 0 auto;
  }


</style>

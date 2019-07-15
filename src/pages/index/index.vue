<template>
<div class="wrap">
  <div class="location">
    <span><img :src="imgSrc1" class="img1"></span>
    <div class="mapLocation" @click="getLocation">{{location}}</div>
    <span><img :src="imgSrc2" class="img2"></span>
  </div>
  <div class="search">
    <div class="searchInp">
      <span><img src="" alt="">搜索附近的商家商品</span>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      location: '选择你的位置',
      imgSrc1: '/static/images/location.png',
      imgSrc2: '/static/images/triangle.png'
    }
  },
  created () {
    // let app = getApp()
    this.getLocation()
  },
  components: {
  },
  methods: {
    getLocation () {
      let _this = this
      wx.chooseLocation({
        success: function (res) {
          console.log(res)
          _this.location = res.name
        }
      })
    }}}
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
    line-height: 40px;
    border-radius: 25px;
    text-align: center;
    margin: 0 auto;
    background-color: #ffffff;
  }
  .searchInp img{
    width: 20px;
    height: 20px;
  }

</style>

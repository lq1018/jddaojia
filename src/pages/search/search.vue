<template>
    <div class="wrap">
<!--      搜索框-->
      <div class="search">
        <div class="searchInp">
          <span><img src="/static/images/search.png" alt=""></span>
          <input @input="doInput" @confirm="doSearch" v-model="searchVal" placeholder="搜索附近的商家商品">
        </div>
        <button @click="addHistoryItem(searchVal)">搜索</button>
      </div>
<!--      搜索结果展示列表-->
      <div v-if="searchVal.length > 0 && currentList.length > 0" style="padding:8px 8px 0 8px;">
       <scroll-view scroll-y style="height: calc(100vh - 80px);" scroll-top="0">
         <ul>
           <li class="ub-box" v-for="(item,i) in currentList" @click="addHistoryItem(item.val)" :key="i">{{item.val}}</li>
         </ul>
       </scroll-view>
      </div>
<!--      热门搜索展示-->
      <div v-if="searchVal.length == 0 || currentList.length == 0">
        <div class="hotsearch">
          <div class="top">
            <img src="/static/images/hot.png" alt="">
            <span>热门搜索</span>
          </div>
          <ul class="content">
            <li v-for="(item,index) in hotSearch" :key="index" @click="addHistoryItem(item)">{{item}}</li>
          </ul>
        </div>
<!--        历史搜索记录-->
        <div class="historySearch">
          <div class="historyTitle">
            <img src="/static/images/history.png" alt="">
            <span>搜索历史</span>
          </div>
          <ul class="historyItem" v-if="historyItem.length > 0">
            <li v-for="(item,index) in historyItem" :key="index">{{item}}</li>
            <button class="clear-btn" @click="clearAllHistory">清除搜索历史</button>
          </ul>
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        // 获取搜索框中输入的值
        searchVal: '',
        hotSearch: ['牛奶', '酸奶', '纸巾', '零食', '面包', '卫生巾', '施华蔻', '饮料', '冰淇淋', '洗衣液', '泡面', '巧克力'],
        currentList: [], //  根据当前搜索内容，得到的搜索结果
        searchAllList: [
          {id: '1', val: '牛奶', num: '7'},
          {id: '2', val: '牛奶糖', num: '5'},
          {id: '3', val: '酸奶', num: '3'},
          {id: '4', val: '纸巾', num: '1'},
          {id: '5', val: '牛奶片', num: '1'},
          {id: '6', val: '零食', num: '2'},
          {id: '7', val: '零食大礼包', num: '3'},
          {id: '8', val: '面包', num: '1'},
          {id: '9', val: '面包刀', num: '2'},
          {id: '10', val: '面包糠', num: '1'},
          {id: '11', val: '饮料', num: '1'},
          {id: '12', val: '纸巾', num: '1'}
        ]
      }
    },
    // 挂载之前执行
    beforeMount () {
      this.searchVal = ''
    },
    computed: {
      historyItem () {
        return this.$store.state.historyItem
      }
    },
    methods: {
      doInput: function (e) {
        this.filterList()
      },
      // doSearch: function (e) {
      //   this.searchVal = e.mp.detail.value
      // },
      filterList: function () {
        if (!this.searchVal) {
          this.currentList = []
        }
        this.currentList = this.searchAllList.filter(item => {
          if (item.val.indexOf(this.searchVal) >= 0) {
            return item
          }
        })
      },
      //  将搜索记录加入到列表中
      addHistoryItem: function (val) {
        this.currentList = []
        if (val) {
          this.searchVal = val
          this.$store.commit('addHistoryItem', val)
        }
      },
      //  清除所有搜索历史记录
      clearAllHistory: function () {
        this.$store.commit('clearAllHistory')
      }

    }
  }
</script>

<style scoped>
  .wrap{
    margin:0 10px;
    background-color: #f8f8f8;
  }
  .search{
    display: flex;
    padding: 10px 0;
  }
  .searchInp{
    width: 80%;
    background-color: #e4e4e4;
    display: flex;
    padding-left: 5px;
    align-items: center;
  }
  .searchInp span{
    margin-right: 5px;
  }
  .searchInp input{
    width: 90%;
    box-sizing: border-box;
    font-size: 12px;
    padding-left: 10px;
  }
  .search button{
    display: inline-block;
    font-size: 12px;
    outline: none;
  }

.searchInp img{
  width: 16px;
  height: 16px;
}
.hotsearch{
  margin: 10px 0;
}
.hotsearch .top,.historySearch .historyTitle{
  line-height: 40px;
  border-bottom: 1px solid #cccccc;
}
  .hotsearch .top img, .historySearch .historyTitle img{
    vertical-align: text-bottom;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .top span,.historyTitle span{
    font-size: 14px;
  }
  .hotsearch .content{
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .hotsearch .content li{
    width: 20%;
    padding: 5px 0;
    text-align: center;
    border: 1px solid #cccccc;
    margin-bottom: 6px;
    font-size: 12px;
    font-family: 宋体;
  }
  .ub-box {
    line-height: 30px;
    font-size: 12px;
    border-bottom: 1px solid #cccccc;
  }
  .historyItem li {
    line-height: 30px;
    border-bottom: 1px solid #cccccc;
    padding-left: 10px;
    font-size: 12px;
    font-family: 宋体;
  }
  .historyItem .clear-btn{
    margin-top: 10px;
    width: 120px;
    font-size: 12px;
    font-family: 宋体;
    color: #5cb154;
    border: 1px solid #5cb154;
    border-radius: 5px;

  }
</style>

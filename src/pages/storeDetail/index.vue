<template>
  <store-detail
    :store-ifo="merchantlist"
    :goods-classify="goodsClassify"
    :goods-list="goodslist"
    @goodsList="goodsListFun"/>
</template>

<script>
  import storeDetail from '../../components/storeDetail'
  export default {
    components: {
      storeDetail
    },

    data () {
      return {
        goodsList: [
          {
            name: '新鲜水果',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 9,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 11.99,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '时令蔬菜',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '毛白菜',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '上海青',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '生菜',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '肉蛋家禽',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '仁达鲜鸡蛋',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '海鲜荟萃',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '黄花鱼条',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '牛奶酸奶',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '休闲零食',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '冲调饮料',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '冷藏冷冻',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '熟食快餐',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '面包蛋糕',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '中外名酒',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '粮油副食',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '干货杂粮',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          },
          {
            name: '日用百货',
            goodsDetail: [
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              },
              { img1: '/static/images/grapes.png',
                name: '巨峰葡萄',
                weight: '500g',
                sales: 52,
                evaluate: 61,
                price: 10.8,
                img2: '/static/images/add.png'
              }
            ]
          }
        ],
        merchantId: null,
        goodsClassify: [],
        merchantlist: [],
        goodsSortId: null,
        goodslist: []
      }
    },
    mounted () {
      this.goodsListFun('1UXSPX3XDKLZP3F3')
    },
    methods: {
      goodsListFun: function (goodsId) {
        this.goodsSortId = goodsId
        const _this = this
        wx.request({
          url: 'http://192.168.1.21:8070/WebHandler/LiuGetGoodsHandler.ashx',
          method: 'POST',
          data: {
            type: 'GoodsList',
            goodsSortId: this.goodsSortId
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success (res) {
            _this.goodslist = res.data.goodslist
          }
        })
      }
    },
    onLoad (res) {
      const _this = this
      this.merchantId = res.merchantId
      console.log(res)
      wx.request({
        url: 'http://192.168.1.21:8070/WebHandler/LiuGetGoodsHandler.ashx',
        method: 'POST',
        data: {
          type: 'GoodsClassify',
          merchantId: this.merchantId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res) {
          console.log(res)
          _this.goodsClassify = res.data.goodsclassify
          _this.merchantlist = res.data.merchantlist[0]
        }
      })
      console.log(this.merchantlist + 'liu青')
    }

  }
</script>

<style>

</style>

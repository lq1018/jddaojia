<template>
  <store-detail
    :store-ifo="storeIfo"
    :goods-list="goodsList"/>
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
        storeIfo: {
          name: '沃尔玛-鼓山店',
          logoImg: '/static/images/walmart.png',
          time: '51分钟',
          freight: 6
        }
      }
    }}
</script>

<style>

</style>

<template>
  <div class="wrap">
   <merchant-list
    :merchant-list="merchantList"
     v-for="(item,index) in merchantList"
     :item="item"
     :key="index"
      @nextPage="$nextPage('/pages/storeDetail/main?id=' + index)"/>
  </div>
</template>

<script>
  import merchantList from '../../components/MerchantList'
  export default {
    name: 'index',
    components: {merchantList},
    data () {
      return {
        merchantList: [
          {
            name: '沃尔玛-鼓山店',
            logoSrc: '/static/images/walmart.png',
            sales: 999,
            sendPrice: 18,
            basisPrice: 6,
            time: '45分钟',
            distance: '2.3km',
            deliveryName: '达达专送',
            id: 0,
            discountsList: [
              {
                name: '红包',
                title: '兑5元红包',
                type: 'hb'
              },
              {
                name: '领券',
                title: '免5元运费，满5元免5元运费，满48元免4元运费,认识我那个分解机积分IE见覅偶',
                type: 'lq'
              },
              {
                name: '返券',
                title: '实付满89元订单完成后返20元优惠券(每天1单)',
                type: 'fq'
              },
              {
                name: '满减',
                title: '欧莱雅满88减38，满176减76，满264减114',
                type: 'mj'
              }
            ],
            nearStore: [
              {
                name: '沃尔玛-长城分店',
                time: '55分钟',
                distance: '2.5km'
              },
              {
                name: '沃尔玛-王庄分店',
                time: '30分钟',
                distance: '1.0km'
              }
            ]
          },
          {
            name: '永辉到家-鼓山店',
            logoSrc: '/static/images/yh.png',
            sales: 459,
            sendPrice: 18,
            basisPrice: 3,
            time: '50分钟',
            distance: '2.5km',
            deliveryName: '达达专送',
            id: 1,
            discountsList: [
              {
                name: '领券',
                title: '免5元运费，满5元免5元运费，满48元免4元运费,认识我那个分解机积分IE见覅偶',
                type: 'lq'
              },
              {
                name: '返券',
                title: '实付满89元订单完成后返20元优惠券(每天1单)',
                type: 'fq'
              },
              {
                name: '满减',
                title: '欧莱雅满88减38，满176减76，满264减114',
                type: 'mj'
              }
            ],
            nearStore: [
              {
                name: '永辉-长城分店',
                time: '55分钟',
                distance: '2.5km'
              }
            ]
          },
          {
            name: '星巴克-王庄店',
            logoSrc: '/static/images/xbk.png',
            sales: 565,
            sendPrice: 0,
            basisPrice: 4,
            time: '30分钟',
            distance: '1.0km',
            deliveryName: '达达专送',
            id: 2,
            discountsList: [
              {
                name: '红包',
                title: '兑5元红包',
                type: 'hb'
              },
              {
                name: '领券',
                title: '免5元运费，满5元免5元运费，满48元免4元运费,认识我那个分解机积分IE见覅偶',
                type: 'lq'
              }
            ]
          },
          {
            name: '知间-鼓山店',
            logoSrc: '/static/images/zhijian.png',
            sales: 344,
            sendPrice: 15,
            basisPrice: 6,
            time: '30分钟',
            distance: '2.5km',
            deliveryName: '达达专送',
            id: 3,
            discountsList: [
              {
                name: '红包',
                title: '兑5元红包',
                type: 'hb'
              },
              {
                name: '领券',
                title: '免5元运费，满5元免5元运费，满48元免4元运费,认识我那个分解机积分IE见覅偶',
                type: 'lq'
              },
              {
                name: '返券',
                title: '实付满89元订单完成后返20元优惠券(每天1单)',
                type: 'fq'
              },
              {
                name: '满减',
                title: '欧莱雅满88减38，满176减76，满264减114',
                type: 'mj'
              }
            ],
            nearStore: [
              {
                name: '知间-长城分店',
                time: '50分钟',
                distance: '4.5km'
              }
            ]
          }]
      }
    }
  }
</script>

<style scoped>

</style>

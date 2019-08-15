<template>
  <div class="wrap">
   <merchant-list
    :merchant-list="merchantList"
     v-for="(item,index) in merchantList"
     :item="item"
     :key="index"
      @nextPage="$nextPage('/pages/storeDetail/main?merchantId=' + item.merchantId)"/>
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
            id: 0,
            sales: 999,
            deliveryName: '达达专送',
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
            id: 1,
            sales: 459,
            deliveryName: '达达专送',
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
            id: 2,
            sales: 565,
            deliveryName: '达达专送',
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
            id: 3,
            sales: 344,
            deliveryName: '达达专送',
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
          }],
        merchantSortId: null
      }
    },
    onLoad (res) {
      const _this = this
      this.merchantSortId = res.MerchantId
      wx.request({
        url: 'http://192.168.1.21:8070/WebHandler/LiuGetGoodsHandler.ashx',
        method: 'POST',
        data: {
          type: 'MerchantList',
          merchantSortId: this.merchantSortId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res) {
          let merchantList = res.data.merchantlist
          let len = merchantList.length
          for (let i = 0; i < len; i++) {
            _this.merchantList[i].name = merchantList[i].MerchantName
            _this.merchantList[i].logoSrc = merchantList[i].MerchantLogo
            _this.merchantList[i].time = merchantList[i].DeliveryTime
            _this.merchantList[i].distance = merchantList[i].Distance
            _this.merchantList[i].sendPrice = merchantList[i].SendOutPrice
            _this.merchantList[i].basisPrice = merchantList[i].BasedPrice
            _this.merchantList[i].merchantId = merchantList[i].MerchantListId
          }
          console.log(_this.merchantList[0])
        }
      })
    }
  }
</script>

<style scoped>

</style>

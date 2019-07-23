<template>
<div class="wrap">
  <div class="top">
   <div class="top-left">
     <img src="/static/images/walmart.png" alt="">
     <div class="store">
       <div class="storeName">沃尔玛-鼓山店</div>
       <div class="storeOther">
         <span>达达专送-51分钟</span> | 基础运费6元
       </div>
     </div>
   </div>
    <div class="top-right">
      <div class="collect" :class="{acitve : lock}" @click="isAcitve">
      </div>
      <div class="vip">
        <img src="/static/images/VIP.png" alt="">
      </div>
    </div>
  </div>
  <div class="content">
    <div class="con-left">
     <span v-for="(goods,index) in goodsList" :class="{goodsActive : openId === index}" @click="add(index)">{{goods.name}}</span>
    </div>
    <div class="con-right" >
      <ul v-show="openId === index1" v-for="(goods1,index1) in goodsList">
        <li v-for="(everyGoods,index2) in goods1.goodsDetail">
          <div class="goodsImg">
            <img :src="everyGoods.img1" alt="">
          </div>
          <div class="goodsDetail">
            <div class="goodsName">
              {{everyGoods.name}} 约{{everyGoods.weight}}
            </div>
            <div class="goodsSales">
              月售{{everyGoods.sales}}件 | 好评{{everyGoods.evaluate}}%
            </div>
            <div class="goodsPrice">
              <span>￥{{everyGoods.price}}</span>
              <img :src="everyGoods.img2" alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        lock: false,
        openId: 0,
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
          }
        ]
      }
    },
    methods: {
      isAcitve: function () {
        this.lock = !this.lock
      },
      add: function (index) {
        this.openId = index
      }
    }
  }
</script>

<style scoped>
.top{
  padding: 10px;
  background-color: #5cb154;
  display: flex;
  justify-content: space-between;
}
  .top .top-left{
    display: flex;
  }
  .top-left img{
    width: 50px;
    height: 50px;
    margin-right: 6px;
  }
  .top-left .storeName{
    color: #ffffff;
    margin-bottom: 3px;
  }
  .top-left .storeOther{
    font-size: 10px;
    color: #ffffff;
  }
  .top-left .storeOther span{
    border: 1px solid #ffffff;
  }
  .top-right{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .top-right .collect{
    width: 20px;
    height: 20px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABp0lEQVRYR8WXjVGDQBCFcxVoCbEC7UCsQK1AU4FYgaYCYwWGCkwqEDvQCowVqBXge7pEQA72LptwMzsMM7vvfffHHW40cHMD+49aAYqiGAPsFJEg9hF8X0ksnHPLNnDUHUvNEZ4M1nwicsQSdXyvtX8AELlBRirGvgGi0DUEF0xADc0exNRXQ5AZaqbVhDUARNjTpx6Rpvit9JBP1mvaC5JOAEKg3ymINNeY+XLWECXADJlXmyhG1N5jFFInC+4tQsCi5IAAXHB3FmoRGlMC5Cjk9hmiPRPgI2AFm0MSoDBXDRAkALfEYUCNZeo7AeZQvLBUDdDKht4FEwLwE7pC7AWQW6R+QWRcfgnP8PJooRqgcc7DrHoY8WTjEbyLxqOZnf67D8hUEGLbH6VXeCS107Da5S3vigxeaWleG4EdQGQwvmzOr/dOaDwSrebeESgpjSC85r0ATNgQotNcBSAQMXeGnxtP355W/xdgJLiAePPVtAnM55pENYCMhAZCba6egsYW7YIIMo8C6BiJYPNoAIFI8OR1no1ft1wz582coDUQY9BXMzjAN3MnnlRpLv4fAAAAAElFTkSuQmCC);
    background-size: 100%;
    margin-bottom: 5px;
  }
  .top-right .acitve{
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAChUlEQVRYR8WXzVLTUBTHzwmL6lAVnXFoWeETeNMXaHwABnwCYQNL6/AAtntmxCVswCewnWFvfQDauGVj3FDAGYm2C3Ekx3OuBpPSNGlowp3pdJrcc/6/ez7uvUW45YG3rA8jAXpKLfKLZTAMC4jmGHKRPw4iOuR5zZJtt0aBfzXNqodoEYBiOyU2gOiC57X5Wats286w3TWA00rlNRHV2FCERw8iB4lezdt2UyacKaVYeI9tRDTKxuUFbM93Oo3ghCuAc6XmLhA/jHUy5JqN6xwRl23qY4GDdkR2gejZQ9t25bEGGCWOxSIULAtmFhZgplyGH40Q+M1KJwChAU4qlW3+eul7FeF7m5ta/PfREVweH4PLv6c83pY6nRrqgjOMz77zu0tLcL9eh4t2G/pbW3DZ601Z9787Tt8T5NXX+NEbnQ8O++ODA/h1eJjFiq8thDujgT3TbHN1VuVtcWMDZtfX4axaBRoMMlu575i77SOemOa5X8GPdnf1u28MkdeQFHAk/g4BkPAPdnby0geJgM0ReCqK0m5ev59L+EWPU/BFamCfa+BFbksOCDHAu1AX5A3BbbiGehc0DIfFH+QM8L3geXLoAZwqtUKG8T5PAPS853KYXR1GXIxNLsblXCCIWqVud0W0QqfhT8SmvyllBkL0iU9DK3QaBsWy7Aqp+jt81/DFQxHIGkLEy93u6nBkI++E04xElHhkBHzKaUCME48FkAk3gYgTTwQgk4J3hgm6Q9944uYn/l/AN6dVvjntxTnUhwxvsXwF308yNzGATkcCiEnEE6cg1KJjICYVTwUQFYk04qkB/kFY8k9H55x3N855O0nOE29EaZylsZmoCNMIxNn8ATRNHxmBv4xXAAAAAElFTkSuQmCC);
  }
  .top-right .vip img{
    width: 48px;
    height: 24px;
  }
  .content{
    display: flex;
  }
  .content .con-left{
    width: 20%;

  }
  .con-left span{
      display: inline-block;
    width: 100%;
      line-height: 50px;
      font-size: 14px;
    text-align: center;
    background-color: #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
  }
  .con-left span.goodsActive{
    background-color: #f8f8f8;
    color: #5cb154;
  }
  .con-right {
    width: 80%;
  }
  .con-right li{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #cccccc;

  }
  .con-right .goodsImg img{
    width: 60px;
    height: 60px;
  }
  .con-right .goodsDetail{
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
  .goodsPrice img{
    width: 30px;
    height: 30px;
  }


</style>

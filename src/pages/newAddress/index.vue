<template>
<div class="wrap">
  <form @submit="formSubmit" bindreset="formReset">
  <ul class="adresList">
    <li>
      <div class="title">所在城市:</div>
      <picker mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem">
        <view class="picker">
          {{region[0]}}，{{region[1]}}，{{region[2]}}
        </view>
      </picker>
      <span>
        <img src="/static/images/right.png" alt="">
      </span>
    </li>
    <li>
      <div class="title">详细地址：</div>
      <input class="addDetail" type="text" name="address" placeholder="具体到哪个街道、镇,小区名和门牌号">
    </li>
    <li>
      <div class="title">收货人：</div>
      <input class="addDetail" type="text" name="name" placeholder="请填写收货人的姓名">
    </li>
    <li>
      <div class="title">联系电话：</div>
      <input class="addDetail" type="text" name="phone" placeholder="请填写收货人手机号码">
    </li>
  </ul>
    <div class="saveBtn">
      <button form-type="submit">保存</button>
    </div>
  </form>


</div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        region: ['福建省', '福州市', '晋安区'],
        customItem: '全部'
      }
    },
    methods: {
      bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.mp.detail.value)
        this.region = e.mp.detail.value
      },
      sub: function (e) {
        console.log(e)
      },
      formSubmit: function (e) {
        const arr = e.mp.detail.value
        if (!(/^1[345678]\d{9}$/.test(arr.phone))) {
          wx.showModal({
            title: '提示',
            content: '请输入正确的手机号'
          })
        } else if (!arr.name) {
          wx.showModal({
            title: '提示',
            content: '请输入收件人姓名'
          })
        } else if (!arr.address) {
          wx.showModal({
            title: '提示',
            content: '请输入详细地址'
          })
        }
      }
    }
  }
</script>

<style scoped>
.adresList{
  padding: 0 6px;
}
  .adresList li{
    background-color: #e4e4e4;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .adresList li .title{
    font-size: 14px;
  }
  .adresList li span img{
    width: 20px;
    height: 20px;
  }
  .picker{
    font-size: 14px;
  }
  .adresList li .addDetail{
    flex: 1;
    height: 60px;
    line-height: 60px;
    font-size: 12px;
  }
  .saveBtn{
    width: 80%;
    margin: 20px auto;
  }
  .saveBtn button{
    outline: none;
    background-color: #09bb07;
    color: #ffffff;
    font-size: 18px;
  }
</style>

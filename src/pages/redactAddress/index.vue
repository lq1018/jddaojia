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
          <input class="addDetail" type="text" name="address" v-model="address" placeholder="具体到哪个街道、镇,小区名和门牌号">
        </li>
        <li>
          <div class="title">收货人：</div>
          <input class="addDetail" type="text" name="name" v-model="receiver" placeholder="请填写收货人的姓名">
        </li>
        <li>
          <div class="title">联系电话：</div>
          <input class="addDetail" type="text" name="phone" v-model="telephone" placeholder="请填写收货人手机号码">
        </li>
        <li>
          <div class="title">标签：</div>
          <div class="lable">
            <span v-for="(item,index) in labelList" :class="{active : index===isId}" @click="isActive(index)" :key="index">{{item}}</span>
          </div>
        </li>
      </ul>
      <div class="saveBtn">
        <button form-type="submit">保存</button>
      </div>
      <div class="deleteAddress" @click="deleteAddress">
        <span><img src="/static/images/delete.png" alt=""></span>
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
        customItem: '全部',
        labelList: ['家', '公司', '学校'],
        isId: '',
        address: null,
        receiver: null,
        telephone: null,
        addressId: null
      }
    },
    methods: {
      bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.mp.detail.value)
        this.region = e.mp.detail.value
      },
      formSubmit: function (e) {
        const arr = e.mp.detail.value
        const _this = this
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
        } else {
          wx.request({
            url: 'http://192.168.1.21:8070/WebHandler/LiuAddressHandler.ashx',
            method: 'POST',
            data: {
              type: 'updateAddress',
              addressId: this.addressId,
              receiver: this.receiver,
              address: this.address,
              telephone: this.telephone,
              label: this.labelList[this.isId],
              province: this.region,
              userId: getApp().globalData.$user.LiuUserId
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success (res) {
              _this.$backPage('/pages/manageAddress/main')
            }

          })
        }
      },
      isActive: function (index) {
        this.isId = index
      },
      deleteAddress: function () {
        // 显示模态对话框
        const _this = this
        wx.showModal({
          title: '温馨提示',
          content: '确定删除该地址吗？',
          success (res) {
            if (res.confirm) {
              wx.request({
                url: 'http://192.168.1.21:8070/WebHandler/LiuAddressHandler.ashx',
                method: 'POST',
                data: {
                  type: 'deleteAddress',
                  addressId: _this.addressId
                },
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                success (res) {
                  _this.$backPage('/pages/manageAddress/main')
                }
              })
            }
          }
        })
      }
    },
    onLoad (res) {
      const _this = this
      this.addressId = res.AddressId
      wx.request({
        url: 'http://192.168.1.21:8070/WebHandler/LiuAddressHandler.ashx',
        method: 'GET',
        data: {
          type: 'getAddress1',
          addressId: this.addressId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res) {
          let resArry = res.data.theAddress[0]
          const laber = resArry.Laber
          _this.isId = _this.labelList.findIndex(item => item === laber)
          _this.region = resArry.Province.split(',')
          console.log(_this.region)
          _this.address = resArry.Address
          _this.receiver = resArry.Receiver
          _this.telephone = resArry.Telephone
          _this.addressId = resArry.LiuAddressId
        }
      })
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
    height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .adresList li:last-child{
    justify-content: start;
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
  .adresList li .lable span{
    margin-right: 5px;
    width: 40px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    border: 1px solid #ffffff;
  }
  .adresList li .lable span.active{
    background-color: #66ae5c;
    color: #ffffff;
  }
  .deleteAddress {
    margin-top: 20px;
    text-align: center;
  }
  .deleteAddress span {
    width: 40px;
    height: 40px;
    background-color: #f8f8f8;
    border-radius: 50%;
  }
  .deleteAddress span img{
    width: 30px;
    height: 30px;
  }
</style>

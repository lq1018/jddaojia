<template>
  <div>
    <MerchantList
         :merchantList="merchantList"
         :discountList="discountsList"
         :nearStore="nearStore"/>
  </div>
</template>
<script>
  import store1 from '../balance/store'
  export default {
    name: 'index',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>

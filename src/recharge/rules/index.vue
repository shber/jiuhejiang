<!--
 * @Author: Shber
 * @Date: 2023-11-27 16:58:13
 * @LastEditors: Shber
 * @LastEditTime: 2023-11-30 21:19:09
 * @Description: 
-->
<template>
  <view class="recharge_rules">
    <view v-html="html"></view>
  </view>
</template>

<script>
  export default {
    name: "rechargeUser",
    data() {
        return {
            html: ''
        }
    },
    onLoad(options) {
        this.getDataInfo()
    },
    methods: {
        async getDataInfo (){
            uni.showLoading({mask: true, title: '加载中...',})

            try{
                let info =  await this.$request({
                    url: this.$api.myrecharge.bangStatus,
                    data: {}
                })
                let { code, data, msg } = info;
                if (code === 1) {
                    this.html = data.user_info.advance_deposit_explain
                } else {
                    // uni.showToast({title: msg, icon: 'none'});
                }
            }catch(e){
            }
            uni.hideLoading();;
        }
    }
  }
</script>

<style scoped lang="scss">
.recharge_rules{padding: 24rpx;}
</style>
<!--
 * @Author: Shber
 * @Date: 2023-11-27 16:55:52
 * @LastEditors: Shber
 * @LastEditTime: 2023-12-04 11:34:00
 * @Description: 
-->
<template>
  <app-layout>
    <view class="recharge_user recharge_shadow">
        <view v-if="dataInfo.verify_status == 1" class="padding_content">
            <image src="/static/image/recharge/index_bg.png" class='bg'></image>
            <view class="card_info">
            <view class="house_info">
                <text class="label">房屋信息</text>
                <button class="button" @click="cancelBind">解除绑定</button>
            </view>
            <view class="info_group">
                楼宇：<text class="mr_20">{{userInfo.build_name}}</text>
                单元：<text class="mr_20">{{userInfo.unit}}</text>
                楼层：<text class="mr_20">{{userInfo.floornum}}</text>
                房号：<text>{{userInfo.number}}</text>
            </view>
            <view class="together" @click="goPath('/recharge/user_list/index')"><text>同住人列表</text> 
                <image src="/static/image/recharge/right.png" class='turn_right'></image>
            </view>
            </view>
            <view class="card_info">
            <view class="house_info">
                <text class="label">物业预存金</text>
                <view class="left_laber" @click="goPath('/recharge/rules/index')">        
                <image src="/static/image/recharge/question.png" class='icon_question'></image>
                预存金说明</view>
            </view>
            <view>
                <text class="money_title">金额（元）</text>
                <text class="money_num">¥{{userInfo.price}}</text>
            </view>
            <view class="gray_line"></view>
            <view class="input_money">
                <input v-model="price" type="number" @input="handleInput" maxlength="9" class="input-money" placeholder="请输入金额" />
            </view>
                <button class="submit_button" type="primary" @click="recharge">充值</button>
            </view>

            <view class="bottom_group">
            <view @click="goPath('/recharge/list/index')">
                <image src="/static/image/recharge/bottom1.png" class='bottom_img'></image>
            </view>
            <view @click="goPath('/recharge/bill_list/index')">
                <image src="/static/image/recharge/bottom2.png" class='bottom_img'></image>
            </view>
            </view>
        </view>

        <view class="status_group" v-else>
            <image v-if="dataInfo.verify_status == 0" src="/static/image/recharge/status1.png" class='status_img'></image>
            <image v-else src="/static/image/recharge/status2.png" class='status_img1'></image>

            <text class="status_text"> {{ dataInfo.verify_status == 2 ? '申请驳回，请再次申请...': '申请审核中，请耐心等待...' }} </text>
            <view class="remark" v-if="dataInfo.verify_status == 2">
                {{dataInfo.reason}}
            </view>
        </view>
        <view class="full_bg" v-if="dataInfo.verify_status == 2"></view>
        <button class="fixed_button" type="primary" v-if="dataInfo.verify_status == 2" @click="rePlay">再次申请</button>

    </view>
  </app-layout>
</template>

<script>
    import '../index.scss'
    export default {
        name: "rechargeUser",
        data() {
            return {
                price:'',
                dataInfo: {
                    verify_status:0,
                    user_info:{}
                },
                userInfo:{}
            }
        },
        components: {
        },
        onLoad(options) {
            this.getDataInfo()
        },
        methods: {
            handleInput(e){
                this.price = this.price.replace(/\D/g, '');
            },
            async recharge(){
                try{
                    if(!this.price){return false}
                    uni.showLoading({mask: true, title: '充值中...',})
                    let info =  await this.$request({
                        url: this.$api.myrecharge.recharge,
                        method:'post',
                        data: {price:this.price}
                    })
                    let { code, data, msg } = info;
                    if (code === 1) {
                        this.getDataInfo()
                        this.price = ''
                        // uni.navigateTo({ url: '/pages/user-center/user-center' });
                    }
                }catch(e){
                    uni.showToast({title: e, icon: 'none'});
                }
                uni.hideLoading();;
            },
            goPath(url){
                uni.navigateTo({ url: url});
            },
            rePlay(){
                uni.navigateTo({ url: '/recharge/check_user/index?type=1' });
            },
            async cancelBind(){
                try{
                    uni.showLoading({mask: true, title: '加载中...',})
                    let info =  await this.$request({
                        url: this.$api.myrecharge.delBang,
                        data: {}
                    })
                    let { code, data, msg } = info;
                    if (code === 1) {
                        uni.navigateTo({ url: '/pages/user-center/user-center' });
                    } else {
                        // uni.showToast({title: msg, icon: 'none'});
                    }
                    uni.showToast({title: msg, icon: 'none'});
                }catch(e){}
                uni.hideLoading();;

            },
            async getDataInfo (){
                uni.showLoading({mask: true, title: '加载中...',})
                try{
                    let info =  await this.$request({
                        url: this.$api.myrecharge.bangStatus,
                        data: {}
                    })
                    let { code, data, msg } = info;
                    if (code === 1) {
                        this.dataInfo = data
                        this.userInfo = data.user_info
                        console.log(this.dataInfo, data);
                    } else {
                        // uni.showToast({title: msg, icon: 'none'});
                    }
                }catch(e){}
                uni.hideLoading();;
            }
        }
    }
</script>

<style scoped lang="scss">
.status_group{
    padding: 0 30rpx;
    display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 90vh;
.status_img{width: 242rpx; height: 242rpx;}
.status_text{
    font-size: 36rpx;
    font-weight: 500;
    color: #0E2D6A;
    line-height: 44rpx;
    margin-top: 24rpx;
}
.status_img1{width: 166rpx; height: 166rpx;}
.remark{ margin-top: 92rpx; height: 544rpx; padding: 34rpx 26rpx; border-radius: 26rpx; background-color: #f4f5f7;
    overflow-y: scroll; font-size: 36rpx; font-weight: 400; color: #9E9E9E; line-height: 54rpx;}
}
.full_bg{height: 166rpx;}
.fixed_button{position: fixed; z-index: 19; left: 50%; bottom: 30rpx;  transform: translateX(-50%); width: 638rpx; height: 114rpx; line-height: 114rpx; text-align: center; background-color: #4887FF; border-radius: 300rpx;}

// 审核成功的，充值页面
.mr_20{margin-right: 30rpx;}
.padding_content{padding: 0 24rpx;}
.bottom_group{display: flex; align-items: center; justify-content: space-between; padding-bottom: 60rpx;}
.bottom_img{width: 336rpx; height: 130rpx;}
.recharge_index{padding: 0 24rpx;}
  .bg{width:714rpx; height: 252rpx; display: block; margin: 0 auto;}
  .card_info{
    background-color: #fff; border-radius: 20rpx; padding: 20rpx 32rpx 36rpx; margin-bottom: 40rpx;
    .info_group{margin-top: 40rpx; color: #818AA8; font-size: 30rpx; line-height: 38rpx; font-weight: 500;}
    .left_laber{display: flex; align-items: center; font-size: 26rpx; font-weight: 400; color: #9E9E9E;}
    .icon_question{width: 30rpx; height: 30rpx; margin-right: 5rpx;}
    .money_title,.money_num{display: block; text-align: center;}
    .money_title{font-size: 36rpx; margin-top: 56rpx; margin-bottom: 12rpx; font-weight: 400; color: #393D49; line-height: 36rpx;}
.money_num{font-size: 56rpx;font-weight: 500; color: #4887FF;}
.input-money{height: 116rpx; line-height: 116rpx; padding: 0 34rpx; background-color: #F3F3F3; border-radius: 20rpx;}
.gray_line{width: 100%; border-top: 6rpx dashed #eee; margin: 36rpx 0 54rpx; position: relative;
  &::before, &::after{
    content: '';
    display: block;
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    background-color: #f7f7f7;
    position: absolute;
    top: calc(50% - 6rpx) ; transform: translateY(-50%);
  }
  &::before{left: -60rpx;}
  &::after{right: -60rpx;}
}
    .submit_button{margin: 62rpx auto 0rpx;
    width: 522rpx;
    height: 108rpx;
    line-height: 108rpx;
    background: #4887FF;
    border-radius: 382rpx;
    }
    .turn_right{width: 60rpx; height: 60rpx;}
    .together, .house_info{ width: 100%; display: flex; align-items: center; justify-content: space-between;}
    .together{height: 92rpx; display: flex; align-items: center; background-color: #F0F4FA; border-radius: 14rpx; padding: 0 26rpx 0 36rpx; color: #0A204D; margin-top: 28rpx;}
    .button{width: 188rpx;
      text-align: center;
      height: 58rpx;
      font-size: 28rpx;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 58rpx;
      background: #4887FF;
      border-radius: 310rpx;
      opacity: 1;
      margin: 0;
    }

  }
  .label{
    display: flex; align-items: center;
    font-size: 36rpx;
    height: 28rpx;
    font-weight: 500;
    color: #0A204D;
    line-height: 28rpx;
    &:before{
        content: '';
        display: block;
        width: 16rpx;
        height: 16rpx;
        margin-right: 8rpx;
        border-radius: 50%;
        background-color: #4887FF;
    }
}

</style>
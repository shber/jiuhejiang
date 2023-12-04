<!--
 * @Author: Shber
 * @Date: 2023-11-27 16:58:01
 * @LastEditors: Shber
 * @LastEditTime: 2023-12-01 18:47:10
 * @Description: 
-->
<template>
    <app-layout>
        <view class="rechargeList">
            <view class="list" v-for="item in payList" :key="item.id">
                <view class="list_left">
                    <image src="https://yewi.vvv6g.cn/web/mini_images/recharge/fast.png" class='icon_fast'></image>
                    <view>
                        <view class="house_group">
                            楼宇:<text class="mr_5">{{item.build_name}}</text> 
                            单元:<text class="mr_5">{{item.unit}}</text> 
                            楼层:<text class="mr_5">{{item.floornum}}</text> 
                            房号:<text>{{item.number}}</text>
                        </view>
                        <view class="time_text">
                            <image src="https://yewi.vvv6g.cn/web/mini_images/recharge/time.png" class='icon_time'></image>
                            {{item.created_at}}
                        </view>
                    </view>
                </view>
                <text class="money_right">{{item.price}}</text>
            </view>
        </view>
    </app-layout>
</template>

<script>
  export default {
    name: "rechargeList",
    data() {
        return {
            payList: [],
            page:1,
            noData:false,
        }
    },
    onReachBottom(){
        if(this.noData){
            return uni.showToast({title: '暂无更多数据', icon: 'none'});
        }
        this.page+=1
        this.getpayLog()
    },
    onLoad(options) { 
        this.getpayLog()
    },
    methods: {
        async getpayLog (){
            uni.showLoading({mask: true, title: '加载中...',})
            try{
                let info = await this.$request({
                    url: this.$api.myrecharge.payLog,
                    data: {page: this.page}
                })
                let { code, data, msg } = info;
                if (data.length) {
                    this.payList = [...this.payList, ...data]
                } else {
                    this.noData = true
                }
            }catch(e){}
            uni.hideLoading();
        }
    }
  }
</script>

<style scoped lang="scss">
.rechargeList{padding: 0 24rpx;}
.list{ margin-top: 20rpx; display: flex; justify-content: space-between; align-items: center;
    background: #FFFFFF; border-radius: 22rpx; padding: 32rpx 18rpx;
    .icon_fast{width: 80rpx; height: 80rpx; margin-right: 12rpx;}
    .list_left{display: flex; align-items: center;}
    .mr_5{margin-right: 20rpx;}
    .house_group{font-size: 28rpx; font-weight: 500; color: #333333; line-height: 38rpx;}
    .time_text{display: flex; align-items: center; font-size: 24rpx; margin-top: 20rpx; font-weight: 400; color: #9E9E9E; line-height: 28rpx; 
    .icon_time{width: 20rpx; height: 21rpx; margin-right: 10rpx;}}
    .money_right{font-size: 32rpx; text-align: right; width: 140rpx; font-weight: 600; color: #333333;}
}
</style>
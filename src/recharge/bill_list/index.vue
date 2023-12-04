<!--
 * @Author: Shber
 * @Date: 2023-11-27 16:57:20
 * @LastEditors: Shber
 * @LastEditTime: 2023-12-02 10:56:44
 * @Description: 
-->
<template>
    <app-layout>
        <view class="recharge_bill">
            <view class="top_bar">
                <view :class="{'li':true, 'active': tab.val === status}" v-for="tab in tabInfo" :key="tab.val" @click="checkTab(tab)">
                    {{tab.label}}
                </view>
            </view>
            <view class="list_box" v-if="list.length >0">
                <view class="list" v-for="item in list" :key="item.id">
                    <label class="label_group" @click="checkboxItem($event, item, item.status != '1')">
						<checkbox :disabled="item.status != '1'" value="cb" color="#4887FF" style="transform:scale(0.7)" />
                        <view class="flex_right">
                            <view class="flex_center">
                                <view style="display: flex; align-items: center;">
                                    <image src="/static/image/recharge/time.png" class='icon_time'></image>
                                    <text class="time_text">{{item.created_at}}</text>
                                </view>
                                <text class="status_text status1" v-if="item.status === '1'">待缴费</text>
                                <text class="status_text status2" v-else-if="item.status === '1'">已缴费</text>
                                <text class="status_text" v-else>免缴费</text>
                            </view>
                            <view style="display: flex; align-items: center;">
                                <image src="/static/image/recharge/fast.png" class='icon_fast'></image>
                                <view>
                                    楼宇: <text class="mr_5">{{item.build_name}}</text> 
                                    单元: <text class="mr_5">{{item.unit}}</text> 
                                    楼层: <text class="mr_5">{{item.floornum}}</text> 
                                    楼号: <text>{{item.number}}</text>
                                </view>
                            </view>
                            <view class="bottom_right">
                                <view class="right_points">
                                    <!-- 积分抵扣：{{dataInfo.dikou_price_max}} -->
                                </view>
                                <view class="right_money">缴费金额：{{item.price}}</view>
                            </view>
                        </view>
					</label>
                </view>
            </view>
            <view v-else class="empty_group"> 
                <image src="/static/image/recharge/empty.png" class='empty'></image>
                暂无数据
            </view>
            <view class="fixed_group" v-if="list.length > 0">
                <view class="text">共记：<text class="money">¥{{allcost}}</text> 
                    <text class="points">积分抵扣：{{allscore}}</text>
                </view>
                <button class="fixed_button" type="primary" @click="createOrder">立即缴费</button>
            </view>
        </view>

        <view class="dialog_bg" v-if="changeShow" @click="changeShow = false">
            <view class="dialog" @click.stop>
                <text class="title">支付方式</text>
                <text class="p">支付金额：{{realPrice}} 元</text>
                <radio-group @change="radioChange">
                    <label class="uni-list-cell uni-list-cell-pd ordio_item" v-for="(item, index) in itemsInfo" :key="item.val">
                        <view class="img_group">
                            <image :src="item.val == '1' ? '/static/image/recharge/money.png' : '/static/image/recharge/wechat.png' " class='rodio_icon'></image>
                            <view>
                                <text class="radio_name">{{item.name}}</text>
                                <text v-if="item.val == '1'" class="radio_text">账户余额：{{dataInfo.price}}</text>
                            </view>
                        </view>
                        <view>
                            <radio color="#4887FF" style="transform:scale(0.7)" :value="item.val" :checked="item.val === itemCurrent" />
                        </view>
                    </label>
                </radio-group>
                <button class="dialog_button" @click="sellSave">提交</button>
            </view>
        </view>

    </app-layout>
</template>

<script>
  export default {
    name: "rechargeBill",
    data() {
        return {
            changeShow:false,
            page:1,
            status:0,//缴费状态 1待缴 2已缴 3免缴
            allcost: 0,// 总花费
            allscore: 0, // 总积分抵扣
            tabInfo:[
                {label: '全部', val: 0},
                {label: '待缴费', val: 1},
                {label: '已缴费', val: 2},
                {label: '已免缴', val: 3},
            ],
            dataInfo:{
                price: "0.00",
                dikou_price_max: 0
            },
            list:[],
            checkItem:[],
            itemCurrent: '1',
            itemsInfo:[{name:'预支金', val:'1'}, {name:'微信支付', val:'2'}],
            realPrice: 0, // 实际支付
            order_id: '', // 订单id
        }
    },
    components: {
    },
    onReachBottom(){
        if(this.noData){
            return uni.showToast({title: '暂无更多数据', icon: 'none'});
        }
        this.page+=1
        this.getDataList()
    },
    onLoad(options) { 
        this.getDataList()
    },
    methods: {
        async createOrder(){
            if(this.allcost <= 0){
                return uni.showToast({title: '无需缴费', icon: 'none'});
            }

            let ids = this.checkItem.map(item=>item.id)
            this.realPrice = this.allcost - this.allscore
            console.log(ids, this.realPrice, this.allcost, this.allscore, this.checkItem);
            uni.showLoading({mask: true, title: '订单创建中...',})
            try{
                let info =  await this.$request({
                    url: this.$api.myrecharge.submitOrder,
                    method: 'post',
                    data: {
                        bill_ids: ids, 
                        price: this.allcost,
                        price_real: this.realPrice,
                        integral: this.allscore,
                        house_id: this.checkItem[0].house_id
                    }
                })
                let { code, data, msg } = info;
            if (code === 1) {
                this.changeShow = true
                this.order_id = data.id
            } else {
                uni.showToast({title: msg, icon: 'none'});
            }
            }catch(e){}
            uni.hideLoading();;
        },
        radioChange(e,a){
            console.log(e, a);
            this.itemCurrent = e.detail.value
        },
        async sellSave(){
            if(this.itemCurrent === '1' && this.realPrice > parseInt(this.dataInfo.price)){
                return uni.showToast({title: '余额不足，请选择其他支付方式', icon: 'none'});
            }
            uni.showLoading({mask: true, title: '支付中...',})
            try{
                let info =  await this.$request({
                    url: this.$api.myrecharge.pay,
                    method: 'post',
                    data: {
                        id: this.order_id,
                        type: this.itemCurrent, 
                        price_real: this.realPrice
                    }
                })
                let { code, data, msg } = info;
            if (code === 1) {
                uni.showToast({title: msg, icon: 'none'});
                this.changeShow = false
                this.resetList()
            } else {
                uni.showToast({title: msg, icon: 'none'});
            }
            }catch(e){}
            uni.hideLoading();;
        },
        checkboxItem(e, obj, disabled){
            if(disabled){return false}
            let index = this.checkItem.findIndex(item => item.id === obj.id);
            // 如果找到了匹配的元素，就从数组中移除该元素
            if (index !== -1) {
                this.checkItem.splice(index, 1);
            }else{
                this.checkItem.push(obj) 
            }
            
            // 根据勾选计算总价格
            if(this.checkItem.length > 0){
                this.allcost = this.checkItem.reduce((accumulator, currentValue) => {
                    return accumulator + parseInt(currentValue.price, 10);
                }, 0);
                this.allscore = this.checkItem.reduce((accumulator, currentValue) => {
                    return accumulator + parseInt(currentValue.dikou_price, 10);
                }, 0);
                this.allscore = this.allscore > this.dataInfo.dikou_price_max ? this.dataInfo.dikou_price_max : this.allscore
            }else{
                this.allcost = 0
                this.allscore = 0
            }
        },
        resetList(){
            this.page = 1
            this.noData = false
            this.allcost = 0
            this.allscore = 0
            this.realPrice = 0
            this.list = []
            this.getDataList()
        },
        checkTab(item){
            this.status = item.val
            this.resetList()
        },
        async getDataList(){
            uni.showLoading({mask: true, title: '加载中...',})
            try{
                let info =  await this.$request({
                    url: this.$api.myrecharge.bill,
                    // method: 'post',
                    data: {
                        page: this.page, status: this.status
                    }
                })
                let { code, data, msg } = info;
            if (data.list.length) {
                this.dataInfo = data
                this.list = [...this.list, ...data.list]
            } else {
                this.noData = true
                // uni.showToast({title: msg, icon: 'none'});
            }
            }catch(e){}
            uni.hideLoading();;
        },
    }
  }
</script>

<style scoped lang="scss">
.mr_5{margin-right: 30rpx;}
.empty_group{text-align: center; font-size: 28rpx; color: #999; margin-top: 50rpx;}
.empty{ display: block; width: 240rpx; height: 240rpx; margin: 0 auto 20rpx;}
.recharge_bill{ position: relative; padding-bottom: 280rpx;
    .list_box{padding: 0 24rpx;}
    .top_bar{font-size: 28rpx; font-weight: 400; color: #999999; padding: 28rpx 42rpx; display: flex; justify-content: space-between; align-items: center; background-color: #fff; position: sticky; top: 0; z-index: 99;
        .li{position: relative; padding-bottom: 20rpx; &::after{ content: ''; display: block; width: 48rpx; height: 12rpx; background-color: transparent; border-radius: 20rpx; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); }
    }
    .active{ color: #333; font-weight: 500; &::after{  background-color: #4887FF; }}
    }
    .list{ margin-top: 20rpx; display: flex; justify-content: space-between; align-items: center;
        background: #FFFFFF; border-radius: 22rpx; padding: 20rpx 12rpx;
        .flex_right{width: 600rpx;}
        .label_group{display: flex; align-items: center; justify-content: space-between;}
        .icon_time{width: 20rpx; height: 21rpx; margin-right: 10rpx;}
        .time_text{font-size: 24rpx; font-weight: 400; color: #9E9E9E;}
        .status_text{font-size: 28rpx; font-weight: 500; color: #A5A8AC;}
        .status1{color: #FF4860;}
        .status2{color: #4887FF;}
        .icon_fast{width: 80rpx; height: 80rpx; margin-right: 10rpx;}
        .flex_center{display: flex; align-items: center; justify-content: space-between; margin-bottom: 18rpx;}
        .bottom_right{display: flex; margin-top: 44rpx; justify-content: space-between; align-items: center;}
        .right_points{font-size: 26rpx; font-weight: 400; color: #FF9D41;}
        .right_money{font-size: 30rpx; font-weight: 500; color: #333333;}
    }
    .fixed_group{
        position: fixed; padding: 32rpx 0; bottom: 0; left: 0; z-index: 109; width: 100%; background-color: #fff;
        .text{font-size: 24rpx; color: #9E9E9E; display: flex; align-items: center; justify-content: center;}
        .money{font-size: 32rpx; font-weight: 500; color: #FF4860; margin-right: 32rpx;}
        .points{font-size: 24rpx; font-weight: 500; color: #F19B30;}
        .fixed_button{ width: 638rpx; height: 114rpx; margin-top: 34rpx; line-height: 114rpx; text-align: center; background-color: #4887FF; border-radius: 300rpx;}
    }
}


.ordio_item{display: flex; align-items: center; justify-content: space-between; margin-bottom: 34rpx;}
.img_group{display: flex; align-items: center;}
.rodio_icon{width: 86rpx; height: 86rpx; margin-right: 36rpx;}
.radio_name{ display: block; font-size: 28rpx; font-weight: 500; color: #333333;}
.radio_text{font-size: 26rpx; font-weight: 400; color: #999999;}
.dialog_bg{
display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: 999;
background-color: rgba($color: #000000, $alpha: 0.55);
.dialog{width: 542rpx; background-color: #fff; border-radius: 32rpx; padding: 38rpx 40rpx;}
.title{display: block; font-size: 36rpx; text-align: center; margin-bottom: 43rpx;
font-weight: 500;
color: #333333;}
.p{ display: block; font-size: 32rpx; text-align: center; margin-bottom: 33rpx;
font-weight: 500;
color: #4887FF;
line-height: 46rpx;}
.radio{font-size: 28rpx; display: flex; justify-content: center; align-items: center;
font-weight: 400;
color: #9E9E9E;}
.dialog_button{display: block; font-size: 32rpx; font-weight: 500;
color: #FFFFFF; width: 442rpx; margin-top: 22rpx; padding: 0; height: 100rpx; line-height: 100rpx; text-align: center; background-color: #4887FF; border-radius: 380rpx;}
}

</style>
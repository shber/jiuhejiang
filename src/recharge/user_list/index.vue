<!--
 * @Author: Shber
 * @Date: 2023-11-27 16:58:01
 * @LastEditors: Shber
 * @LastEditTime: 2023-11-30 22:25:18
 * @Description: 
-->
<template>
    <app-layout>
        <view class="rechargeList">
            <view class="list" v-for="item in userList" :key="item">
                <view class="list_left">
                    <view class="user_group">
                        <image :src="item.avatar" class='icon_user'></image>
                        <text class="user_name">{{item.username}}</text>
                    </view>
                    <text class="points">
                    积分：{{item.integral}}
                    </text>
                </view>
                <view class="list_right">
                    <text class="text" @click="openAuto(item)" v-if="item.transfer_open == 1 ">
                        开通自动转赠
                    </text>
                    <view class="text" @click="cancelAuto(item)" v-else>
                        {{ item.transfer_close == 1 ? '取消自动转赠' : '' }}
                    </view>
                    <button class="button" @click="rechange(item)">积分转赠</button>
                </view>
            </view>
        </view>
        <view class="dialog_bg" v-if="autoShow" @click="autoShow = false">
            <view class="dialog" @click.stop>
                <text class="title">开通自动转赠</text>
                <text class="p">开通后该账号获得的积分自动转赠给选定用户</text>
                <label class="radio"><radio @click.stop="is_auto = true" :checked="is_auto" color="#4887FF" style="transform:scale(0.6)" />同意规则积分转赠规则</label>
                <button class="dialog_button" @click.stop="saveauto">确定</button>
            </view>
        </view>

        <view class="dialog_bg" v-if="changeShow" @click="changeShow = false">
            <view class="dialog" @click.stop>
                <text class="title">积分转赠</text>
                <input type="text" v-model="integral" placeholder="请输入转赠积分" class="points_input">
                <button class="dialog_button" @click="sellSave">确定</button>
            </view>
        </view>
    </app-layout>
</template>

<script>
  export default {
    name: "rechargeList",
    data() {
        return {
            userList: [],
            autoShow: false,
            changeShow:false,
            is_auto:false,
            checkitem: {},
            integral:'',
        }
    },
    components: {
    },
    onLoad(options) { 
        this.getUserList()
    },
    methods: {
        async cancelAuto(item){
            uni.showLoading({mask: true, title: '加载中...',})
            try{
                let info =  await this.$request({
                    url: this.$api.myrecharge.transfer,
                    method:'post',
                    data: {
                        type:3,
                        uid:this.checkitem.uid, 
                    }
                })
                let { code, data, msg } = info;
                if (code == 1) {
                    this.resetList()
                } else {}
                uni.showToast({title: msg, icon: 'none'});
            }catch(e){
                uni.showToast({title: e, icon: 'none'});
            }
            uni.hideLoading();;
        },
        openAuto(item){
            this.checkitem = item
            this.autoShow = true
        },
        rechange(item){
            this.checkitem = item
            this.changeShow = true
        },
        async saveauto(){
            let type = 2 // 1自动转赠 2手动转赠 3关闭自动转赠
            if(!this.is_auto){
                return uni.showToast({title: '请选勾选积分转赠规则', icon: 'none'});
            }

            if(this.checkitem.transfer_open == 1){
                type = 1
            }else{
                if(this.checkitem.transfer_close == 1){
                    type = 3
                }else{
                    type = 0
                }
            }
            uni.showLoading({mask: true, title: '加载中...',})
            try{
                let info =  await this.$request({
                    url: this.$api.myrecharge.transfer,
                    method:'post',
                    data: {
                        type:type,
                        uid:this.checkitem.uid, 
                    }
                })
                let { code, data, msg } = info;
                if (code == 1) {
                    this.autoShow = false
                    this.resetList()
                }
                uni.showToast({title: msg, icon: 'none'});
            }catch(e){
                uni.showToast({title: e, icon: 'none'});
            }
            uni.hideLoading();;
            this.autoShow = false
        },
        async sellSave(){
            console.log(this.checkitem, this.integral);
            uni.showLoading({mask: true, title: '加载中...',})
            try{
                let res = await this.$request({
                    url: this.$api.myrecharge.transfer,
                    method:'post',
                    data: {
                        type:2,
                        uid:this.checkitem.id, 
                        integral:this.integral
                    }
                })
                let { code, data, msg } = res;
                if (code == 1) {
                    this.integral = ''
                    this.resetList()
                    this.changeShow = false
                }
                uni.showToast({title: msg, icon: 'none'});
            }catch(e){
                uni.showToast({title: e, icon: 'none'});
            }
            uni.hideLoading();;
        },
        resetList(){
            this.page = 1
            this.userList.length = 0
            this.getUserList()
        },
        async getUserList (){
            uni.showLoading({mask: true, title: '加载中...',})
            try{
                let info =  await this.$request({
                    url: this.$api.myrecharge.together,
                    data: {}
                })
                let { code, data, msg } = info;
                if (data && data.length) {
                    this.userList = data
                }
            }catch(e){}
            uni.hideLoading();;
        }
    }
  }
</script>

<style scoped lang="scss">
.rechargeList{padding: 0 24rpx;}
.points_input{height: 100rpx; line-height: 100rpx; background: #F9F9F9;
border-radius: 18rpx 18rpx 18rpx 18rpx; padding: 0rpx 34rpx;}
.list{ margin-top: 20rpx; display: flex; justify-content: space-between; align-items: center;
    background: #FFFFFF; border-radius: 22rpx; padding: 20rpx 32rpx;
    .icon_user{width: 58rpx; height: 58rpx; margin-right: 14rpx; border-radius: 50%;}
    .user_group{display: flex; align-items: center;}
    .user_name{font-size: 32rpx; width: 400rpx; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 500; color: #0A204D;}
.points{display: block; font-size: 28rpx; margin-top: 22rpx;
font-weight: 500;
color: #9E9E9E;}
.text{font-size: 24rpx; width: 154rpx; display: block; text-align: center;
font-weight: 400;
color: #4887FF;}
.button{ display: block; font-size: 28rpx; font-weight: 500;
color: #FFFFFF; width: 154rpx; margin-top: 30rpx; padding: 0; height: 60rpx; line-height: 60rpx; text-align: center; background-color: #4887FF; border-radius: 300rpx;}
.mr_5{margin-right: 20rpx;}
}

.dialog_bg{
display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: 89;
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
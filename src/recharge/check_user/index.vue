<!--
 * @Author: Shber
 * @Date: 2023-11-27 16:54:27
 * @LastEditors: Shber
 * @LastEditTime: 2023-12-11 12:24:11
 * @Description: 
-->
<template>
	<app-layout>
		  <view class="recharge_check_user recharge_shadow">
			  <text class="title">{{step === 1 ? '请选择您的身份' : '输入信息绑定'}}</text>
			  <view v-if="step === 1">
				<text class="tip">便于我们为您提供最佳服务</text>
				  <view class="check_group">
					<view class="uni-list">
						<radio-group @change="radioChange">
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
								<view class="rodio_group">
									<radio color="#4887FF" style="transform:scale(0.7)" :value="item.value" :checked="identity === item.value"/>
									<view class="use_name">{{item.name}}</view>
								</view>
								<image :src="item.value === '1' ? 'https://yewi.vvv6g.cn/web/mini_images/recharge/boy.png' : 'https://yewi.vvv6g.cn/web/mini_images/recharge/girl.png'" class='user'></image>
							</label>
						</radio-group>
					</view>
				  </view>
			  </view>
			  <view class="" v-else>
          <Boss v-if="identity === '1'" @getForm="getFormData"/>
          <Household @getForm="getFormData" v-else/>
			  </view>
			  
			<button v-if="step === 1" class="fixed_button" type="primary" @click="step = 2">下一步</button>
			<button v-else class="fixed_button" type="primary" @click="submit">绑定</button>
      <!-- <app-datetime-picker v-model="timeShow"/> -->
		  </view>
  </app-layout>
</template>

<script>
  import '../index.scss'
	import Boss from './form/boss.vue'
	import Household from './form/household.vue'
  import AppDatetimePicker from '../../components/basic-component/app-datetime-picker/app-datetime-picker.vue';

  export default {
    name: "rechargeCheckUser",
    data() {
      return {
        step: 1,
        identity: '1',
        items:[
          {name:'我是业主',value:'1'}, 
          {name:'我是住户',value:'2'}
        ],
        buildInfo:[],
        timeShow:true,
        form:{
          name:'',
          mobile:'',
          code:'',
          build_id:'',
          unit:'',
          floornum:'',
          number:'',
          note:''
        }
      }
    },
    components: {
      Boss,
      Household,
      AppDatetimePicker
    },
    onLoad(options) { 
      this.$commonLoad.onload(options);
      if(options.type != '1'){
        this.getDataInfo()
      }
    },
    methods: {
      async getDataInfo (){
          try{
              let info =  await this.$request({
                  url: this.$api.myrecharge.bangStatus,
                  data: {}
              })
              let { code, data, msg } = info;
              if (data.verify_status != null) {
                uni.redirectTo({ url: '/recharge/status/index' });
              }
          }catch(e){}
      },
      radioChange(e){
        this.identity = e.detail.value
      },
      getFormData(val){
        this.form = val
      },
      async submit(){
        var pattern = /^1[3-9]\d{9}$/;

        if(this.identity == '2'){
          if(this.form.build_id == ''){ return  uni.showToast({title: '请选择楼宇', icon: 'none'});}
          if(this.form.unit == ''){ return  uni.showToast({title: '请选择单元', icon: 'none'});}
          if(this.form.floornum == ''){ return  uni.showToast({title: '请选择楼层', icon: 'none'});}
          if(this.form.number == ''){ return  uni.showToast({title: '请选择房号', icon: 'none'});}
          if(this.form.name == ''){ return  uni.showToast({title: '请输入姓名', icon: 'none'});}
        }
        if(!pattern.test(this.form.mobile)){return uni.showToast({title: '请输入正确的手机号', icon: 'none'});}
        if(this.form.code == ''){ return  uni.showToast({title: '请输入短信验证码', icon: 'none'});}

        uni.showLoading({mask: true, title: '加载中...',})
        try{
          let info =  await this.$request({
              url: this.$api.myrecharge.bandUser,
              method: 'post',
              data: {...this.form, role: this.identity}
          })
          let { code, data, msg } = info;
          if (code === 1) {
            uni.redirectTo({ url: '/recharge/status/index' });
          } else {
            uni.showToast({title: msg, icon: 'none'});
          }
        }catch(e){
          uni.showToast({title: e, icon: 'none'});
        }
        // uni.hideLoading();;
      }
    }
  }
</script>
<style>
page, .app-layout-background{background-color: #fff !important;}

</style>
<style scoped lang="scss">
.title{font-size: 44rpx;
font-weight: 500;
color: #0E2D6A;
line-height: 44rpx;
margin-bottom: 24rpx;
}
.tip{
    font-size: 28rpx;
    font-weight: 400;
    color: #0E2D6A;
    line-height: 28rpx;
}
.recharge_check_user{padding: 54rpx 42rpx 0;}
.check_group{
.user{width: 204rpx; height: 204rpx;}
.use_name{margin-left: 44rpx; font-size: 40rpx;
font-weight: 500;
color: #0E2D6A;}
.uni-list-cell{ margin-top: 78rpx; padding: 0 10rpx 0 40rpx; display: flex; align-items: center; justify-content: space-between; background-color: #EDF7FF; border-radius: 22rpx;}
.rodio_group{display: flex; align-items: center;}
}
.fixed_button{position: fixed; z-index: 19; left: 50%; bottom: 30rpx;  transform: translateX(-50%); width: 638rpx; height: 114rpx; line-height: 114rpx; text-align: center; background-color: #4887FF; border-radius: 300rpx;}


.app-layout-background{background-color: transparent !important;}

</style>
<!--
 * @Author: Shber
 * @Date: 2023-11-27 18:05:24
 * @LastEditors: Shber
 * @LastEditTime: 2023-12-02 11:14:55
 * @Description: 
-->
<template>
	<view class="form_content">
		<view class="form_item">
			<text class="label">手机号</text>
			<view style="position: relative;">
				<input type="number" @input="inputChange" v-model="form.mobile" maxlength="11" class="uni-input" placeholder="请输入手机号" />
				<text class="send_code" @click="sendCode" v-if="time == 60">发送验证码</text>
				<text class="send_code" v-else>{{time}}s</text>
			</view>
		</view>
		<view class="form_item">
			<text class="label">验证码</text>
			<input type="number" @input="inputChange" v-model="form.code" maxlength="6" class="uni-input" placeholder="请输入短信验证码" />
		</view>
	</view>
</template>

<script>
	import '../index.scss'
	let interval = null
	export default {
		data() {
			return {
				time:60,
				form:{
					mobile:'',
					code:'',
				}
			}
		},
		components: {

		},
		computed: {

		},
		onLoad() { 

		},
		onReachBottom() {

		},
		destroyed(){
			console.log('组件被销毁');
			clearInterval(interval)
		},
		onHide(){
			clearInterval(interval)
		},
		methods: {
			async sendCode(){
				if(this.form.mobile == ''){
          return uni.showToast({title: '请先输入手机号', icon: 'none'});
				}
				try{
          let info =  await this.$request({
              url: this.$api.myrecharge.sendCode,
							method: 'post',
              data: {mobile: this.form.mobile}
          })
          let { code, data, msg } = info;
          if (code === 1) {
						this.time--
						interval = setInterval(() => {
							this.time--
							if(this.time === 0) {
								clearInterval(interval)
								this.time = 60
							}
						},1000)
          } else {
              uni.showToast({title: msg, icon: 'none'});
          }
        }catch(e){
						uni.showToast({title: '验证码发送失败', icon: 'none'});
            this.$hideLoading();
        }
			},
			inputChange(){
				this.$emit('getForm', this.form)
			}
		}
	}
</script>

<style scoped lang="scss">


</style>
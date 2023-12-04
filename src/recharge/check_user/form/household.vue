<!--
 * @Author: Shber
 * @Date: 2023-11-27 18:06:08
 * @LastEditors: Shber
 * @LastEditTime: 2023-12-04 10:44:06
 * @Description: 
-->
<template>
	<view class="form_content">
		<view class="form_item">
			<text class="label">选择楼宇</text>
			<view style="position: relative;" @click="check()">
				<input v-model="form.build_name" disabled class="uni-input" placeholder="请选择楼宇" />
				<image src="/static/image/icon/icon_bottom.png" class="icon_bottom"></image>
			</view>
		</view>
		<view class="form_item">
			<text class="label">选择单元</text>
			<view style="position: relative;">
				<input v-model="form.unit" disabled @click="check('unit')" class="uni-input" placeholder="请选择单元" />
				<image src="/static/image/icon/icon_bottom.png" class="icon_bottom"></image>
			</view>
		</view>
		<view class="form_item">
			<text class="label">选择楼层</text>
			<view style="position: relative;">
				<input v-model="form.floornum" disabled @click="check('floornum')" class="uni-input" placeholder="请选择楼层" />
				<image src="/static/image/icon/icon_bottom.png" class="icon_bottom"></image>
			</view>
		</view>
		<view class="form_item">
			<text class="label">房号</text>
			<input v-model="form.number" @input="inputChange" class="uni-input" placeholder="请输入房号" />
		</view>
		<view class="form_item">
			<text class="label">姓名</text>
			<input v-model="form.name" @input="inputChange" class="uni-input" placeholder="请输入姓名" />
		</view>
		<view class="form_item">
			<text class="label">手机号</text>
			<input v-model="form.mobile" @input="inputChange" class="uni-input" maxlength="11" placeholder="请输入手机号" />
		</view>
		<view class="form_item">
			<text class="label">验证码</text>
			<view style="position: relative;">
				<input v-model="form.code" @input="inputChange" type="number" maxlength="6" class="uni-input" placeholder="请输入手机号" />
				<text class="send_code" @click="sendCode" v-if="time == 60">发送验证码</text>
				<text class="send_code" v-else>{{time}}s</text>
			</view>
		</view>
		<view class="form_item">
			<text class="label">备注</text>
			<textarea v-model="form.note" @input="inputChange" class="uni-input uni-textarea"  placeholder="请输入备注" />
		</view>
				
		<view class="full_bg"></view>
		<uPopup v-model="popupshow" mode="bottom" border-radius="16" :length="630">
			<view class="popup">
				<view class="popup_title"> <text class="title">选择楼宇</text>  
					<image src="/static/image/icon/close.png" class="icon_close" @click="popupshow = false"></image>
				</view>
				<picker-view 
					:immediate-change='true' 
					:value="buildvalue" 
					:indicator-style="indicatorStyle" 
					@change="bindPickerChange" 
					class="picker-view">
						<picker-view-column>
							<view class="item" v-for="(item,index) in buildInfo" :key="index">{{item.name}}</view>
						</picker-view-column>
				</picker-view>
			</view>
		</uPopup>

		<uPopup v-model="infoshow" mode="bottom" border-radius="16" :length="630">
			<view class="popup">
				<view class="popup_title"> <text class="title"> 选择{{checkType =='unit' ? '单元' : '楼层'}}</text>  
					<image src="/static/image/icon/close.png" class="icon_close" @click="infoshow = false"></image>
				</view>
				<picker-view 
					:immediate-change='true' 
					:value="infovalue" 
					:indicator-style="indicatorStyle" 
					@change="bindInfoChange($event, checkType)" 
					class="picker-view">
						<picker-view-column>
							<view class="item" v-for="(item,index) in unitFloorInfo[checkType]" :key="index">{{item}}</view>
						</picker-view-column>
				</picker-view>
			</view>
		</uPopup>

	</view>
</template>

<script>
	import '../index.scss'
	import uPopup from '../../../components/basic-component/u-popup/u-popup.vue';
	let interval = null

	export default {
		data() {
			return {
				time:60,
				buildvalue: [],
				infovalue: [],
				visible: true,
				indicatorStyle: `height: 50px;`,
				buildInfo:[],
				popupshow:false,
				infoshow:false,
				form:{
					mobile:'',
					code:'',
					build_id:'',
					unit:'',
					floornum:'',
					number:'',
					name:'',
					note:''
				},
				unitFloorInfo:{
					unit:[], floornum:[]
				},
				buildItem:{},
				unitItem:{},
				floorItem:{},
				numberItem:{},
				checkType:''
			}
		},
		components: {
			uPopup
		},
		computed: {

		},
		created() { 
			this.getBuilding()
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
      async getBuilding (){
        try{
          let info = await this.$request({
              url: this.$api.myrecharge.getBuilding,
              data: {}
          })
          let { code, data, msg } = info;
          if (code === 0) {
            this.buildInfo = data.list
						this.$forceUpdate();
          } else {
              // uni.showToast({title: msg, icon: 'none'});
          }
        }catch(e){}
      },
      async getUnitFloor (_id){
        try{
          let info = await this.$request({
              url: this.$api.myrecharge.getUnitFloor,
              data: {build_id: _id}
          })
          let { code, data, msg } = info;
          if (code === 0) {
            this.unitFloorInfo = data
						this.$forceUpdate();
          } else {
              // uni.showToast({title: msg, icon: 'none'});
          }
        }catch(e){}
      },

			bindPickerChange(e) {
					const val = e.detail.value
					this.buildItem = this.buildInfo[val]
					this.form.build_name = this.buildItem.name
					this.form.build_id = this.buildItem.id
					this.getUnitFloor(this.buildInfo[val].id)
					this.inputChange()
			},
			bindInfoChange(e, type){
				const val = e.detail.value
				this.form[type] = this.unitFloorInfo[type][val]
				this.inputChange()
			},
			check(_type){
				if(!_type){
				this.popupshow = true
				}else{
					this.infovalue = []
					this.infoshow = true
					this.checkType = _type
				}
			},
			inputChange(){
				this.$emit('getForm', this.form)
			}
		}
	}
</script>

<style scoped lang="scss">
.form_content{margin-top: 52rpx;}
.popup_title{display: flex; margin-top: 30rpx; height: 58rpx; align-items: center; position: relative;
	font-size: 36rpx; font-weight: 500; color: #0E2D6A;
	.icon_close{width: 26rpx; height: 27rpx; position: absolute; right: 30rpx; top: 40%; transform: translateY(-50%);}
	.title{display: block; width: 100%; text-align: center;}
}
.picker-view {
		width: 750rpx;
		height: 600rpx;
		margin-top: 20rpx;
		padding: 0 102rpx;
		box-sizing: border-box;
	}
	.item {
		line-height: 100rpx;
		text-align: center;
		// border-radius: 21rpx;
		// background-color: #F3F3F3;
	}
</style>
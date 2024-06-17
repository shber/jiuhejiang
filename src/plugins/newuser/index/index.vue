<template>
	<view>
		<view class="notice">
			为了您更好的体验，请授权您的头像和您的昵称！
		</view>
		<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
			<image class="avatar" style="background:#f2f2f2;border-radius: 50%;"
				:src="avatarUrl ? avatarUrl : userInfo.avatar">
			</image>
		</button>
		<view class="nickname" style="display: flex;">
			<view class="">
				昵称
			</view>
			<view class="">
				<input type="nickname" v-model="nickname" class="weui-input" placeholder="请输入昵称" />
			</view>
		</view>
		<button class="login-btn" @click="getUserInfo()">确定</button>
	</view>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
	data() {
		return {
			nickname: '',
			avatarUrl: "",//
		}
	},

	computed: {
		...mapState({
			userInfo: state => state.user.info,
			custom_setting: state => state.mallConfig.share_setting_custom,
			share_setting: state => state.mallConfig.share_setting,
			mall: state => state.mallConfig.mall
		}),
		...mapGetters('mallConfig', {
			getTheme: 'getTheme'
		})
	},
	onLoad() {
		// console.log(this.$store.state.user.info)
		// this.nickname = this.$store.state.user.info.nickname
		// // this.$store.dispatch('changetest'xxx)
		// var v = wx.getSystemInfoSync().version;
		// console.log("微信版本" + v)
		// var isV = this.compareVersion(v, "8.0.24");
		// console.log(isV)
		// if (isV == "-1") {
		// 	uni.showToast({
		// 		title: '请更新微信版本!',
		// 		icon: 'none',
		// 		duration: 2000
		// 	})
		// }
	},
	methods: {
		compareVersion(v1, v2) {
			v1 = v1.split('.')
			v2 = v2.split('.')
			const len = Math.max(v1.length, v2.length)

			while (v1.length < len) {
				v1.push('0')
			}
			while (v2.length < len) {
				v2.push('0')
			}

			for (let i = 0; i < len; i++) {
				const num1 = parseInt(v1[i])
				const num2 = parseInt(v2[i])

				if (num1 > num2) {
					return 1
				} else if (num1 < num2) {
					return -1
				}
			}
			return 0
		},
		onChooseAvatar(e) {
			var that = this;
			this.avatarUrl = e.detail.avatarUrl
			uni.uploadFile({
				url: that.$api.upload.file,
				filePath: that.avatarUrl,
				name: 'file',
				success(response) {
					// _this.detail.setting.mall_logo_pic = JSON.parse(response.data).data.url;
					that.avatarUrl = JSON.parse(response.data).data.url;
				}
			});
		},
		getUserInfo() {
			var that = this;
			console.log(!that.avatarUrl, that.avatarUrl)
			if (!that.avatarUrl) {
				uni.showToast({
					title: '请上传头像',
					icon: 'none'
				})
				return;
			}
			if (!that.nickname) {
				uni.showToast({
					title: '请输入昵称',
					icon: 'none'
				})
				return;
			}
			let userinfo = {
				avatar: that.avatarUrl,
				nickname: that.nickname
			};
			uni.getUserProfile({
				desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
				success: res => {

					let obj = JSON.parse(res.rawData);
					obj.avatarUrl = userinfo.avatar;
					obj.nickName = userinfo.nickname;
					res.rawData = JSON.stringify(obj);
					res.userInfo.nickName = '123';
					console.log(res)
					this.getUserInfo2(res);
				}
			})

		},
		getUserInfo2(userInfoResult) {
			uni.login({
				scopes: 'auth_base',
				success: loginResult => {
					let data
					// #ifdef MP-WEIXIN
					data = {
						encryptedData: userInfoResult.encryptedData,
						iv: userInfoResult.iv,
						rawData: userInfoResult.rawData,
						signature: userInfoResult.signature,
						code: loginResult.code,
					};
					// #endif
					this.$request({
						url: this.$api.passport.login,
						method: 'post',
						data: data,
					}).then(response => {
						uni.hideLoading();
						this.$storage.setStorageSync('_USER_ACCESS_TOKEN', response
							.data.access_token);
							uni.reLaunch({
									url:'/pages/index/index'
							})
						uni.showToast({
							title: '登录成功',
							icon: 'none'
						})
						// setTimeout(res => {
						// 	uni.navigateBack({
						// 		delta: 1
						// 	});
						// }, 800)

					}).catch(e => {
						uni.hideLoading();
						reject(e);
					});
				},
				fail(error) {
					reject(error);
				}
			});
		}
	},
}
</script>

<style scoped lang="scss">
.notice {
	text-align: center;
	color: #ccc;
	font-size: 20rpx;
}

.login-btn {
	width: 95%;
	margin-top: 50rpx;
	padding: 0;
	border: solid 1rpx #ccc;
	border-radius: 20rpx;
	background-color: #55a7e3;
}

.avatar-wrapper {
	padding: 0;
	width: 56px !important;
	border-radius: 8px;
	margin-top: 40px;
	margin-bottom: 40px;
}

.avatar {
	display: block;
	width: 56px;
	height: 56px;
}

.container {
	display: flex;
}

.nickname {
	justify-content: space-around;
	border: solid 1rpx #CDCDCD;
	// border-radius: 10rpx;
	height: 100rpx;
	line-height: 100rpx;
	align-items: center;
}
</style>

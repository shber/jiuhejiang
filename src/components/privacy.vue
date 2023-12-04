<template>
	<view class="privacy" v-if="showPrivacy">
		<view class="content">
			<view class="title">隐私保护指引</view>
			<view class="des">
				在使用当前小程序服务之前，请仔细阅读<text class="link"
					@click="openPrivacyContract">{{privacyContractName}}</text>。如你同意{{privacyContractName}}，请点击“同意”开始使用。
			</view>
			<view class="btns">
				<button class="item reject" @click="exitMiniProgram">拒绝</button>
				<button id="agree-btn" class="item agree" open-type="agreePrivacyAuthorization"
					@agreeprivacyauthorization="handleAgreePrivacyAuthorization">同意</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "privacy",
		props: {
			// headerImg:{
			// 	type:String,
			// 	default:'',
			// },
		},
		data() {
			return {
				privacyContractName: '',
				showPrivacy: false,
			}
		},
		created() {
			console.log('弹窗1');
			uni.getPrivacySetting({
				success:res=> {
					console.log(res,'弹窗2');
					if (res.errMsg == "getPrivacySetting:ok") {
						this.privacyContractName = res.privacyContractName;
						this.showPrivacy = res.needAuthorization;
					}
				}
			})
		},
		methods: {
			// 打开隐私协议页面
			openPrivacyContract() {
				const _ = this
				uni.openPrivacyContract({
					fail: () => {
						uni.showToast({
							title: '遇到错误',
							icon: 'error'
						})
					}
				})
			},
			// 拒绝隐私协议
			exitMiniProgram() {
				// 直接退出小程序
				uni.exitMiniProgram()
				// uni.navigateBack({
				// 	delta: 1
				// });
			},
			// 同意隐私协议
			handleAgreePrivacyAuthorization() {
				this.showPrivacy = false;
			},
		}
	}
</script>

<style scoped lang="scss">
	.privacy {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, .5);
		z-index: 9999999;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content {
		width: 632rpx;
		padding: 48rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 16rpx;
	}

	.content .title {
		text-align: center;
		color: #333;
		font-weight: bold;
		font-size: 32rpx;
	}

	.content .des {
		font-size: 26rpx;
		color: #666;
		margin-top: 40rpx;
		text-align: justify;
		line-height: 1.6;
	}

	.content .des .link {
		color: #07c160;
		text-decoration: underline;
	}

	.btns {
		margin-top: 48rpx;
		display: flex;
	}

	.btns .item {
		justify-content: space-between;
		width: 244rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 16rpx;
		box-sizing: border-box;
		border: none;
	}

	.btns .reject {
		background: #f4f4f5;
		color: #909399;
	}

	.btns .agree {
		background: #07c160;
		color: #fff;
	}
</style>
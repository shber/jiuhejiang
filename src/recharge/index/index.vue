<!--
 * @Author: Shber
 * @Date: 2023-11-27 16:55:41
 * @LastEditors: Shber
 * @LastEditTime: 2023-11-28 20:12:12
 * @Description: 
-->
<template>
  <app-layout>
  <view class="recharge_index recharge_shadow">
    <image src="https://yewi.vvv6g.cn/web/mini_images/recharge/index_bg.png" class='bg'></image>
      
    <view class="card_info">
      <view class="house_info">
        <text class="label">房屋信息</text>
        <button class="button">解除绑定</button>
      </view>
      <view class="info_group">
        <view>楼宇：xx</view>
        <view>单元：xx</view>
        <view>楼层：xx</view>
        <view>房号：xx</view>
      </view>
      <view class="together"><text>同住人列表</text> 
        <image src="https://yewi.vvv6g.cn/web/mini_images/recharge/right.png" class='turn_right'></image>
      </view>
    </view>
    <view class="card_info">
      <view class="house_info">
        <text class="label">物业预存金</text>
        <view class="left_laber">        
          <image src="https://yewi.vvv6g.cn/web/mini_images/recharge/question.png" class='icon_question'></image>
          预存金说明</view>
      </view>
      <view>
        <text class="money_title">金额（元）</text>
        <text class="money_num">¥908.00</text>
      </view>
      <view class="gray_line"></view>
      <view class="input_money">
			  <input type="number" maxlength="6" class="input-money" placeholder="请输入金额" />
      </view>
			<button class="submit_button" type="primary">充值</button>
    </view>

    <view class="bottom_group">
      <view>
        <image src="https://yewi.vvv6g.cn/web/mini_images/recharge/bottom1.png" class='bottom_img'></image>
      </view>
      <view>
        <image src="https://yewi.vvv6g.cn/web/mini_images/recharge/bottom2.png" class='bottom_img'></image>
      </view>
    </view>


  </view>
</app-layout>
</template>

<script>
import '../index.scss'
  export default {
      name: "rechargeIndex",
      data() {
          return {
              html: ''
          }
      },
      components: {
		  
      },
      onLoad(options) {
		  
      },
      methods: {

      }
  }
</script>

<style scoped lang="scss">
.bottom_group{display: flex; align-items: center; justify-content: space-between; padding-bottom: 60rpx;}
.bottom_img{width: 336rpx; height: 130rpx;}
.recharge_index{padding: 0 24rpx;}
  .bg{width:714rpx; height: 252rpx; display: block;}
  .card_info{
    background-color: #fff; border-radius: 20rpx; padding: 20rpx 32rpx 36rpx; margin-bottom: 40rpx;
    .info_group{margin-top: 40rpx; display: flex; justify-content: space-between; align-items: center; color: #818AA8;
      font-size: 30rpx; line-height: 28rpx; font-weight: 500;
    }
    .left_laber{display: flex; align-items: center; font-size: 26rpx; font-weight: 400; color: #9E9E9E;}
    .icon_question{width: 30rpx; height: 30rpx; margin-right: 5rpx;}
    .money_title,.money_num{display: block; text-align: center;}
    .money_title{font-size: 36rpx; margin-top: 56rpx; margin-bottom: 12rpx;
font-weight: 400;
color: #393D49;
line-height: 36rpx;}
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
<template>
	<view class="app-related-suggestion-product" v-if="goods_list.length > 0">
		<view v-if="isRecommend" class="app-top dir-left-nowrap main-center cross-center">
			<view class="app-content dir-left-nowrap main-between cross-center">
				<view class="app-line"></view>
				<view v-if="showIcon" class="app-icon-love image-cover image-no-rep"></view>
				<text class="app-text">{{text}}</text>
				<view class="app-line"></view>
			</view>
		</view>
		<view class="app-bottom dir-top-nowrap">
			<view class="row dir-left-nowrap main-between box-grow-1"  v-for="(item , index) in goods_list" :key="index">
				<view class="item box-grow-0" v-for="(good, key) in item" :key="key" @click="route_jump(good)">
					<view class="image-name dir-top-nowrap main-left">
						<image lazy-load="true" class="app-image" :src="good.cover_pic"></image>
						<view class="out-dialog" v-if="good.goods_stock == 0 && appSetting.is_show_stock == '1'">
				            <image :src="appSetting.is_use_stock == '1' ? appImg.book_out : appSetting.sell_out_pic"></image>
						</view>
						<view class="name" v-if="isShowGoodsName == 1">{{good.name}}</view>
					</view>
					<template v-if="sign === 'advance'">
						<view class="advance-content">
							<view class="deposit" v-if="good.advanceGoods" :style="{'background-color': theme.background}">
								定金￥{{good.advanceGoods.deposit}}抵{{good.advanceGoods.swell_deposit}}
							</view>
						</view>
					</template>
					<view class="content dir-top-nowrap main-right" :class="[`${sign !== 'advance' ? `content-no` : `content-yes`}`]">
						<view class="member-price" v-if="good.is_level == 1">
							<app-member-price :theme="theme" :price="good.level_price"></app-member-price>
						</view>
						<view class="sup-vip" v-if="good.vip_card_appoint.discount">
							<app-sup-vip :is_vip_card_user="good.vip_card_appoint.is_vip_card_user" :discount="good.vip_card_appoint.discount"></app-sup-vip>
						</view>
						<view class="price-total dir-left-nowrap main-between cross-center">
							<view>
                                <text class="price" :style="{'color': theme.color}">
                                    {{sign === 'advance' ? '￥': ''}}{{good.price_content}}
                                </text>
                                <text v-if="isListUnderlinePrice == 1" class="origin-price">
                                    ￥{{good.original_price}}
                                </text>
                            </view>
							<view class="volume" v-if="isShowSalesNum == 1">
								{{good.sales}}
							</view>
						</view>

					</view>
				</view>
			</view>
		</view>
		<app-load-text v-if="!request"></app-load-text>
	</view>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';

    export default {
        name: 'app-related-suggestion-product',
	    data() {
            return {
                request: this.value,
                goods_list: []
            }
	    },
	    props: {
            isRecommend: {
                type: Boolean,
                default: function(){
                    return true;
                }
            },
            showIcon: {
                type: Boolean,
                default: function(){
                    return true;
                }
            },
            value: {
                type: Boolean,
                default: function() {
                    return true;
                }
            },
		    list: {
                type: Array,
			    default:function() {
			        return [];
			    }
		    },
		    text: {
                type: String,
                default:function() {
                    return  '相关推荐';
			    }
		    },
		    sign: String,
			theme: [Object,String]
	    },
        computed: {
            ...mapState({
                height : state=>state.gConfig.systemInfo.windowHeight,
                appSetting: state => state.mallConfig.mall.setting,
                appImg: state => state.mallConfig.__wxapp_img.mall,
                mall: state => state.mallConfig.mall,
                isShowGoodsName: state => state.mallConfig.mall.setting.is_show_goods_name,
                isShowSalesNum: state => state.mallConfig.mall.setting.is_show_sales_num,
                isListUnderlinePrice: state => state.mallConfig.mall.setting.is_list_underline_price,
                platform: function(state) {
                    return state.gConfig.systemInfo.platform;
                }
            }),
			...mapGetters('mallConfig',{
				getVideo: 'getVideo'
			})
        },
		methods: {
			route_jump(data) {
				// #ifndef MP-BAIDU
				if (data.video_url && this.getVideo == 1) {
				    // #ifdef MP
					uni.navigateTo({
						url: `/pages/goods/video?goods_id=${data.id}&sign=${this.sign}`
					});
					// #endif
                    // #ifdef H5
                    uni.navigateTo({
                        url: data.page_url
                    });
                    // #endif
				} else {
					uni.navigateTo({
						url: data.page_url
					});
				}
				// #endif

				// #ifdef MP-BAIDU
				uni.navigateTo({
					url: data.page_url
				});
				// #endif
			}
		},
        watch: {
            list: {
                handler(newVal) {
                    if (!newVal) return;
                    this.goods_list = [];
                    for (let i = 0; i < newVal.length; i+=2) {
                        if (i+1 !== newVal.length) {
                            this.goods_list.push([newVal[i], newVal[i+1]]);
                        } else {
                            this.goods_list.push([newVal[i]]);
                        }
                    }
                },
                immediate: true,
                deep:true
            }
        }
    }
</script>

<style scoped lang="scss">
	.app-related-suggestion-product {
		width: $screen-width;
		background-color: #f7f7f7;
		.app-top {
			width: 100%;
			height: #{40+32+24rpx};
			.app-content {
				height: #{24rpx};
				width: calc(100% - #{450rpx});
				.app-line {
					width: #{56rpx};
					height: #{2rpx};
					background-color: #bbbbbb;
				}
				.app-icon-love {
					width: #{24rpx};
					height: #{24rpx};
					background-image: url('https://yewi.vvv6g.cn/web/mini_images/icon/icon-favorite.png');
				}
				.app-text {
					font-size: #{24rpx};
					color: #999999;
				}
			}
		}
		
	}
	
	.app-bottom {
		width: #{750upx};
		padding: #{0 10upx};
		.row {
			width: 100%;
			margin-bottom: #{10upx};
		}
		.item {
			width: #{358upx};
			background-color: #ffffff;
			margin: #{5upx 0 0 0};
			border-radius: #{16upx};
		}
		.image-name {
			width: 100%;
			position: relative;
			.app-image {
				width: #{358upx};
				height: #{370upx};
				border-top-left-radius: #{16upx};
				border-top-right-radius: #{16upx};
			}
			.out-dialog {
				border-top-left-radius: #{16upx};
				border-top-right-radius: #{16upx};
				width: #{358upx};
				height: #{370upx};
				position: absolute;
				top: 0;
				left: 0;
				background-color: rgba(0,0,0,.5);
				image {
					width: #{358upx};
					height: #{370upx};
				}
			}
			.name {
				font-size: #{28upx};
				color: #353535;
				word-break: break-all;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				line-height: #{32upx};
				height: #{64upx};
				width: #{318upx};
				margin: #{20upx 20upx 0 20upx};
			}
		}
	}
	
	.price-total {
		margin-bottom: #{20upx};
		font-size: #{28upx};
		line-height: 1;
		.price {
			word-break: break-all;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
		}
		.volume {
			word-break: break-all;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			font-size: #{24rpx};
			color: #999999;
		}
	}
	.content {
		padding: #{0 24upx 0 24upx};
	}
	
	.content-no {
		height: calc(100% - #{454upx});
	}
	
	.advance-content {
		height: #{40upx};
		padding: #{0 0 0 24upx};
		margin-bottom: #{10upx};
	}
	
	.content-yes {
		height: calc(100% - #{494upx});
	}
	
	.deposit {
		display: inline-block;
		font-size: #{19rpx};
		color: #ffffff;
		line-height: 1;
		border-radius: #{7rpx};
		padding: #{5rpx 5rpx};
		word-break: break-all;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		margin: #{8upx 0};
	}
	.member-price {
		padding: #{8upx 0};
	}
	.sup-vip {
		margin-bottom: #{8upx};
	}
    .origin-price {
        font-size: 21upx;
        color: #999999;
        text-decoration:line-through;
    }
</style>
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/foot/summary/summary"],{"1fcf":function(e,t,i){"use strict";i.r(t);var n=i("9140"),o=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},"432e":function(e,t,i){"use strict";i.r(t);var n=i("82cd"),o=i("1fcf");for(var r in o)"default"!==r&&function(e){i.d(t,e,function(){return o[e]})}(r);i("4efd");var a=i("2877"),c=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,"a13556fe",null);t["default"]=c.exports},"4efd":function(e,t,i){"use strict";var n=i("692c"),o=i.n(n);o.a},"692c":function(e,t,i){},"82cd":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.show=!1})},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},9140:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("2f62");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(i,!0).forEach(function(t){a(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var c=function(){return i.e("components/page-component/goods/app-goods-preview-poster").then(i.bind(null,"7dc7"))},s={data:function(){return{rate:1,indexRate:1,day:0,posterUrl:this.$api.poster.footprint,coupon_discount_price:0,coupon_num:0,highest_price:0,member_discount_price:0,pay_num:0,pay_price:0,percentage:0,percentageRate:0,yesterday:"",active:1,next:null,last:0,height:0,loading:!1,show:!1,list:[],size:[{width:"",height:""},{width:"",height:""},{width:"",height:""},{width:"",height:""},{width:"",height:""},{width:"",height:""},{width:"",height:""},{width:"",height:""},{width:"",height:""}]}},components:{appGoodsPreviewPoster:c},computed:r({},(0,n.mapState)({mall:function(e){return e.mallConfig.mall},ttf:function(e){return e.mallConfig.__wxapp_img.foot},userInfo:function(e){return e.user.info}})),methods:{openPoster:function(){this.show=!0},toMall:function(){e.reLaunch({url:"/pages/index/index"})},close:function(){this.show=!1},start:function(e){if(this.loading)return!1;this.list=[],this.active=e},enter:function(e){if(this.loading)return!1;this.list.push(e)},leave:function(t){var i=this;if(i.loading)return!1;setTimeout(function(t){i.loading=!0,i.list.length>0&&(+i.list[0].changedTouches[0].clientY-+i.list[i.list.length-1].changedTouches[0].clientY>30&&i.active<8?setTimeout(function(t){6==i.active&&0==i.userInfo.identity.member_level&&0==i.userInfo.is_vip_card_user?i.next=8:i.next=i.active+1,8==i.active&&0==i.userInfo.identity.member_level&&0==i.userInfo.is_vip_card_user?i.last=6:i.last=i.active-1,setTimeout(function(t){e.pageScrollTo({scrollTop:2*i.height,duration:1e3})},100),setTimeout(function(e){i.next=0,6==i.active&&0==i.userInfo.identity.member_level&&0==i.userInfo.is_vip_card_user?i.active=8:i.active++,i.loading=!1},1e3)},100):+i.list[0].changedTouches[0].clientY-+i.list[i.list.length-1].changedTouches[0].clientY<-30&&i.active>1?(6==i.active&&0==i.userInfo.identity.member_level&&0==i.userInfo.is_vip_card_user?i.next=8:i.next=i.active+1,8==i.active&&0==i.userInfo.identity.member_level&&0==i.userInfo.is_vip_card_user?i.last=6:i.last=i.active-1,e.pageScrollTo({scrollTop:0,duration:0}),i.next=0,8==i.active&&0==i.userInfo.identity.member_level&&0==i.userInfo.is_vip_card_user?i.active=6:i.active--,i.loading=!1):(e.pageScrollTo({scrollTop:0,duration:200}),i.loading=!1))},200)},toList:function(){e.redirectTo({url:"/pages/foot/index/index"})},getList:function(){var t=this;t.$request({url:t.$api.foot.list}).then(function(i){e.hideLoading(),t.$hideLoading(),0==i.code?(t.day=i.data.day,t.coupon_discount_price=i.data.coupon_discount_price,t.coupon_num=i.data.coupon_num,t.highest_price=i.data.highest_price,t.member_discount_price=i.data.member_discount_price,t.pay_num=i.data.pay_num,t.pay_price=i.data.pay_price,t.percentage=i.data.percentage,t.percentageRate=(100*i.data.percentage).toFixed(0)):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(){e.hideLoading(),t.$hideLoading(),t.$event.on(t.$const.EVENT_USER_LOGIN).then(function(){t.getList()})})},load:function(e,t){this.size[e].width=t.detail.width+"rpx",this.size[e].height=t.detail.height+"rpx"}},onLoad:function(){this.$commonLoad.onload(),this.height=e.getSystemInfoSync().windowHeight,this.rate=+this.height/599>1?1:+this.height/599,this.indexRate=+this.height/657>1?1:+this.height/657,this.$showLoading({type:"global",text:"加载中..."});var t=Date.parse(new Date),i=1e3*(t/1e3-86400),n=new Date(i),o=n.getFullYear(),r=n.getMonth()+1;r>=1&&r<=9&&(r="0"+r);var a=n.getDate();this.yesterday=o+"."+r+"."+a,this.getList()}};t.default=s}).call(this,i("543d")["default"])}},[["1342","common/runtime","common/vendor"]]]);
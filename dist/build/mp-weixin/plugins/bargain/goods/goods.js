(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/bargain/goods/goods"],{"1aec":function(n,e,i){"use strict";i.r(e);var t=i("db7b"),a=i("bf15");for(var o in a)"default"!==o&&function(n){i.d(e,n,function(){return a[n]})}(o);i("9edc");var r=i("2877"),s=Object(r["a"])(a["default"],t["a"],t["b"],!1,null,"31b60846",null);e["default"]=s.exports},"9edc":function(n,e,i){"use strict";var t=i("a384"),a=i.n(t);a.a},a384:function(n,e,i){},ad61:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i("2f62");function a(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),i.push.apply(i,t)}return i}function o(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(i,!0).forEach(function(e){r(n,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):a(i).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))})}return n}function r(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}var s=function(){return i.e("components/page-component/app-quick-navigation/app-quick-navigation").then(i.bind(null,"4d92"))},u=function(){return Promise.all([i.e("common/vendor"),i.e("components/basic-component/app-rich/parse")]).then(i.bind(null,"cb0e"))},g=function(){return i.e("components/page-component/goods/app-goods-banner").then(i.bind(null,"12b6"))},c=function(){return i.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(i.bind(null,"409e"))},d=function(){return i.e("plugins/bargain/components/app-plugin-time-bar").then(i.bind(null,"573e"))},p=function(){return Promise.all([i.e("common/vendor"),i.e("components/page-component/goods/bd-coupon")]).then(i.bind(null,"11b2"))},l=function(){return i.e("components/page-component/goods/bd-xbc").then(i.bind(null,"8639"))},b=function(){return i.e("components/page-component/goods/bd-kb").then(i.bind(null,"4c29"))},h=function(){return i.e("components/page-component/goods/bd-hc").then(i.bind(null,"de37"))},f=function(){return i.e("components/page-component/goods/bd-comments").then(i.bind(null,"9470"))},m=function(){return i.e("components/basic-component/app-close/app-close").then(i.bind(null,"f0dd"))},_=function(){return i.e("components/page-component/goods/bd-info-extra").then(i.bind(null,"c4b4"))},v={name:"goods",components:{appQuickNavigation:s,appRichText:u,appGoodsBanner:g,appShareQrCode:c,appPluginTimeBar:d,appClose:m,bdCoupon:p,bdXbc:l,bdKb:b,bdHc:h,bdComments:f,bdInfoExtra:_},computed:o({},(0,t.mapState)({appImg:function(n){return n.mallConfig.plugin.bargain.app_image},userInfo:function(n){return n.user.info},isUnderlinePrice:function(n){return n.mallConfig.mall.setting.is_underline_price}}),{},(0,t.mapState)("gConfig",{iphone:function(n){return n.iphone},iphoneHeight:function(n){return n.iphoneHeight}}),{},(0,t.mapGetters)("mallConfig",{getTheme:"getTheme"}),{compareTime:function(){if(this.bargain){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n?(n=n.trim().substring(0,19),n=n.replace(/-/g,"/"),new Date(n).getTime()):(new Date).getTime()},e=this.bargain,i=e.begin_time,t=e.end_time,a=n(i),o=n(t),r=n();if(a<=r&&r<o)return"";if(r>=o)return"end";if(r<a)return"no-start"}return""}}),data:function(){return{showClose:!1,is_open:!1,timeIntegral:null,goods_id:"",bargain:null,finish_list:null,begin_list:null,end_list:null,shareShow:!1,title:"砍价",page:1,circuit:[{name:"点击砍价",url:"./../image/bargain-click.png"},{name:"",url:"./../image/bargain-jiantou.png"},{name:"找人砍价",url:"./../image/bargain-help.png"},{name:"",url:"./../image/bargain-jiantou.png"},{name:"价格合适",url:"./../image/bargain-price.png"},{name:"",url:"./../image/bargain-jiantou.png"},{name:"优惠购买",url:"./../image/bargain-buy.png"}],goods:{},poster:this.$api.bargain.poster,isUnderlinePirce:0,poster_config:this.$api.bargain.poster_config,poster_generate:this.$api.bargain.poster_generate}},onLoad:function(e){this.$commonLoad.onload(e),wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]});var i=this;this.$store.dispatch("user/info"),this.goods_id=e.goods_id,this.$showLoading(),this.$request({url:this.$api.bargain.goods_detail,data:{goods_id:this.goods_id}}).then(function(e){if(i.$hideLoading(),0===e.code){i.bargain=e.data.bargain,i.goods=i.bargain.goods;var t=function(){i.begin_list=i.setTimeStart(i.bargain.begin_time),i.end_list=i.setTimeStart(i.bargain.end_time),i.bargain.bargain_info&&(i.finish_list=i.setTimeStart(i.bargain.bargain_info.finish_at))};t(),i.timeIntegral=setInterval(function(){t()},1e3)}else n.showToast({icon:"none",title:e.msg}),n.navigateBack()}).catch(function(){i.$hideLoading()})},onShow:function(){var n=this;this.showClose=!1,setTimeout(function(){n.showClose=!0})},onUnload:function(){clearInterval(this.timeIntegral)},onShareAppMessage:function(){return this.shareMessage()},onShareTimeline:function(){return this.$shareTimeline({title:this.bargain.goods.app_share_title?this.bargain.goods.app_share_title:this.bargain.name,query:{goods_id:this.bargain.goods_id}})},methods:{shareMessage:function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.$shareAppMessage({title:this.bargain.goods.app_share_title?this.bargain.goods.app_share_title:this.bargain.name,path:"/plugins/bargain/goods/goods",imageUrl:this.bargain.goods.app_share_pic?this.bargain.goods.app_share_pic:this.bargain.cover_pic,desc:this.bargain.subtitle,params:{goods_id:this.bargain.goods_id}},n)},getMall:function(n){this.is_open=1==n.is_open},bargainFriend:function(){n.navigateTo({url:"/plugins/bargain/activity/activity?id="+this.bargain.bargain_info.bargain_order_id})},setTimeStart:function(n){var e=n.replace(/-/g,"/"),i=parseInt((new Date(e).getTime()-(new Date).getTime())/1e3),t=0,a=0,o=0,r=0;return i>0?(t=Math.floor(i/86400),a=Math.floor(i/3600)-24*t,o=Math.floor(i/60)-24*t*60-60*a,r=Math.floor(i)-24*t*60*60-60*a*60-60*o,{d:t.toString(),h:a<10?"0"+a:a.toString(),m:o<10?"0"+o:o.toString(),s:r<10?"0"+r:r.toString()}):null},subscribe:function(){var n=this;if("undefined"!==typeof this.bargain.limit_buy&&1==this.bargain.limit_buy.status&&this.bargain.limit_buy.rest_number<1)return this.$tips.showToast({title:this.bargain.limit_buy.text,icon:"none"}),!1;this.$subscribe(this.bargain.template_message).then(function(e){n.save()}).catch(function(){n.save()})},save:function(){var e=this;e.$showLoading(),e.$request({url:e.$api.bargain.bargain_submit,data:{goods_id:e.bargain.goods_id}}).then(function(i){e.$hideLoading(),0==i.code?e.bargainResult(i):n.showToast({icon:"none",title:i.msg})}).catch(function(n){e.$hideLoading()})},bargainResult:function(e){var i=this;i.$showLoading(),i.$request({url:i.$api.bargain.bargain_result,data:{queueId:e.data.queueId,token:e.data.token}}).then(function(t){if(0===t.code){if(t.data.retry)return void setTimeout(function(){i.bargainResult(e)},1e3);i.$hideLoading(),n.redirectTo({url:"/plugins/bargain/activity/activity?order_id="+t.data.bargain_order_id})}else i.$hideLoading(),n.showToast({icon:"none",title:t.msg})}).catch(function(n){i.$hideLoading()})},submit:function(){var e=this.bargain,i=[{mch_id:0,bargain_order_id:e.bargain_info.bargain_order_id,goods_list:[{id:e.goods_id,attr:[],num:1,cart_id:0,goods_attr_id:e.goods_attr_id}]}];n.navigateTo({url:"/pages/order-submit/order-submit?mch_list="+JSON.stringify(i)+"&preview_url="+encodeURIComponent(this.$api.bargain.order_preview)+"&submit_url="+encodeURIComponent(this.$api.bargain.order_submit)})},shareClick:function(){this.shareShow=!0},setCoupon:function(n){this.$set(this.bargain.goods_coupon_center[n],"is_receive",1)}}};e.default=v}).call(this,i("543d")["default"])},ae58:function(n,e){n.exports=require("../siteinfo.js")},bf15:function(n,e,i){"use strict";i.r(e);var t=i("ad61"),a=i.n(t);for(var o in t)"default"!==o&&function(n){i.d(e,n,function(){return t[n]})}(o);e["default"]=a.a},db7b:function(n,e,i){"use strict";var t=function(){var n=this,e=n.$createElement;n._self._c},a=[];i.d(e,"a",function(){return t}),i.d(e,"b",function(){return a})}},[["4f83","common/runtime","common/vendor"]]]);
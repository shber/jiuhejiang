(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/step/index/index"],{"7b94":function(t,e,n){"use strict";n.r(e);var a=n("a9b5"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"8fc7":function(t,e,n){},a9b5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){s(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=function(){return n.e("components/page-component/app-ad/app-ad").then(n.bind(null,"ba36"))},u={data:function(){return{showShare:!1,user_id:0,share_title:"",setting:{},first:!1,activity_data:{},ad_data:{},page:1,template_remind:"",template_activity:"",banner_list:{},toExchange:!1,authorize:!1,exchangNum:0,user_data:{daily_num:0},goods:[],loading:!1,invite_list:[{avatar:"./../image/friend.png"},{avatar:"./../image/friend.png"},{avatar:"./../image/friend.png"},{avatar:"./../image/friend.png"}],coupon_url:this.$api.step.receive,disable:"disable"}},components:{appAd:r},computed:o({},(0,a.mapState)({stepImg:function(t){return t.mallConfig.plugin.step},appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting},userInfo:function(t){return t.user.info},platform:function(t){return t.gConfig.systemInfo.platform}}),{},(0,a.mapGetters)("mallConfig",{getVideo:"getVideo",getTheme:"getTheme"}),{},(0,a.mapGetters)("iPhoneX",{getBoolEmpty:"getBoolEmpty"})),filters:{getObje:function(t,e){return{id:t.id}}},methods:{showHiddenClick:function(){this.showShare=!this.showShare},toIndex:function(){t.redirectTo({url:"/pages/index/index"})},toDetail:function(){t.navigateTo({url:"/plugins/step/detail/detail"})},toShare:function(e){this.showShare=!1,t.navigateTo({url:"/plugins/step/share/share?step="+e})},toRules:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.step.setting),"&key=rule")})},toTop:function(){t.navigateTo({url:"/plugins/step/top/top"})},toFriend:function(){t.navigateTo({url:"/plugins/step/friend/friend"})},toDare:function(e,n){e&&n?t.navigateTo({url:"/plugins/step/dare/dare?submit=1&activity_id="+e+"&step_num="+n}):t.navigateTo({url:"/plugins/step/dare/dare"})},toJoin:function(e){t.navigateTo({url:"/plugins/step/join/join?id="+e})},toGoods:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.goods_id,"&sign=step")}):t.navigateTo({url:"/plugins/step/goods/goods?goods_id="+e.goods_id})},getAuth:function(){var e=this;t.getSetting({success:function(n){1==n.authSetting["scope.werun"]?(e.page=1,e.runData(),e.getGoods()):t.authorize({scope:"scope.werun",success:function(t){"authorize:ok"==t.errMsg&&(e.page=1,e.runData(),e.getGoods())},fail:function(n){e.$hideLoading(),t.showModal({title:"提示",content:"获取步数信息失败，需要授权获取步数权限",showCancel:!1,confirmText:"打开授权",success:function(e){e.confirm&&t.openSetting({})}})}})}})},aliAuth:function(e){var n=this,a=[{avatar:"./../image/friend.png"},{avatar:"./../image/friend.png"},{avatar:"./../image/friend.png"},{avatar:"./../image/friend.png"}];0==n.user_id&&n.userInfo&&(n.user_id=n.userInfo.options.user_id),my.getRunData({countDate:e,success:function(i){n.$request({url:n.$api.step.index,data:{encrypted_data:i.response,parent_id:n.user_id,page:1},method:"POST"}).then(function(e){n.$hideLoading(),0==e.code?(n.template_remind=e.data.template_remind,n.template_activity=e.data.template_activity,n.activity_data=e.data.activity_data,n.ad_data=e.data.ad_data,n.banner_list=e.data.banner_list,n.user_data=e.data.user_data,n.invite_list=n.user_data.invite_list.concat(a).slice(0,4),n.first=!0):t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(t){n.$hideLoading(),n.$event.on(n.$const.EVENT_USER_LOGIN).then(function(){n.aliAuth(e)})})},fail:function(e){t.showModal({content:e.errMsg,showCancel:!1})}})},runData:function(){var e,n,a,i=this,o=[{avatar:"./../image/friend.png"},{avatar:"./../image/friend.png"},{avatar:"./../image/friend.png"},{avatar:"./../image/friend.png"}];t.login({success:function(s){0==i.user_id&&i.userInfo&&(i.user_id=i.userInfo.options.user_id),e=s.code,t.getWeRunData({success:function(s){n=s.iv,a=s.encryptedData,i.$request({url:i.$api.step.index,data:{encrypted_data:a,iv:n,parent_id:i.user_id,code:e,page:1},method:"POST"}).then(function(e){i.$hideLoading(),0==e.code?(i.template_remind=e.data.template_remind,i.template_activity=e.data.template_activity,i.activity_data=e.data.activity_data,i.ad_data=e.data.ad_data,i.banner_list=e.data.banner_list,i.user_data=e.data.user_data,i.invite_list=i.user_data.invite_list.concat(o).slice(0,4),i.first=!0):t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(t){i.$hideLoading(),i.$event.on(i.$const.EVENT_USER_LOGIN).then(function(){i.runData()})})},fail:function(e){"getWeRunData:fail cancel"==e.errMsg?t.showModal({content:"读取失败，请稍后再试",showCancel:!1}):"getWeRunData: fail device not support"==e.errMsg?t.showModal({content:'请在微信中搜索"微信运动"公众号，并点击关注',showCancel:!1}):t.showModal({content:e.errMsg,showCancel:!1})}})}})},getGoods:function(){var e=this;e.$request({url:e.$api.step.goods,data:{page:e.page}}).then(function(n){0==n.code?(e.goods=e.goods.concat(n.data.list),e.page++):t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},refresh:function(){this.$showLoading({type:"global",text:"步数加载中..."}),this.runData()},openMsg:function(){0==this.user_data.is_remind&&this.$subscribe(this.template_remind)},toSwitch:function(t){var e=this,n=0;t.detail.value&&(n=1);this.$request({url:this.$api.step.remind,data:{is_remind:n},method:"post"}).then(function(t){0==t.code&&(e.user_data.is_remind=n)}).catch(function(t){})},exchange:function(){var e=this,n=+e.setting.convert_ratio,a=(e.user_data.daily_real_num,+e.user_data.daily_num),i=0;n>0&&(i=(a/n).toFixed(2)),a<1||i<.01?t.showToast({title:"可兑换步数不足",icon:"none",duration:1e3}):(e.toExchange=!0,e.exchangNum=i,e.$forceUpdate())},subscribe:function(){var t=this;if(this.loading)return!1;this.loading=!0,this.$subscribe(this.template_remind).then(function(e){t.exchangeSubmit()}).catch(function(e){t.exchangeSubmit()})},exchangeRequest:function(e,n,a,i){var o=this;o.$request({url:o.$api.step.convert,data:{num:e,code:n,encrypted_data:a,iv:i},method:"post"}).then(function(e){o.loading=!1,t.hideLoading(),0==e.code?(t.showToast({title:"兑换成功",icon:"success",duration:1e3}),setTimeout(function(){o.runData()},1e3)):t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){o.loading=!1,t.hideLoading()})},exchangeSubmit:function(){var e,n,a,i=this,o=this.user_data.daily_real_num;i.toExchange=!1,t.showLoading({mask:!0,title:"兑换中..."}),t.login({success:function(s){e=s.code,t.getWeRunData({success:function(t){n=t.iv,a=t.encryptedData,i.exchangeRequest(o,e,a,n)},fail:function(e){i.loading=!1,t.hideLoading(),t.showModal({content:e.errMsg,showCancel:!1})}})},fail:function(e){i.loading=!1,t.hideLoading(),t.showModal({content:e.errMsg,showCancel:!1})}})}},onReachBottom:function(){this.getGoods()},onShareTimeline:function(){return this.$shareTimeline({title:this.share_title?this.share_title:this.$children[0].navigationBarTitle,query:{}})},onLoad:function(e){this.$commonLoad.onload(e);var n=this;wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]}),n.$showLoading({type:"global",text:"加载中..."}),this.$store.dispatch("user/info"),e.user_id>0&&(n.user_id=e.user_id),n.$request({url:n.$api.step.setting}).then(function(e){if(n.getAuth(),0==e.code){if(n.setting=e.data,n.share_title=e.data.share_title.toString(),n.rules=e.data.rule,e.data.share_title.indexOf("\n")>-1){var a=e.data.share_title.split("\n"),i=Math.floor(Math.random()*a.length);n.share_title=a[i]}}else t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(t){n.$hideLoading()})},onShow:function(){var t=this;0!=t.first&&t.runData()},onShareAppMessage:function(){return this.$shareAppMessage({title:this.share_title?this.share_title:this.$children[0].navigationBarTitle,imageUrl:this.setting.share_pic?this.setting.share_pic:"",path:"/plugins/step/index/index",params:{user_id:this.userInfo.options.user_id}})}};e.default=u}).call(this,n("543d")["default"])},c7fe:function(t,e,n){"use strict";n.r(e);var a=n("f6b6"),i=n("7b94");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("d36f");var s=n("2877"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"2d3841bd",null);e["default"]=r.exports},d36f:function(t,e,n){"use strict";var a=n("8fc7"),i=n.n(a);i.a},f6b6:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t._f("getObje")(t.ad_data,t.ad_data));t._isMounted||(t.e0=function(e){t.toExchange=!1}),t.$mp.data=Object.assign({},{$root:{f0:n}})},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}},[["5bb4","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/community/list/list"],{"09de":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(i,!0).forEach(function(e){s(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r=function(){return i.e("plugins/community/components/app-menu").then(i.bind(null,"93b2"))},l=function(){return i.e("components/basic-component/app-tab-nav/app-tab-nav").then(i.bind(null,"7fd0"))},d=function(){return i.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(i.bind(null,"409e"))},u={data:function(){return{tabList:[{id:-1,name:"全部"},{id:1,name:"进行中"},{id:0,name:"未开始"},{id:2,name:"已结束"}],activeTab:-1,activeTabName:"全部",list:[],setting:{},widthRate:1,id:0,loading:!1,more:!1,page:1,first:!0,poster:"",longitude:"",latitude:"",middleman:{},middleman_id:"",animation:{},animationData:{}}},components:{"app-tab-nav":l,"app-menu":r,appShareQrCode:d},computed:o({},(0,n.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,n.mapState)({stock:function(t){return t.mallConfig.__wxapp_img.stock},bonusImg:function(t){return t.mallConfig.__wxapp_img.bonus},userInfo:function(t){return t.user.info}})),onShareTimeline:function(){return this.$shareTimeline({title:this.setting.app_share_title?this.setting.app_share_title:this.$children[0].navigationBarTitle,query:{}})},onShow:function(){var e=this;if(e.animation=t.createAnimation({duration:400,timingFunction:"linear"}),e.first)return!1;if(this.$storage.getStorageSync("middleman_info")){var i=this.$storage.getStorageSync("middleman_info");i.id>0&&(e.middleman_id=i.user_id),e.getList()}else e.getList()},onLoad:function(){this.$commonLoad.onload();var e=this;t.getSystemInfo({success:function(t){var i=2*t.windowWidth;e.widthRate=i/750}}),wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]}),t.getLocation({success:function(i){t.hideLoading(),e.longitude=i.longitude,e.latitude=i.latitude,e.$showLoading({type:"global",text:"加载中..."}),e.getSetting()},fail:function(e){t.hideLoading(),t.showModal({title:"提示",content:"获取位置信息失败，需要授权获取您的位置信息",showCancel:!1,confirmText:"打开授权",success:function(e){e.confirm&&t.openSetting({})}})}})},onReachBottom:function(){this.more&&(this.page++,this.getMore(),this.more=!1)},onShareAppMessage:function(){return this.$shareAppMessage({title:this.setting.app_share_title?this.setting.app_share_title:this.$children[0].navigationBarTitle,imageUrl:this.setting.app_share_pic?this.setting.app_share_pic:"",path:"/plugins/community/list/list"})},methods:{getMore:function(){var e=this;e.loading=!0;var i={longitude:e.longitude,latitude:e.latitude,page:e.page,status:e.activeTab};e.middleman_id>0&&(i.middleman_id=e.middleman_id),e.$request({url:e.$api.community.list,data:i}).then(function(i){if(e.loading=!1,e.first=!1,e.$hideLoading(),t.hideLoading(),0===i.code){for(var n in 20===i.list.length?e.more=!0:e.more=!1,i.list)0==i.list[n].goods_count&&i.list.splice(n,1);for(var a in e.list=e.list.concat(i.list),e.list)"已结束"===e.list[a].status_name?e.list[a].statusText="活动结束":"进行中"===e.list[a].status_name?e.list[a].statusText=e.list[a].end_at+"结束":"未开始"===e.list[a].status_name&&(e.list[a].statusText=e.list[a].start_at+"开始")}else t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(){e.loading=!1,t.hideLoading(),e.$hideLoading()})},toDetail:function(e){t.navigateTo({url:"/plugins/community/activity/activity?id="+e.id+"&title="+e.title})},tabStatus:function(t,e){var i=this;if(i.loading)return!1;i.list=[],i.page=1,i.activeTab=t.id,i.activeTabName=t.name;var n=88*+i.widthRate*e;i.animation.translate(n,0).step(),i.animationData=i.animation.export(),i.getList()},getSetting:function(){var e=this,i=this;i.$showLoading({type:"global",text:"加载中..."}),i.$request({url:i.$api.community.setting}).then(function(n){if(0===n.code)if(i.setting=n.data,e.$storage.getStorageSync("middleman_info")){var a=e.$storage.getStorageSync("middleman_info");a.id>0&&(i.middleman_id=a.user_id),i.getList()}else i.getList();else i.$hideLoading(),t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(){i.$hideLoading()})},getList:function(){var e=this,i=this;i.loading=!0;var n={longitude:i.longitude,latitude:i.latitude,status:i.activeTab};i.middleman_id>0&&(n.middleman_id=i.middleman_id),i.$request({url:i.$api.community.list,data:n,method:"post"}).then(function(n){if(i.loading=!1,i.first=!1,i.$hideLoading(),t.hideLoading(),0===n.code){for(var a in 20===n.list.length?i.more=!0:i.more=!1,n.list)0==n.list[a].goods_count&&n.list.splice(a,1);for(var o in i.list=n.list,i.list)"已结束"===i.list[o].status_name?i.list[o].statusText="活动结束":"进行中"===i.list[o].status_name?i.list[o].statusText=i.list[o].end_at+"结束":"未开始"===i.list[o].status_name&&(i.list[o].statusText=i.list[o].start_at+"开始");n.removeStorage&&e.$storage.removeStorageSync("middleman_info")}else t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(){i.loading=!1,t.hideLoading(),i.$hideLoading()})}}};e.default=u}).call(this,i("543d")["default"])},"3f9e":function(t,e,i){"use strict";i.r(e);var n=i("b4d9"),a=i("d097");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("7025");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"4f12d773",null);e["default"]=r.exports},7025:function(t,e,i){"use strict";var n=i("d79f"),a=i.n(n);a.a},b4d9:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},d097:function(t,e,i){"use strict";i.r(e);var n=i("09de"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},d79f:function(t,e,i){}},[["92c2","common/runtime","common/vendor"]]]);
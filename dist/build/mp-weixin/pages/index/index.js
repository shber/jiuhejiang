(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{8069:function(e,t,n){"use strict";n.r(t);var a=n("a094"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},a094:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("a34a")),i=n("2f62");function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){p(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n,a,i,o,r){try{var s=e[o](r),p=s.value}catch(u){return void n(u)}s.done?t(p):Promise.resolve(p).then(a,i)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(a,i){var o=e.apply(t,n);function r(e){u(o,a,i,r,s,"next",e)}function s(e){u(o,a,i,r,s,"throw",e)}r(void 0)})}}var d=function(){return n.e("components/page-component/index/app-index").then(n.bind(null,"6f02"))},h=function(){return n.e("components/page-component/index/app-diy-page").then(n.bind(null,"6a38"))},l=function(){return n.e("components/page-component/app-buy-prompt/app-buy-prompt").then(n.bind(null,"49f6"))},f=function(){return n.e("components/page-component/app-my-app/app-my-app").then(n.bind(null,"d7d6"))},g=function(){return n.e("components/privacy").then(n.bind(null,"5c63"))},m=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/app-attr/app-attr")]).then(n.bind(null,"d3c4"))},v=function(){return n.e("components/page-component/index/app-nav-bar").then(n.bind(null,"59f3"))},y={name:"index",components:{appIndex:d,"app-diy-page":h,appBuyPrompt:l,appMyApp:f,privacy:g,appAttr:m,appNavBar:v},data:function(){return{diy__app_nav_bar:{},homePages:{},type:"",is_storage:!1,haveBackground:!0,destroy:!0,pageHide:!1,is_required:!0,coupon_req:!1,page_id:0,attrGoods:{goods:{},attrShow:0},isShowAttention:!1}},onShow:function(){this.pageHide=!1},onHide:function(){this.pageHide=!0},onLoad:function(e){this.$commonLoad.onload(e),this.load(e),wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]});var t=wx.getUpdateManager();t&&(t.onCheckForUpdate(function(e){}),t.onUpdateReady(function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&t.applyUpdate()}})}))},onPageScroll:function(e){this.$store.dispatch("page/actionSetScrollTop",e.scrollTop)},methods:{loadMall:function(){var e=c(a.default.mark(function e(){var t,n,i,o,r=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$request({url:this.$api.index.tplIndex,data:{page_id:0},method:"get"});case 2:t=e.sent,n=t.code,i=t.data,this.$hideLoading(),0===n&&(this.is_storage=!1,this.$popupAd.show=null,this.type=i.type,o=this,this.is_required=!0,"diy"===this.type&&(this.coupon_req=!0,this.homePages={}),this.$nextTick(function(){r.homePages=i.home_pages,r.homePages.navs&&o.homePages.navs.length>0&&r.homePages.navs.forEach(function(e,t){e.template.data.forEach(function(e,t){"background"===e.id&&(o.haveBackground=!1),"app-nav-bar"===e.id&&(o.diy__app_nav_bar=e.data)})})}),this.$storage.setStorageSync("INDEX_MALL",i));case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadDiy:function(){var e=c(a.default.mark(function e(){var t,n,i,o;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$request({url:this.$api.index.tplIndex,data:{page_id:this.page_id},method:"get"});case 2:t=e.sent,n=t.code,i=t.data,this.$hideLoading(),0===n&&(this.is_storage=!1,this.$popupAd.show=null,this.homePages=i.home_pages,this.type=i.type,o=this,this.homePages.navs&&o.homePages.navs.length>0&&this.homePages.navs.forEach(function(e,t){e.template.data.forEach(function(e,t){"background"===e.id&&(o.haveBackground=!1),"app-nav-bar"===e.id&&(o.diy__app_nav_bar=e.data)})}));case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),delHistory:function(){},share:function(e){var t;"undefined"!==typeof e.params&&(t=JSON.parse(e.params),this.$jump({url:t.path+"?"+this.$utils.objectToUrlParams(t),open_type:"navigate"}))},qrcode:function(e){var t=this;this.$request({url:this.$api.default.qrcode_parameter,data:{token:e.scene}}).then(function(e){if(0===e.code){t.$store.dispatch("page/actionSetQeury",null);var n=e.data.detail,a=n.data,i=n.path,o="plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin"==i?"".concat(i):"/".concat(i);a&&(o+="?"+t.$utils.objectToUrlParams(a),"undefined"!==typeof a.user_id&&t.$store.dispatch("user/setTempParentId",a.user_id)),("/pages/index/index"!="/".concat(i)||"undefined"!==typeof a.page_id&&a.page_id!==t.homePages.id!==0)&&(t.delHistory(),t.$jump({url:o,open_type:"navigate"}))}}).catch(function(){})},buyProduct:function(e){this.attrGoods.goods=e.goods,this.attrGoods.attrShow=e.attrShow},load:function(e){var t=this;if("undefined"!==typeof e.scene&&("share"===e.scene?this.share(e):this.qrcode(e)),"undefined"!==typeof e.user_id&&this.$store.dispatch("user/setTempParentId",e.user_id),this.page_id="undefined"!==typeof e.page_id?Number(e.page_id):0,0===this.page_id){var n=this.$storage.getStorageSync("INDEX_MALL");if(n&&n.time){var a=new Date(n.time.replace(/-/g,"/"));a.setMinutes(a.getMinutes()+10);var i=new Date,o=i.getTime()-a.getTime();o>=0?(this.type=n.type,this.homePages=n.home_pages,this.loadMall()):(this.type=n.type,"diy"===this.type&&(this.coupon_req=!0,this.homePages={}),this.$nextTick(function(){t.homePages=n.home_pages;var e=t;t.homePages.navs&&t.homePages.navs.length>0&&t.homePages.navs.forEach(function(t,n){t.template.data.forEach(function(t,n){"background"===t.id&&(e.haveBackground=!1),"app-nav-bar"===t.id&&(e.diy__app_nav_bar=t.data)})})}),this.is_required=!1)}else this.loadMall()}else this.coupon_req=!0,this.loadDiy()}},onShareAppMessage:function(){var e={path:"/pages/index/index",params:{}};return 0==this.page_id?(e.title=this.mall.setting.share_title?this.mall.setting.share_title:this.mall.name,e.imageUrl=this.mall.setting.share_pic):(e.title=this.homePages.title,e.params.page_id=this.page_id),this.$shareAppMessage(e)},computed:s({navbarStatus:function(){return-1===["windows","mac"].indexOf(this.systemInfo.platform)}},(0,i.mapGetters)("mallConfig",{tabBarNavs:"getNavBar",getTheme:"getTheme"}),{},(0,i.mapGetters)({userInfo:"user/info"}),{},(0,i.mapState)({systemInfo:function(e){return e.gConfig.systemInfo}}),{},(0,i.mapState)("mallConfig",{config:function(e){return e.mall.setting},mall:function(e){return e.mall}}),{isSign:function(){return this.$storage.getStorageSync("isSign")}}),onShareTimeline:function(){var e={},t="";return 0==this.page_id?t=this.mall.setting.share_title?this.mall.setting.share_title:this.mall.name:(t=this.homePages.title,e.page_id=this.page_id),this.$shareTimeline({title:t,query:e})}};t.default=y},ae58:function(e,t){e.exports=require("../siteinfo.js")},c0f9:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},f75a:function(e,t,n){"use strict";n.r(t);var a=n("c0f9"),i=n("8069");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports}},[["d537","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/community/cash-detail/cash-detail"],{"03c5":function(t,n,e){"use strict";var i=e("ffac"),a=e.n(i);a.a},4679:function(t,n,e){"use strict";e.r(n);var i=e("7a66"),a=e("6908");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("03c5");var r=e("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"242f7fc8",null);n["default"]=c.exports},6908:function(t,n,e){"use strict";e.r(n);var i=e("d378"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},"7a66":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},d378:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("2f62");function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(e,!0).forEach(function(n){r(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c=function(){return e.e("components/basic-component/app-tab-nav/app-tab-nav").then(e.bind(null,"7fd0"))},s={data:function(){return{tabList:[{id:-1,name:"全部"},{id:0,name:"待审核"},{id:1,name:"待打款"},{id:2,name:"已打款"},{id:3,name:"已驳回"}],loading:null,list:[],activeTab:-1,noBorder:!1,id:null,page:2}},components:{"app-tab-nav":c},computed:o({},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,i.mapState)({mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_setting:function(t){return t.mallConfig.share_setting}})),methods:{open:function(t){this.id=t},tabStatus:function(n){t.showLoading({mask:!0,title:"加载中..."}),this.list=[],this.page=2,this.activeTab=n.currentTarget.dataset.id,this.getList()},getList:function(){var n=this;n.$request({url:n.$api.finance.list,data:{status:n.activeTab,model:"community"}}).then(function(e){n.$hideLoading(),t.hideLoading(),0==e.code?n.list=e.data.list:t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){n.$hideLoading(),t.hideLoading(),n.$event.on(n.$const.EVENT_USER_LOGIN).then(function(){n.getList()})})},getMore:function(){var n=this;t.showLoading({mask:!0,title:"加载中..."}),n.$request({url:n.$api.stock.detail,data:{status:n.activeTab,model:"community",page:n.page}}).then(function(e){if(t.hideLoading(),0==e.code){n.loading=null;var i=e.data.list;i.length>0&&(n.list[n.list.length-1].date==i[0].date?(n.list[n.list.length-1].list=n.list[n.list.length-1].list.concat(i[0].list),i.shift(),n.list=n.list.concat(i)):n.list=n.list.concat(i),n.page++)}else t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(n){t.hideLoading()})},toGoods:function(n){t.navigateTo({url:"/pages/goods/goods?id="+n})}},onLoad:function(n){this.$commonLoad.onload(n);var e=this;n.name&&t.setNavigationBarTitle({title:n.name}),e.$showLoading({type:"global",text:"加载中..."}),e.getList()},onReachBottom:function(){this.getMore()}};n.default=s}).call(this,e("543d")["default"])},ffac:function(t,n,e){}},[["fb79","common/runtime","common/vendor"]]]);
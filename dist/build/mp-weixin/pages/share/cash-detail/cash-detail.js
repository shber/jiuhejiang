(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/share/cash-detail/cash-detail"],{"123d":function(t,n,e){},"2d0d":function(t,n,e){"use strict";e.r(n);var a=e("bff7"),i=e("cbad");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("4a0f");var r=e("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"4d7b336a",null);n["default"]=s.exports},"4a0f":function(t,n,e){"use strict";var a=e("123d"),i=e.n(a);i.a},bff7:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},cbad:function(t,n,e){"use strict";e.r(n);var a=e("d790"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},d790:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("2f62");function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(e,!0).forEach(function(n){r(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s=function(){return e.e("components/basic-component/app-tab-nav/app-tab-nav").then(e.bind(null,"7fd0"))},c={data:function(){return{theme:{color:"#ff4544"},tabList:[{id:-1,name:"全部"},{id:0,name:"待审核"},{id:1,name:"待打款"},{id:2,name:"已打款"},{id:3,name:"无效"}],loading:null,list:[],activeTab:-1,noBorder:!1,id:null,page:2}},components:{"app-tab-nav":s},computed:o({},(0,a.mapState)({mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_setting:function(t){return t.mallConfig.share_setting}})),methods:{open:function(t){this.id=t},tabStatus:function(n){this.list=[],this.page=2,this.activeTab=n.currentTarget.dataset.id,t.showLoading({title:"加载中..."}),this.getList()},getList:function(){var n=this;n.$request({url:n.$api.share.cash_list,data:{status:n.activeTab}}).then(function(e){n.$hideLoading(),t.hideLoading(),0===e.code?n.list=e.data.list:t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(){n.$hideLoading(),t.hideLoading(),n.$event.on(n.$const.EVENT_USER_LOGIN).then(function(){n.getList()})})},getMore:function(){var n=this;t.showLoading({title:"加载中..."}),n.$request({url:n.$api.share.cash_list,data:{status:n.activeTab,page:n.page}}).then(function(e){if(t.hideLoading(),0==e.code){for(var a in n.loading=null,e.data.list)for(var i in n.list)a==i&&(n.list[i].list=n.list[i].list.concat(e.data.list[i].list));n.page++}else t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(){t.hideLoading()})},toGoods:function(n){t.navigateTo({url:"/pages/goods/goods?id=".concat(n)})}},onLoad:function(){this.$commonLoad.onload();var n=this;t.setNavigationBarTitle({title:n.custom_setting.menus.cash.name}),n.$showLoading({type:"global",text:"加载中..."}),n.getList()},onReachBottom:function(){this.getMore()}};n.default=c}).call(this,e("543d")["default"])}},[["fd58f","common/runtime","common/vendor"]]]);
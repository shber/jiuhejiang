(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/live/index"],{"1b5d":function(e,t,n){},"2bc9":function(e,t,n){"use strict";var i=n("1b5d"),o=n.n(i);o.a},"6ade":function(e,t,n){"use strict";n.r(t);var i=n("8055"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a},8055:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={name:"index",data:function(){return{list:[],page:1,is_show_load:!1,is_show_hint:!1}},computed:r({},(0,i.mapState)({userInfo:function(e){return e.user.info}})),methods:{liveClick:function(t){var n=this.userInfo?this.userInfo.options.user_id:0,i={user_id:n};e.navigateTo({url:"plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(t.roomid,"&custom_params=").concat(encodeURIComponent(JSON.stringify(i)))})},getList:function(){var t=this;t.is_show_load||t.$showLoading({text:"加载中..."}),t.$request({url:t.$api.live.index,data:{page:t.page}}).then(function(n){if(t.$hideLoading(),t.is_show_load=!1,0===n.code){var i=n.data.list;1!=t.page?t.list=t.list.concat(i):t.list=i,t.page=i.length?t.page+1:t.page,0===i.length&&0!==t.list.length&&(t.is_show_hint=!0)}else e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(){t.is_show_load=!1,t.$hideLoading()})}},onLoad:function(){this.$commonLoad.onload(),this.getList()},onReachBottom:function(){this.is_show_load=!0,this.is_show_hint=!1,this.getList()},onShareAppMessage:function(){return this.$shareAppMessage({title:"直播列表",path:"/pages/live/index",params:{user_id:this.userInfo?this.userInfo.options.user_id:0}})}};t.default=s}).call(this,n("543d")["default"])},aa04:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},b077:function(e,t,n){"use strict";n.r(t);var i=n("aa04"),o=n("6ade");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("2bc9");var a=n("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"6c80d706",null);t["default"]=s.exports}},[["6e50","common/runtime","common/vendor"]]]);
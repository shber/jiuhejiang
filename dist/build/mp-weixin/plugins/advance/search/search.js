(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/advance/search/search"],{3757:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a})},"39ad":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(r("a34a")),a=r("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e,r,n,a,s,i){try{var o=t[s](i),c=o.value}catch(u){return void r(u)}o.done?e(c):Promise.resolve(c).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var s=t.apply(e,r);function o(t){i(s,n,a,o,c,"next",t)}function c(t){i(s,n,a,o,c,"throw",t)}o(void 0)})}}function c(t){return h(t)||l(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach(function(e){p(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=function(){return r.e("plugins/advance/components/index-product-list").then(r.bind(null,"51af"))},g="ADVANCE_SEARCH",m={name:"search",data:function(){return{search_text:"",search_list:[],strong:[],search:!1,page:1,over:!1,interval:0}},onLoad:function(){this.$commonLoad.onload(),this.$storage.getStorageSync(g)?this.strong=this.$storage.getStorageSync(g):this.$storage.setStorageSync(g,[])},computed:d({},(0,a.mapGetters)("mallConfig",{getTheme:"getTheme"})),onHide:function(){clearInterval(this.interval)},onUnload:function(){clearInterval(this.interval)},onReachBottom:function(){var t=this;this.over||(this.page+=1,this.$request({url:this.$api.advance.goods,method:"get",data:{keyword:this.search_text,page:this.page}}).then(function(e){0===e.code&&(e.data.list.length>0?t.search_list=[].concat(c(t.search_list),c(e.data.list)):t.over=!0)}))},methods:{empyt_search:function(){this.search_text="",this.search_list=[],this.search=!1,clearInterval(this.interval)},request:function(){var t=o(n.default.mark(function t(){var e,r,a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.search=!0,this.page=1,e=this.$storage.getStorageSync(g),!this.search_text.match(/^[ ]*$/)){t.next=5;break}return t.abrupt("return");case 5:return r=[].concat(c(e),[this.search_text]),t.next=8,this.$request({url:this.$api.advance.goods,method:"get",data:{keyword:this.search_text,page:this.page}});case 8:a=t.sent,0===a.code&&(this.search_list=a.data.list,this.set_interval(),this.$storage.setStorageSync(g,r));case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),empty_strong:function(){this.$storage.removeStorageSync(g),this.strong=[]},search_strong:function(t){this.search_text=t,this.request()},set_interval:function(){var t=this;clearInterval(this.interval),this.interval=setInterval(function(){var e=(new Date).getTime();0===t.search_list.length&&clearInterval(t.interval);for(var r=0;r<t.search_list.length;r++){var n=new Date(t.search_list[r].advanceGoods.end_prepayment_at.replace(/-/g,"/")).getTime(),a=n-e;if(a>0){var s=parseInt(a/1e3/60/60/24%30),i=parseInt(a/1e3/60/60%24),o=parseInt(a/1e3/60%60),c=parseInt(a/1e3%60);s>0?t.$set(t.search_list[r],"html",s+"天"+i+":"+(o<10?"0"+o:o)+":"+(c<10?"0"+c:c)):t.$set(t.search_list[r],"html",i+":"+(o<10?"0"+o:o)+":"+(c<10?"0"+c:c))}else t.$delete(t.search_list,r),t.search_list.length<10&&t.page_count>1&&t.$request({url:t.$api.advance.goods,method:"get"}).then(function(e){0===e.code&&(t.search_list=e.data.list,t.set_interval())})}},1e3)}},components:{"index-product-list":v}};e.default=m},"5f47":function(t,e,r){"use strict";r.r(e);var n=r("3757"),a=r("919a");for(var s in a)"default"!==s&&function(t){r.d(e,t,function(){return a[t]})}(s);r("fb18");var i=r("2877"),o=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,"3b18454d",null);e["default"]=o.exports},"822f":function(t,e,r){},"919a":function(t,e,r){"use strict";r.r(e);var n=r("39ad"),a=r.n(n);for(var s in n)"default"!==s&&function(t){r.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},fb18:function(t,e,r){"use strict";var n=r("822f"),a=r.n(n);a.a}},[["fbf7","common/runtime","common/vendor"]]]);
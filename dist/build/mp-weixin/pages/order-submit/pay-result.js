(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order-submit/pay-result"],{"402f":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o})},4801:function(e,t,r){},"4b5c":function(e,t,r){"use strict";r.r(t);var n=r("402f"),o=r("9e6a");for(var a in o)"default"!==a&&function(e){r.d(t,e,function(){return o[e]})}(a);r("4df3");var i=r("2877"),u=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"45e3cf32",null);t["default"]=u.exports},"4df3":function(e,t,r){"use strict";var n=r("4801"),o=r.n(n);o.a},"72e3":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("2f62");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(){return r.e("components/page-component/app-related-suggestion-product/app-related-suggestion-product").then(r.bind(null,"1ce4"))},c=function(){return r.e("components/page-component/app-order-share-modal/app-order-share-modal").then(r.bind(null,"16ba3"))},d={name:"pay-result",components:{AppRelatedSuggestionProduct:u,appOrderShareModal:c},data:function(){return{payment_order_union_id:null,result:null,redirectUrl:null,recommendGoodsList:null,shareCheck:!1,orderPageUrl:!1,community:!1}},computed:a({},(0,n.mapState)({appImg:function(e){return e.mallConfig.__wxapp_img}}),{},(0,n.mapGetters)("mallConfig",{getTheme:"getTheme"}),{showGift:function(){if(!this.result||this.community)return!1;var e=this.result,t=e.send_data,r=e.user_coupon_list,n=e.card_list;return!!(t&&t.send_integral_num>0||t&&t.send_balance>0||r&&r.length||n&&n.length)}}),onLoad:function(e){this.$commonLoad.onload(e),this.payment_order_union_id=e.payment_order_union_id,this.orderPageUrl=decodeURIComponent(e.order_page_url||"/pages/order/index/index?status=0"),"/plugins/community/order/order"===e.order_page_url&&(this.orderPageUrl=this.orderPageUrl+"?is_user=1",this.community=!0),this.loadData(),this.loadRecommendGoodsList()},methods:{loadData:function(){var e=this;this.$showLoading({type:"global"}),this.$request({url:this.$api.order.pay_result,data:{payment_order_union_id:this.payment_order_union_id}}).then(function(t){e.$hideLoading(),0===t.code&&(e.result=t.data,e.shareCheck=e.result.shareCheck,e.result.order_page_url&&(e.orderPageUrl=e.result.order_page_url))}).catch(function(){e.$hideLoading()})},redirectTo:function(t){e.redirectTo({url:t})},reLaunch:function(t){e.reLaunch({url:t})},loadRecommendGoodsList:function(){var e=this;if(this.community)return!1;this.$request({url:this.$api.goods.new_recommend,method:"get",data:{type:"order_pay"}}).then(function(t){0===t.code&&(e.recommendGoodsList=t.data.list)}).catch(function(){})}}};t.default=d}).call(this,r("543d")["default"])},"9e6a":function(e,t,r){"use strict";r.r(t);var n=r("72e3"),o=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a);t["default"]=o.a}},[["1081","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/stock/components/app-index/app-index"],{"471d":function(t,e,n){},"4bed":function(t,e,n){"use strict";n.r(e);var a=n("df49"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},b14a:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},bf91:function(t,e,n){"use strict";n.r(e);var a=n("b14a"),o=n("4bed");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("f35c");var i=n("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"0d355683",null);e["default"]=c.exports},df49:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={name:"app-index",props:{detail:{type:Object},setting:{type:Object}},computed:r({},(0,a.mapState)({stock:function(t){return t.mallConfig.__wxapp_img.stock}})),methods:{toUpdate:function(){t.navigateTo({url:"/plugins/stock/update/update"})},toCash:function(){t.navigateTo({url:"/plugins/stock/cash/cash"})},toBonus:function(){var e=this.setting.form.stock?this.setting.form.stock:"",n=this.setting.form.cash_detail?this.setting.form.cash_detail:"";t.navigateTo({url:"/plugins/stock/bonus/bonus?name="+e+"&cash_detail="+n})},toDetail:function(){var e=this.setting.form.cash_detail?this.setting.form.cash_detail:"";t.navigateTo({url:"/plugins/stock/cash-detail/cash-detail?name="+e})},toBalance:function(){var e=this.setting.form.balance_detail?this.setting.form.balance_detail:"";t.navigateTo({url:"/plugins/stock/balance/balance?name="+e})},toAbout:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.stock.level),"&key=level_up_remark")})}}};e.default=c}).call(this,n("543d")["default"])},f35c:function(t,e,n){"use strict";var a=n("471d"),o=n.n(a);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/stock/components/app-index/app-index-create-component',
    {
        'plugins/stock/components/app-index/app-index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bf91"))
        })
    },
    [['plugins/stock/components/app-index/app-index-create-component']]
]);                

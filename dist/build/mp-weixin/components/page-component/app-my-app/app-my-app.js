(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-my-app/app-my-app"],{"36bc":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={name:"app-my-app",data:function(){return{is_add_show:!1}},computed:o({hiddenHeight:function(){var e=this;return function(n){var r,a=null;function o(e){return t.upx2px(e)}return r=e.systemInfo.statusBarHeight+e.mBarHeight,r=r||0,a={top:r+o(16)+"px"},Object.assign({backgroundColor:e.setting.add_app_bg_color,opacity:e.setting.add_app_bg_transparency/100,borderRadius:e.setting.add_app_bg_radius+"rpx"},a)}}},(0,r.mapState)({systemInfo:function(t){return t.gConfig.systemInfo},mBarHeight:function(t){return t.gConfig.mBarHeight}}),{},(0,r.mapState)("mallConfig",{setting:function(t){return t.mall.setting}})),methods:{close:function(){this.is_add_show=!1,this.$storage.setStorageSync("_IS_ADD_APP",!this.is_add_show)}},created:function(){this.is_add_show=!this.$storage.getStorageSync("_IS_ADD_APP")}};e.default=c}).call(this,n("543d")["default"])},b9f4:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.hiddenHeight()]));t.$mp.data=Object.assign({},{$root:{s0:n}})},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},c91e:function(t,e,n){"use strict";var r=n("f8f7"),a=n.n(r);a.a},d7d6:function(t,e,n){"use strict";n.r(e);var r=n("b9f4"),a=n("ff76");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("c91e");var i=n("2877"),c=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"ff63c592",null);e["default"]=c.exports},f8f7:function(t,e,n){},ff76:function(t,e,n){"use strict";n.r(e);var r=n("36bc"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-my-app/app-my-app-create-component',
    {
        'components/page-component/app-my-app/app-my-app-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d7d6"))
        })
    },
    [['components/page-component/app-my-app/app-my-app-create-component']]
]);                

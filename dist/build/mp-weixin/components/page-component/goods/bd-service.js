(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/bd-service"],{"828d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={name:"bd-service",props:{name:String,url:String},computed:a({},(0,r.mapState)({mall:function(e){return e.mallConfig.mall}})),methods:{router:function(t){e.navigateTo({url:t})},makePhoneCall:function(){this.mall.setting.contact_tel&&e.makePhoneCall({phoneNumber:this.mall.setting.contact_tel})}}};t.default=u}).call(this,n("543d")["default"])},"861b":function(e,t,n){"use strict";n.r(t);var r=n("a701"),o=n("dac6");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("f691");var c=n("2877"),u=Object(c["a"])(o["default"],r["a"],r["b"],!1,null,"34d1c24a",null);t["default"]=u.exports},a701:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=(e._self._c,encodeURIComponent(e.mall.setting.web_service_url));e.$mp.data=Object.assign({},{$root:{m0:n}})},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},b94c:function(e,t,n){},dac6:function(e,t,n){"use strict";n.r(t);var r=n("828d"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=o.a},f691:function(e,t,n){"use strict";var r=n("b94c"),o=n.n(r);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/bd-service-create-component',
    {
        'components/page-component/goods/bd-service-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("861b"))
        })
    },
    [['components/page-component/goods/bd-service-create-component']]
]);                

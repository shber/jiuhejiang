(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/privacy"],{"236f":function(t,n,a){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"a",function(){return r}),a.d(n,"b",function(){return i})},"5c63":function(t,n,a){"use strict";a.r(n);var r=a("236f"),i=a("fd60");for(var o in i)"default"!==o&&function(t){a.d(n,t,function(){return i[t]})}(o);a("68a0");var e=a("2877"),c=Object(e["a"])(i["default"],r["a"],r["b"],!1,null,"558980f0",null);n["default"]=c.exports},"68a0":function(t,n,a){"use strict";var r=a("f0d4"),i=a.n(r);i.a},a932:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"privacy",props:{},data:function(){return{privacyContractName:"",showPrivacy:!1}},created:function(){var n=this;console.log("弹窗1"),t.getPrivacySetting({success:function(t){console.log(t,"弹窗2"),"getPrivacySetting:ok"==t.errMsg&&(n.privacyContractName=t.privacyContractName,n.showPrivacy=t.needAuthorization)}})},methods:{openPrivacyContract:function(){t.openPrivacyContract({fail:function(){t.showToast({title:"遇到错误",icon:"error"})}})},exitMiniProgram:function(){t.exitMiniProgram()},handleAgreePrivacyAuthorization:function(){this.showPrivacy=!1}}};n.default=a}).call(this,a("543d")["default"])},f0d4:function(t,n,a){},fd60:function(t,n,a){"use strict";a.r(n);var r=a("a932"),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(n,t,function(){return r[t]})}(o);n["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/privacy-create-component',
    {
        'components/privacy-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5c63"))
        })
    },
    [['components/privacy-create-component']]
]);                

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/bd-flash-sale"],{"0b5e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"bd-flash-sale",props:{flashSale:{type:Object,default:function(){return{time_status:1,start_at:"",end_at:"",min_discount:""}}},theme:Object},computed:{flashStyle:function(){return"a"==this.theme.theme&&this.flashSale.cover?"background-image: url('"+this.flashSale.cover+")":"background:"+this.theme.background_p}},methods:{navigator:function(){t.navigateTo({url:this.flashSale.url})}}};e.default=n}).call(this,n("543d")["default"])},"28dc":function(t,e,n){"use strict";n.r(e);var a=n("0b5e"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},"87fb":function(t,e,n){"use strict";var a=n("d51f"),u=n.n(a);u.a},"975a":function(t,e,n){"use strict";n.r(e);var a=n("e0b5"),u=n("28dc");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("87fb");var o=n("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,"eda345c4",null);e["default"]=c.exports},d51f:function(t,e,n){},e0b5:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/bd-flash-sale-create-component',
    {
        'components/page-component/goods/bd-flash-sale-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("975a"))
        })
    },
    [['components/page-component/goods/bd-flash-sale-create-component']]
]);                

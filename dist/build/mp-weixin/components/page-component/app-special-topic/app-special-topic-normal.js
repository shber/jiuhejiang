(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-special-topic/app-special-topic-normal"],{"26a4":function(t,n,a){"use strict";a.r(n);var e=a("4add"),i=a("a70e");for(var c in i)"default"!==c&&function(t){a.d(n,t,function(){return i[t]})}(c);a("96ca");var o=a("2877"),u=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,"3720253a",null);n["default"]=u.exports},"4add":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},"59ca":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"app-special-topic",props:{topic_list:{type:Array,default:function(){return[]}},count:{type:Number,default:function(){return 2}},icon:String,logo_1:String,logo_2:String},computed:{newDataList:function(){if(2===this.count){for(var t=[],n=0;n<Math.ceil(this.topic_list.length/this.count);n++)t.push(this.topic_list.slice(n*this.count,(n+1)*this.count));return t}}}};n.default=e},"68aa":function(t,n,a){},"96ca":function(t,n,a){"use strict";var e=a("68aa"),i=a.n(e);i.a},a70e:function(t,n,a){"use strict";a.r(n);var e=a("59ca"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,function(){return e[t]})}(c);n["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-special-topic/app-special-topic-normal-create-component',
    {
        'components/page-component/app-special-topic/app-special-topic-normal-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("26a4"))
        })
    },
    [['components/page-component/app-special-topic/app-special-topic-normal-create-component']]
]);                

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-special-topic/app-special-topic-list"],{"0773c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"1bf2":function(t,e,n){"use strict";n.r(e);var i=n("0773c"),o=n("8fce");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("6395");var u=n("2877"),a=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"39ac3ee2",null);e["default"]=a.exports},"5b84":function(t,e,n){},6395:function(t,e,n){"use strict";var i=n("5b84"),o=n.n(i);o.a},"8fce":function(t,e,n){"use strict";n.r(e);var i=n("a687"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},a687:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{catShow:{type:Boolean,default:function(){return!0}},list:{type:Array,default:function(){return[]}},topicList:{type:Array,default:function(){return[]}},tagColor:{type:String},catSelectedColor:{type:String},catUnselectedColor:{type:String},catBgColor:{type:String}},data:function(){return{tabCurrentIndex:0,touchStartX:0,touchStartY:0,time:0,interval:"",touchMoveX:0,touchMoveY:0}},methods:{tabClick:function(t){this.tabCurrentIndex=t},touchStart:function(t){var e=this;this.touchStartX=t.touches[0].pageX,this.touchStartY=t.touches[0].pageY,this.interval=setInterval(function(){e.time++},100)},touchmove:function(t){this.touchMoveX=t.touches[0].pageX,this.touchMoveY=t.touches[0].pageY},touchend:function(){var t=this.touchMoveX-this.touchStartX,e=this.touchMoveY-this.touchStartY;-1===Math.sign(t)&&(t*=-1),-1===Math.sign(e)&&(e*=-1),t>=e&&(this.touchMoveX-this.touchStartX<=-20&&this.time<10&&(0===this.tabCurrentIndex?this.tabCurrentIndex=this.list.length-1:this.tabCurrentIndex-=1),this.touchMoveX-this.touchStartX>=20&&this.time<10&&(this.tabCurrentIndex===this.list.length-1?this.tabCurrentIndex=0:this.tabCurrentIndex+=1)),clearInterval(this.interval),this.time=0}}};e.default=i}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-special-topic/app-special-topic-list-create-component',
    {
        'components/page-component/app-special-topic/app-special-topic-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1bf2"))
        })
    },
    [['components/page-component/app-special-topic/app-special-topic-list-create-component']]
]);                

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/components/index/get-right-now"],{"5d95":function(t,e,i){"use strict";i.r(e);var n=i("9330"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=r.a},"697d7":function(t,e,i){},9330:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(i,!0).forEach(function(e){o(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e,i,n,r,s,u){try{var o=t[s](u),a=o.value}catch(c){return void i(c)}o.done?e(a):Promise.resolve(a).then(n,r)}function c(t){return function(){var e=this,i=arguments;return new Promise(function(n,r){var s=t.apply(e,i);function u(t){a(s,n,r,u,o,"next",t)}function o(t){a(s,n,r,u,o,"throw",t)}u(void 0)})}}var f={name:"figure-rule",data:function(){return{is_text:!1}},props:["theme","gift_id","turn_no","background","bless_word","nickname","avatar","type","template_message","bless_music","music_play"],methods:{setGift:function(){this.$emit("setGift",!1)},submit:function(){var e=c(n.default.mark(function e(){var i,r,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.showLoading({title:"获取中"}),!this.turn_no){e.next=9;break}return e.next=4,this.$request({url:this.$api.gift.get_turn,method:"get",data:{turn_no:this.turn_no}});case 4:i=e.sent,0===i.code?(r=this,t.navigateTo({url:"/plugins/gift/receive/receive?gift_id=".concat(this.gift_id,"&status=1"),success:function(){r.setGift()}})):(t.showModal({title:"提示",content:i.msg}),this.setGift()),t.hideLoading(),e.next=13;break;case 9:return e.next=11,this.$request({url:this.$api.gift.join,method:"get",data:{gift_id:this.gift_id}});case 11:s=e.sent,0===s.code?this.loopAcquisition(s.data):(t.showModal({title:"提示",content:s.msg}),this.setGift());case 13:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),receiveGift:function(){var t=c(n.default.mark(function t(){var e=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:"direct_open"!==this.type?this.$subscribe(this.template_message).then(function(){e.submit()}).catch(function(){e.submit()}):this.submit();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loopAcquisition:function(e){var i=this;this.$request({url:this.$api.gift.join_status,data:u({},e,{gift_id:this.gift_id}),method:"get"}).then(function(n){if(0===n.code){if(n.data.hasOwnProperty("list")){t.hideLoading();var r=i;return t.navigateTo({url:"/plugins/gift/receive/receive?gift_id=".concat(i.gift_id,"&status=1"),success:function(){r.setGift()}}),n.data}setTimeout(function(){i.loopAcquisition(e)},1e3)}else if(1===n.code){t.hideLoading();var s=2;s="direct_open"===i.type?2:3,t.navigateTo({url:"/plugins/gift/receive/receive?gift_id=".concat(i.gift_id,"&status=").concat(s)}),i.setGift()}})},play:function(){this.music_play?this.$emit("music",!1):this.$emit("music",!0,this.bless_music)}}};e.default=f}).call(this,i("543d")["default"])},aae0:function(t,e,i){"use strict";var n=i("697d7"),r=i.n(n);r.a},d177:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=(t._self._c,Number(t.background.top)),n=Number(t.background.left);t._isMounted||(t.e0=function(e){t.is_text=!0}),t.$mp.data=Object.assign({},{$root:{m0:i,m1:n}})},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},dc75:function(t,e,i){"use strict";i.r(e);var n=i("d177"),r=i("5d95");for(var s in r)"default"!==s&&function(t){i.d(e,t,function(){return r[t]})}(s);i("aae0");var u=i("2877"),o=Object(u["a"])(r["default"],n["a"],n["b"],!1,null,"981e8f84",null);e["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/gift/components/index/get-right-now-create-component',
    {
        'plugins/gift/components/index/get-right-now-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("dc75"))
        })
    },
    [['plugins/gift/components/index/get-right-now-create-component']]
]);                

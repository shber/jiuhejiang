(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["recharge/check_user/index"],{"393d":function(e,t,n){"use strict";n.r(t);var r=n("730c"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=o.a},"5e6b":function(e,t,n){"use strict";var r=n("8531"),o=n.n(r);o.a},"730c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){c(i,r,o,a,u,"next",e)}function u(e){c(i,r,o,a,u,"throw",e)}a(void 0)})}}n("0013");var f=function(){return Promise.all([n.e("common/vendor"),n.e("recharge/check_user/form/boss")]).then(n.bind(null,"5d9e"))},l=function(){return Promise.all([n.e("common/vendor"),n.e("recharge/check_user/form/household")]).then(n.bind(null,"5a3f"))},d=function(){return n.e("components/basic-component/app-datetime-picker/app-datetime-picker").then(n.bind(null,"3e52"))},h={name:"rechargeCheckUser",data:function(){return{step:1,identity:"1",items:[{name:"我是业主",value:"1"},{name:"我是住户",value:"2"}],buildInfo:[],timeShow:!0,form:{name:"",mobile:"",code:"",build_id:"",unit:"",floornum:"",number:"",note:""}}},components:{Boss:f,Household:l,AppDatetimePicker:d},onLoad:function(e){this.$commonLoad.onload(e),"1"!=e.type&&this.getDataInfo()},methods:{getDataInfo:function(){var t=s(r.default.mark(function t(){var n,o;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$request({url:this.$api.myrecharge.bangStatus,data:{}});case 3:n=t.sent,n.code,o=n.data,n.msg,null!=o.verify_status&&e.redirectTo({url:"/recharge/status/index"}),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}},t,this,[[0,8]])}));function n(){return t.apply(this,arguments)}return n}(),radioChange:function(e){this.identity=e.detail.value},getFormData:function(e){this.form=e},submit:function(){var t=s(r.default.mark(function t(){var n,o,i,u;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=/^1[3-9]\d{9}$/,"2"!=this.identity){t.next=12;break}if(""!=this.form.build_id){t.next=4;break}return t.abrupt("return",e.showToast({title:"请选择楼宇",icon:"none"}));case 4:if(""!=this.form.unit){t.next=6;break}return t.abrupt("return",e.showToast({title:"请选择单元",icon:"none"}));case 6:if(""!=this.form.floornum){t.next=8;break}return t.abrupt("return",e.showToast({title:"请选择楼层",icon:"none"}));case 8:if(""!=this.form.number){t.next=10;break}return t.abrupt("return",e.showToast({title:"请选择房号",icon:"none"}));case 10:if(""!=this.form.name){t.next=12;break}return t.abrupt("return",e.showToast({title:"请输入姓名",icon:"none"}));case 12:if(n.test(this.form.mobile)){t.next=14;break}return t.abrupt("return",e.showToast({title:"请输入正确的手机号",icon:"none"}));case 14:if(""!=this.form.code){t.next=16;break}return t.abrupt("return",e.showToast({title:"请输入短信验证码",icon:"none"}));case 16:return e.showLoading({mask:!0,title:"加载中..."}),t.prev=17,t.next=20,this.$request({url:this.$api.myrecharge.bandUser,method:"post",data:a({},this.form,{role:this.identity})});case 20:o=t.sent,i=o.code,o.data,u=o.msg,1===i?e.redirectTo({url:"/recharge/status/index"}):e.showToast({title:u,icon:"none"}),t.next=28;break;case 25:t.prev=25,t.t0=t["catch"](17),e.showToast({title:t.t0,icon:"none"});case 28:case"end":return t.stop()}},t,this,[[17,25]])}));function n(){return t.apply(this,arguments)}return n}()}};t.default=h}).call(this,n("543d")["default"])},8531:function(e,t,n){},e277:function(e,t,n){"use strict";n.r(t);var r=n("fe2a"),o=n("393d");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("f659"),n("5e6b");var a=n("2877"),u=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"132c18a6",null);t["default"]=u.exports},e5be:function(e,t,n){},f659:function(e,t,n){"use strict";var r=n("e5be"),o=n.n(r);o.a},fe2a:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.step=2})},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})}},[["d8ce","common/runtime","common/vendor"]]]);
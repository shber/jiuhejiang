(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/lottery/detail/detail"],{"35fe":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return r}),i.d(e,"b",function(){return o})},"79c1":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("2f62");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach(function(e){a(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s={name:"detail",data:function(){return{page:1,load:!1,args:!1,title:"抽奖",list:{},num:"",user_list:null,setting:{}}},computed:n({},(0,r.mapState)({lotteryConfig:function(t){return t.mallConfig.plugin.lottery}})),onLoad:function(e){this.$commonLoad.onload(e);var i=this;i.getSetting(),i.$showLoading(),i.$request({url:i.$api.lottery.detail,data:{id:e.id?e.id:0,lottery_id:e.lottery_id?e.lottery_id:0},method:"POST"}).then(function(e){if(i.$hideLoading(),0===e.code){var r=[e.data.list,e.data.num,e.data.user_list];i.list=r[0],i.num=r[1],i.user_list=r[2]}else t.showModal({title:"提示",content:e.msg,showCancel:!1,success:function(e){e.confirm&&t.navigateBack({delta:1})}})}).catch(function(t){i.$hideLoading()})},onShareAppMessage:function(){return this.hShareAppMessage()},methods:{hShareAppMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.$shareAppMessage({title:this.list.goods.app_share_title?this.list.goods.app_share_title:this.title,path:"/plugins/lottery/goods/goods",imageUrl:this.list.goods.app_share_pic?this.list.goods.app_share_pic:"",params:{lottery_id:this.list.lottery_id}},t)},userload:function(){var t=this;if(!t.args&&!t.load){t.load=!0;var e=t.page+1;t.$request({url:t.$api.lottery.detail,data:{page:e,lottery_id:t.list.lottery_id}}).then(function(i){if(0===i.code){var r=[e,i.data.user_list.length<6,t.user_list.concat(i.data.user_list)];t.page=r[0],t.args=r[1],t.user_list=r[2]}t.load=!1})}},getSetting:function(){var t=this;t.$request({url:t.$api.lottery.setting}).then(function(e){0===e.code&&(t.setting=e.data.setting)})},navGoods:function(){t.navigateTo({url:"/plugins/lottery/goods/goods?lottery_id="+this.list.lottery_id})},qrcode:function(){t.navigateTo({url:"/plugins/lottery/qrcode/qrcode"})},prize:function(){t.navigateTo({url:"/plugins/lottery/lucky-code/lucky-code?lottery_id="+this.list.lottery_id})},moreLottery:function(){t.redirectTo({url:"/plugins/lottery/index/index"})},submit:function(){var e=this.list,i=[{mch_id:0,lottery_log_id:e.id,goods_list:[{id:e.goods.id,attr:e.attr.attr_list,num:1,cart_id:0,goods_attr_id:e.goods.attr_id}]}];t.navigateTo({url:"/pages/order-submit/order-submit?mch_list="+JSON.stringify(i)+"&preview_url="+encodeURIComponent(this.$api.lottery.order_preview)+"&submit_url="+encodeURIComponent(this.$api.lottery.order_submit)})}}};e.default=s}).call(this,i("543d")["default"])},"7bbb":function(t,e,i){"use strict";i.r(e);var r=i("79c1"),o=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);e["default"]=o.a},b5a7:function(t,e,i){"use strict";var r=i("ffc8"),o=i.n(r);o.a},f188:function(t,e,i){"use strict";i.r(e);var r=i("35fe"),o=i("7bbb");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("b5a7");var a=i("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"53e7d3cd",null);e["default"]=s.exports},ffc8:function(t,e,i){}},[["b3b4","common/runtime","common/vendor"]]]);
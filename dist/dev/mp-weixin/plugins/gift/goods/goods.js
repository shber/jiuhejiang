(global.webpackJsonp=global.webpackJsonp||[]).push([["plugins/gift/goods/goods"],{1548:
/*!******************************************!*\
  !*** ./src/plugins/gift/goods/goods.vue ***!
  \******************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! ./goods.vue?vue&type=template&id=01bdc034&filter-modules=%7B%7D& */1549),i=n(/*! ./goods.vue?vue&type=script&lang=js& */1551);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n(/*! ./goods.vue?vue&type=style&index=0&lang=scss& */1553);var r=n(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),a=Object(r.default)(i.default,o.render,o.staticRenderFns,!1,null,null,null);a.options.__file="src/plugins/gift/goods/goods.vue",e.default=a.exports},1549:
/*!***********************************************************************************************!*\
  !*** ./src/plugins/gift/goods/goods.vue?vue&type=template&id=01bdc034&filter-modules=%7B%7D& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods.vue?vue&type=template&id=01bdc034&filter-modules=%7B%7D& */1550);n.d(e,"render",function(){return o.render}),n.d(e,"staticRenderFns",function(){return o.staticRenderFns})},1550:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/gift/goods/goods.vue?vue&type=template&id=01bdc034&filter-modules=%7B%7D& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return o}),n.d(e,"staticRenderFns",function(){return i});var o=function(){var t=this.$createElement;this._self._c},i=[];o._withStripped=!0},1551:
/*!*******************************************************************!*\
  !*** ./src/plugins/gift/goods/goods.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods.vue?vue&type=script&lang=js& */1552),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e.default=i.a},1552:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/gift/goods/goods.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=(o=n(/*! ./node_modules/@babel/runtime/regenerator */24))&&o.__esModule?o:{default:o},s=n(/*! vuex */12);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e,n,o,i,s,r){try{var a=t[s](r),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,i)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var s=t.apply(e,n);function r(t){u(s,o,i,r,a,"next",t)}function a(t){u(s,o,i,r,a,"throw",t)}r(void 0)})}}var d,l,h,p={name:"goods",data:function(){return{showClose:!1,is_open:0,goods_id:-1,goods:null,full_reduce:null,goods_list:[],attr_bool:!1,select_data:{},select_str:"",number:1,getTheme:!1,ask_gift:"",webUrl:"",mch_id:-1,loading:!1,join_disabled:!0,is_share:0,is_search:0,selectAttr:{},attrShow:!1,flash_sale:null,is_vip:!1,is_vip_card_user:null,discount:null}},onLoad:function(t){var e=this;this.$commonLoad.onload(t),this.webUrl="/plugins/gift/goods/goods?id="+t.id,this.goods_id=t.id,t.mch_id&&(this.mch_id=t.mch_id),1==t.is_share&&(this.is_share=1),1==t.is_search&&(this.is_search=1),this.$store.dispatch("gift/getConfig",this.$api.gift.config),this.request(t.id).then(function(){e.requestList(),e.requestConfig()}),wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]})},onShow:function(){var t=this;this.showClose=!1,setTimeout(function(){t.showClose=!0})},onShareTimeline:function(){return this.$shareTimeline({title:this.ask_gift,query:{id:this.goods_id,is_share:1}})},onShareAppMessage:function(){return this.hShareAppMessage()},methods:{hShareAppMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.$shareAppMessage({path:"/plugins/gift/goods/goods",title:this.ask_gift,imageUrl:this.goods.app_share_pic?this.goods.app_share_pic:this.goods.pic_url[0].pic_url,desc:this.goods.subtitle,params:{id:this.goods_id,is_share:1}},t)},getMall:function(t){this.is_open=t.is_open},clickAttr:function(){this.attrShow=!0},onAttr:function(t){var e=t.item;this.selectAttr=e;for(var n="",o=0;o<e.attr_list.length;o++)n+="".concat(e.attr_list[o].attr_group_name,": ").concat(e.attr_list[o].attr_name," ");this.select_data={name:this.goods.name,price:e.price,attr:{id:e.id,attr_list:e.attr_list,stock:e.stock,goods_id:e.goods_id},attr_str:n,pic_url:e.pic_url?e.pic_url:this.goods.cover_pic}},request:(h=c(i.default.mark(function t(e){var n,o,s;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$utils.showLoading(),t.prev=1,t.next=4,this.$request({url:this.$api.gift.goods,method:"get",data:{id:e}});case 4:if(n=t.sent,this.$utils.hideLoading(),0===n.code)for(this.goods=n.data.goods,this.flash_sale=n.data.goods.plugin_extra.flash_sale,this.goods.goods_activity&&(this.full_reduce=this.goods.goods_activity.full_reduce),this.goods.vip_card_appoint.discount&&(this.is_vip=!0,this.discount=this.goods.vip_card_appoint.discount),this.is_vip_card_user=this.goods.vip_card_appoint.is_vip_card_user,this.loading=!0,o=0;o<this.goods.attr_groups.length;o++)for(s=0;s<this.goods.attr_groups[o].attr_list.length;s++)this.goods.attr_groups[o].attr_list[s].active=0===s;t.next=13;break;case 9:throw t.prev=9,t.t0=t.catch(1),this.$utils.hideLoading(),new Error(t.t0);case 13:case"end":return t.stop()}},t,this,[[1,9]])})),function(t){return h.apply(this,arguments)}),requestConfig:(l=c(i.default.mark(function e(){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.$utils.showLoading(),e.prev=1,e.next=4,this.$request({url:this.$api.gift.config,method:"get"});case 4:n=e.sent,this.$utils.hideLoading(),0===n.code?(this.ask_gift=n.data.ask_gift,this.getTheme=n.data.theme_color,this.$store.commit("gift/setTheme",Number(n.data.theme.id))):t.showModal({title:"提示",content:n.msg}),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),this.$utils.hideLoading(),new Error(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,9]])})),function(){return l.apply(this,arguments)}),requestList:(d=c(i.default.mark(function e(){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.$utils.showLoading(),e.prev=1,e.next=4,this.$request({url:this.$api.goods.new_recommend,method:"get",data:{goods_id:this.goods_id,type:"goods"}});case 4:n=e.sent,this.$utils.hideLoading(),0===n.code?this.goods_list=n.data.list:t.showModal({title:"提示",content:n.msg}),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),this.$utils.hideLoading(),new Error(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,9]])})),function(){return d.apply(this,arguments)}),attrSwitch:function(t){this.attr_bool=t},pay:function(e){if(this.number=e.goods_list[0].num,this.$storage.getStorageSync("GIFT_CART")){for(var n=0,o=this.$storage.getStorageSync("GIFT_CART"),i=0;i<o.length;i++)o[i].attr.id===this.select_data.attr.id?o[i].number+=this.number:n+=1;if(n===o.length){var s=this.select_data;s.number=this.number,o.push(s)}this.$storage.setStorageSync("GIFT_CART",o)}else{var r=this.select_data;r.number=this.number,this.$storage.setStorageSync("GIFT_CART",[r])}1===this.is_share?t.navigateTo({url:"/plugins/gift/index/index"}):1===this.is_search?t.navigateBack({delta:3}):t.navigateBack({delta:2})},setCoupon:function(t){this.$set(this.goods.goods_coupon_center[t],"is_receive",1)}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},(0,s.mapState)("gift",{theme:function(t){return t.theme},theme_id:function(t){return t.theme_id}}),{},(0,s.mapState)("mallConfig",{mall:function(t){return t.mall}})),components:{"app-goods-banner":function(){return n.e(/*! import() | components/page-component/goods/app-goods-banner */"components/page-component/goods/app-goods-banner").then(n.bind(null,/*! ../../../components/page-component/goods/app-goods-banner.vue */2520))},"app-related-suggestion-product":function(){return n.e(/*! import() | components/page-component/app-related-suggestion-product/app-related-suggestion-product */"components/page-component/app-related-suggestion-product/app-related-suggestion-product").then(n.bind(null,/*! ../../../components/page-component/app-related-suggestion-product/app-related-suggestion-product.vue */2338))},"bottom-button":function(){return n.e(/*! import() | plugins/gift/components/goods/bottom-button */"plugins/gift/components/goods/bottom-button").then(n.bind(null,/*! ../components/goods/bottom-button.vue */3177))},appGoodsFullReduce:function(){return n.e(/*! import() | components/page-component/goods/app-goods-full-reduce */"components/page-component/goods/app-goods-full-reduce").then(n.bind(null,/*! ../../../components/page-component/goods/app-goods-full-reduce.vue */2562))},uAttr:function(){return Promise.all(/*! import() | components/page-component/goods/u-attr */[n.e("common/vendor"),n.e("components/page-component/goods/u-attr")]).then(n.bind(null,/*! ../../../components/page-component/goods/u-attr.vue */2555))},bdInfo:function(){return n.e(/*! import() | components/page-component/goods/bd-info */"components/page-component/goods/bd-info").then(n.bind(null,/*! @/components/page-component/goods/bd-info */2569))},bdCoupon:function(){return Promise.all(/*! import() | components/page-component/goods/bd-coupon */[n.e("common/vendor"),n.e("components/page-component/goods/bd-coupon")]).then(n.bind(null,/*! @/components/page-component/goods/bd-coupon.vue */2576))},bdXbc:function(){return n.e(/*! import() | components/page-component/goods/bd-xbc */"components/page-component/goods/bd-xbc").then(n.bind(null,/*! @/components/page-component/goods/bd-xbc.vue */2583))},bdKb:function(){return n.e(/*! import() | components/page-component/goods/bd-kb */"components/page-component/goods/bd-kb").then(n.bind(null,/*! @/components/page-component/goods/bd-kb.vue */2590))},bdHc:function(){return n.e(/*! import() | components/page-component/goods/bd-hc */"components/page-component/goods/bd-hc").then(n.bind(null,/*! @/components/page-component/goods/bd-hc.vue */2597))},bdDetail:function(){return n.e(/*! import() | components/page-component/goods/bd-detail */"components/page-component/goods/bd-detail").then(n.bind(null,/*! @/components/page-component/goods/bd-detail.vue */2604))},bdComments:function(){return n.e(/*! import() | components/page-component/goods/bd-comments */"components/page-component/goods/bd-comments").then(n.bind(null,/*! @/components/page-component/goods/bd-comments.vue */2611))},appClose:function(){return n.e(/*! import() | components/basic-component/app-close/app-close */"components/basic-component/app-close/app-close").then(n.bind(null,/*! @/components/basic-component/app-close/app-close.vue */2618))}}};e.default=p}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},1553:
/*!****************************************************************************!*\
  !*** ./src/plugins/gift/goods/goods.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../node_modules/css-loader??ref--8-oneOf-1-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods.vue?vue&type=style&index=0&lang=scss& */1554),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e.default=i.a},1554:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/gift/goods/goods.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){},18:
/*!*********************************!*\
  !*** external "../siteinfo.js" ***!
  \*********************************/
/*! no static exports found */function(t,e){t.exports=require("../siteinfo.js")}},[[1547,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/plugins/gift/goods/goods.js.map
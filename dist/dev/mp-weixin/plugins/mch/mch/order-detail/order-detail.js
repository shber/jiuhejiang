(global.webpackJsonp=global.webpackJsonp||[]).push([["plugins/mch/mch/order-detail/order-detail"],{1251:
/*!***********************************************************!*\
  !*** ./src/plugins/mch/mch/order-detail/order-detail.vue ***!
  \***********************************************************/
/*! no static exports found */function(e,t,i){"use strict";i.r(t);var n=i(/*! ./order-detail.vue?vue&type=template&id=6009d87d&scoped=true&filter-modules=%7B%7D& */1252),s=i(/*! ./order-detail.vue?vue&type=script&lang=js& */1254);for(var o in s)"default"!==o&&function(e){i.d(t,e,function(){return s[e]})}(o);i(/*! ./order-detail.vue?vue&type=style&index=0&id=6009d87d&scoped=true&lang=scss& */1256);var d=i(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),r=Object(d.default)(s.default,n.render,n.staticRenderFns,!1,null,"6009d87d",null);r.options.__file="src/plugins/mch/mch/order-detail/order-detail.vue",t.default=r.exports},1252:
/*!****************************************************************************************************************************!*\
  !*** ./src/plugins/mch/mch/order-detail/order-detail.vue?vue&type=template&id=6009d87d&scoped=true&filter-modules=%7B%7D& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,i){"use strict";i.r(t);var n=i(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-detail.vue?vue&type=template&id=6009d87d&scoped=true&filter-modules=%7B%7D& */1253);i.d(t,"render",function(){return n.render}),i.d(t,"staticRenderFns",function(){return n.staticRenderFns})},1253:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/mch/mch/order-detail/order-detail.vue?vue&type=template&id=6009d87d&scoped=true&filter-modules=%7B%7D& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,i){"use strict";i.r(t),i.d(t,"render",function(){return n}),i.d(t,"staticRenderFns",function(){return s});var n=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__map(e.order.detail,function(t,i){var n=e.__map(t.form_data,function(t,i){var n=Array.isArray(t.value);return{$orig:e.__get_orig(t),g0:n}}),s=e.__map(e.order.order_form,function(t,i){var n=Array.isArray(t.value);return{$orig:e.__get_orig(t),g1:n}});return{$orig:e.__get_orig(t),l0:n,l1:s}}));e.$mp.data=Object.assign({},{$root:{l2:i}})},s=[];n._withStripped=!0},1254:
/*!************************************************************************************!*\
  !*** ./src/plugins/mch/mch/order-detail/order-detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */function(e,t,i){"use strict";i.r(t);var n=i(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-detail.vue?vue&type=script&lang=js& */1255),s=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t.default=s.a},1255:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/mch/mch/order-detail/order-detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,i){"use strict";(function(e){function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{mch_id:0,order:{total_pay_price:"",express_price:"",total_goods_price:"",total_goods_original_price:""},cancelRefund:!1,addressId:"0",notRefund:!1,isRefund:!1,openAddress:!1,isReason:!1,beToSend:!1,showForm:!1,noAddress:!1,active:null,show:!1,start:[],end:[],search:!1,keyword:"",list:[],candidate:[],date_start:"",date_end:"",time:0,inSearch:!1,address:[],today:"",yesterday:"",weekday:"",chooseTime:!1,noRefund:!1,cancelOrder:!1,detail:{},changePrice:!1,callPhone:!1,custom:!1,mobile:"",isSend:!1,sendType:0,price:0,express:0,total:0,about:"",reset_time:0,dd:0,hh:0,mm:0,status:1,first:!1,refund_price:0,iphone_x:!1}},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(i,!0).forEach(function(t){s(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({},(0,i(/*! vuex */12).mapState)({userInfo:function(e){return e.user.info},mchImg:function(e){return e.mallConfig.__wxapp_img.mch}})),methods:{toExpressInfo:function(t){e.navigateTo({url:"/pages/app_admin/express/express?id="+t.id+"&express="+t.detailExpress[0].express+"&express_no="+t.detailExpress[0].express_no+"&customer_name="+t.detailExpress[0].customer_name})},toExpressMore:function(t){e.navigateTo({url:"/pages/order/express-list/express-list?order_id="+t.id})},setSendType:function(e){this.sendType=e},imageFormLoad:function(e,t){this.order.detail[e].form_data[t].loadOver=!1},toChangeAddress:function(t){this.beToSend=!1;var i=this.order.order_no?this.order.order_no:this.detail.order_no;e.navigateTo({url:"/plugins/mch/mch/change-add/change-add?mch_id="+this.mch_id+"&order_no="+i})},copy:function(){this.$utils.uniCopy({data:2==this.status?this.order.order.address:this.order.address,success:function(){}})},look:function(t){e.previewImage({current:t,urls:[t]})},agree:function(){var t=this;t.detail.refund_price>0?(e.showLoading({title:"处理中..."}),t.$request({url:t.$api.mch.refund_handle,data:{order_refund_id:t.detail.id,type:t.detail.type,is_agree:1,mch_id:t.mch_id,refund_price:t.refund_price,merchant_remark:t.about},method:"post"}).then(function(i){e.hideLoading(),0==i.code?e.showModal({title:"提示",content:i.msg,showCancel:!1,success:function(e){e.confirm&&(t.list=[],t.notRefund=!1,t.openAddress=!1,t.isRefund=!1,t.addressId=0,t.getList())}}):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})):e.showToast({title:"退款金额需大于零",icon:"none",duration:1e3})},getTime:function(){var e=this.reset_time-1,t=0,i=parseInt(e/3600);e>86400&&(t=parseInt(e/86400),i=parseInt((e-86400*t)/3600));var n=parseInt(e%3600/60);i<10&&(i="0"+i.toString()),n<10&&(n="0"+n.toString()),this.reset_time=e,this.dd=t,this.hh=i,this.mm=n},toSendType:function(){var t=this;if(1==t.sendType)if(2==t.status)e.showLoading({title:"加载中..."}),t.$request({url:t.$api.mch.refund_handle,data:{is_express:0,merchant_remark:"",type:t.detail.type,mch_id:t.mch_id,is_agree:1,order_refund_id:t.detail.id},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,type:"success",mask:!1,duration:2e3}),t.isSend=!1,setTimeout(function(){t.list=[],t.page=1,t.sendType=0,t.getList()},1e3)):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})});else{e.showLoading({title:"加载中..."});var i={is_express:2,mch_id:t.mch_id,words:"",order_id:t.detail.id};t.detail.detailExpress.length>0&&(i.express_id=t.detail.detailExpress[0].id),t.$request({url:t.$api.mch.order_send,data:i,method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,type:"success",mask:!1,duration:2e3}),t.list=[],t.page=1,t.isSend=!1,t.sendType=0,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})}else t.isSend=!1,2==t.status?e.navigateTo({url:"/plugins/mch/mch/send/send?order_refund_id="+this.detail.id+"&mch_id="+this.mch_id+"&is_send="+t.detail.is_send}):e.navigateTo({url:"/plugins/mch/mch/send/send?id="+this.detail.id+"&mch_id="+this.mch_id+"&is_send="+t.detail.is_send})},toExpress:function(t,i){var n=t.id,s=t.refund;n>0?e.navigateTo({url:"/plugins/mch/mch/send/send?id="+n+"&is_send="+i+"&mch_id="+this.mch_id}):s&&e.navigateTo({url:"/plugins/mch/mch/send/send?order_refund_id="+s+"&is_send="+i+"&mch_id="+this.mch_id})},getList:function(){var t=this;t.about="";var i=t.$api.mch.order_detail;2==t.status&&(i=t.$api.mch.refund_detail),t.$request({url:i,data:{id:t.id,mch_id:t.mch_id}}).then(function(i){if(t.$hideLoading(),0==i.code){t.first=!0;var n=i.data.detail;2==t.status?t.address=i.data.address:n.address=n.address.replace(/\s*/g,"");var s=0;if(n.auto_cancel>0?s=n.auto_cancel:n.auto_confirm>0?s=n.auto_confirm:n.auto_sales>0&&(s=n.auto_sales),t.showForm=!1,n.detail.length>0)for(var o in n.detail)if(null!=n.detail[o].form_data&&n.detail[o].form_data.length>0){var d=!0,r=!1,a=void 0;try{for(var c,u=n.detail[o].form_data[Symbol.iterator]();!(d=(c=u.next()).done);d=!0){null!=c.value.value&&(t.showForm=!0)}}catch(e){r=!0,a=e}finally{try{d||null==u.return||u.return()}finally{if(r)throw a}}}t.order=n,t.reset_time=s,setInterval(function(){t.getTime()},1e3)}else e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},toCall:function(e){1==this.status?this.mobile=e.mobile:this.mobile=e.order.mobile,this.callPhone=!this.callPhone},decline:function(t){var i=this;if(1==t&&i.addressId<1)return e.showToast({title:"请选择地址",icon:"none",duration:1e3}),!1;i.cancelRefund&&(t=2),e.showLoading({title:"处理中..."}),i.$request({url:i.$api.mch.refund_handle,data:{order_refund_id:i.detail.id,type:i.detail.type,mch_id:i.mch_id,is_agree:t,address_id:i.addressId,refund_price:i.detail.refund_price,merchant_remark:i.about},method:"post"}).then(function(t){e.hideLoading(),0==t.code?e.showModal({title:"提示",content:t.msg,showCancel:!1,success:function(e){e.confirm&&(i.list=[],i.notRefund=!1,i.cancelOrder=!1,i.openAddress=!1,i.addressId=0,i.getList())}}):e.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})},call:function(){e.makePhoneCall({phoneNumber:this.mobile}),this.callPhone=!this.callPhone},toRefund:function(e){this.detail=e,this.refund_price=e.refund_price,this.isRefund=!this.isRefund},cancel:function(){this.about="",this.date_start="",this.date_end="",this.isRefund=!1,this.beToSend=!1,this.chooseTime=!1,this.noRefund=!1,this.changePrice=!1,this.cancelOrder=!1,this.callPhone=!1,this.isSend=!1,this.notRefund=!1,this.openAddress=!1,this.isReason=!1,this.noAddress=!1,this.addressId=0},noCancel:function(){var t=this;e.showLoading({title:"处理中..."}),t.$request({url:t.$api.mch.cancel,data:{status:2,remark:t.about,mch_id:t.mch_id,order_id:t.detail.id},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,type:"success",mask:!1,duration:2e3}),t.noRefund=!1,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})},cancelSubmit:function(){var t=this;e.showLoading({title:"加载中..."}),t.$request({url:t.$api.mch.cancel,data:{status:1,mch_id:t.mch_id,remark:"",order_id:t.detail.id},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:"取消成功",duration:2e3,type:"success",mask:!1}),t.list=[],t.isRefund=!1,t.cancelOrder=!1,t.page=1,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})},lookAbout:function(e){this.detail=e,this.isReason=!0},chooseAddress:function(e){this.addressId==e?this.addressId="":this.addressId=e},refundHandle:function(e,t,i){1==i&&(this.cancelRefund=!0),1==e?0==this.address.length?this.noAddress=!0:(this.detail=t,this.openAddress=!0):2==e&&(this.detail=t,this.notRefund=!0)},beNotRefund:function(e){this.detail=e,this.noRefund=!this.noRefund},toCancelorder:function(e){this.detail=e,this.cancelOrder=!this.cancelOrder},submitChange:function(){var t=this;e.showLoading({title:"加载中..."}),t.price>-.01&&t.express>-.01?t.$request({url:t.$api.mch.update_total_price,data:{order_id:t.detail.id,mch_id:t.mch_id,total_price:t.price,express_price:t.express},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,duration:2e3,type:"success",mask:!1}),t.changePrice=!1,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}):t.price&&"number"==typeof t.price?t.express&&"number"==typeof t.express||e.showToast({title:"运费必须大于等于0",icon:"none",duration:1e3}):e.showToast({title:"商品总价必须大于等于0",icon:"none",duration:1e3})},toSend:function(e){this.detail=e,1!=e.send_type||e.address?this.isSend=!0:this.beToSend=!0},toChange:function(e){this.detail=e,this.changePrice=!this.changePrice,this.price=e.total_goods_price,this.express=e.express_price,this.total="￥"+e.total_pay_price},priceInput:function(e){e.detail.value>-.01?this.total="￥"+(+e.detail.value+ +this.express).toFixed(2):this.total="数据有误"},expressInput:function(e){e.detail.value>-.01?this.total="￥"+(+e.detail.value+ +this.price).toFixed(2):this.total="数据有误"},toAgreeCancel:function(e){this.detail=e,this.isRefund=!this.isRefund}},onShow:function(){this.first&&this.getList()},onLoad:function(t){this.$commonLoad.onload(t);var i=this;i.$showLoading({type:"global",text:"加载中..."}),e.getSystemInfo({success:function(e){(e.model.indexOf("iPhone X")>-1||e.model.indexOf("iPhone 11")>-1||e.model.indexOf("iPhone11")>-1||e.model.indexOf("iPhone12")>-1||e.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),i.id=t.id,i.status=t.status,i.mch_id=t.mch_id,i.getList()}};t.default=o}).call(this,i(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},1256:
/*!*********************************************************************************************************************!*\
  !*** ./src/plugins/mch/mch/order-detail/order-detail.vue?vue&type=style&index=0&id=6009d87d&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */function(e,t,i){"use strict";i.r(t);var n=i(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../node_modules/css-loader??ref--8-oneOf-1-2!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-detail.vue?vue&type=style&index=0&id=6009d87d&scoped=true&lang=scss& */1257),s=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t.default=s.a},1257:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/mch/mch/order-detail/order-detail.vue?vue&type=style&index=0&id=6009d87d&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,i){}},[[1250,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/plugins/mch/mch/order-detail/order-detail.js.map
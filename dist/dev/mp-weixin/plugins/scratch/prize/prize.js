(global.webpackJsonp=global.webpackJsonp||[]).push([["plugins/scratch/prize/prize"],{551:
/*!*********************************************!*\
  !*** ./src/plugins/scratch/prize/prize.vue ***!
  \*********************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! ./prize.vue?vue&type=template&id=084464f0&scoped=true&filter-modules=%7B%7D& */552),i=e(/*! ./prize.vue?vue&type=script&lang=js& */554);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e(/*! ./prize.vue?vue&type=style&index=0&id=084464f0&scoped=true&lang=scss& */556);var o=e(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),c=Object(o.default)(i.default,r.render,r.staticRenderFns,!1,null,"084464f0",null);c.options.__file="src/plugins/scratch/prize/prize.vue",n.default=c.exports},552:
/*!**************************************************************************************************************!*\
  !*** ./src/plugins/scratch/prize/prize.vue?vue&type=template&id=084464f0&scoped=true&filter-modules=%7B%7D& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./prize.vue?vue&type=template&id=084464f0&scoped=true&filter-modules=%7B%7D& */553);e.d(n,"render",function(){return r.render}),e.d(n,"staticRenderFns",function(){return r.staticRenderFns})},553:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/scratch/prize/prize.vue?vue&type=template&id=084464f0&scoped=true&filter-modules=%7B%7D& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,n,e){"use strict";e.r(n),e.d(n,"render",function(){return r}),e.d(n,"staticRenderFns",function(){return i});var r=function(){var t=this.$createElement;this._self._c},i=[];r._withStripped=!0},554:
/*!**********************************************************************!*\
  !*** ./src/plugins/scratch/prize/prize.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./prize.vue?vue&type=script&lang=js& */555),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);n.default=i.a},555:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/scratch/prize/prize.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"prize",components:{},data:function(){return{list:[],page:1,args:!1,load:!1}},onShow:function(){var t=this;t.$showLoading({title:"加载中"}),t.$request({url:t.$api.scratch.prize,data:{page:1}}).then(function(n){t.$hideLoading(),0===n.code&&(t.list=n.data)}).catch(function(n){t.$hideLoading()})},onReachBottom:function(){var t=this;if(!t.args&&!t.load){t.load=!0;var n=t.page+1;t.$request({url:t.$api.scratch.prize,data:{page:n}}).then(function(e){if(0===e.code){var r=[n,0===e.data.length,t.list.concat(e.data)];t.page=r[0],t.args=r[1],t.list=r[2]}t.load=!1})}},methods:{submit:function(n){var e=[{mch_id:0,scratch_id:n.id,goods_list:[{id:n.goods.id,attr:n.attr_list,num:1,cart_id:0,goods_attr_id:n.attr_id}]}];t.navigateTo({url:"/pages/order-submit/order-submit?mch_list="+JSON.stringify(e)+"&preview_url="+encodeURIComponent(this.$api.scratch.order_preview)+"&submit_url="+encodeURIComponent(this.$api.scratch.order_submit)})}}};n.default=e}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},556:
/*!*******************************************************************************************************!*\
  !*** ./src/plugins/scratch/prize/prize.vue?vue&type=style&index=0&id=084464f0&scoped=true&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../node_modules/css-loader??ref--8-oneOf-1-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./prize.vue?vue&type=style&index=0&id=084464f0&scoped=true&lang=scss& */557),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);n.default=i.a},557:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/scratch/prize/prize.vue?vue&type=style&index=0&id=084464f0&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){}},[[550,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/plugins/scratch/prize/prize.js.map
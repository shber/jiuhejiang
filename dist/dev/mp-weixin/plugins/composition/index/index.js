(global.webpackJsonp=global.webpackJsonp||[]).push([["plugins/composition/index/index"],{1652:
/*!*************************************************!*\
  !*** ./src/plugins/composition/index/index.vue ***!
  \*************************************************/
/*! no static exports found */function(t,o,i){"use strict";i.r(o);var e=i(/*! ./index.vue?vue&type=template&id=5f00f490&scoped=true&filter-modules=%7B%7D& */1653),n=i(/*! ./index.vue?vue&type=script&lang=js& */1655);for(var s in n)"default"!==s&&function(t){i.d(o,t,function(){return n[t]})}(s);i(/*! ./index.vue?vue&type=style&index=0&id=5f00f490&scoped=true&lang=scss& */1657);var a=i(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),r=Object(a.default)(n.default,e.render,e.staticRenderFns,!1,null,"5f00f490",null);r.options.__file="src/plugins/composition/index/index.vue",o.default=r.exports},1653:
/*!******************************************************************************************************************!*\
  !*** ./src/plugins/composition/index/index.vue?vue&type=template&id=5f00f490&scoped=true&filter-modules=%7B%7D& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,o,i){"use strict";i.r(o);var e=i(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=5f00f490&scoped=true&filter-modules=%7B%7D& */1654);i.d(o,"render",function(){return e.render}),i.d(o,"staticRenderFns",function(){return e.staticRenderFns})},1654:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/composition/index/index.vue?vue&type=template&id=5f00f490&scoped=true&filter-modules=%7B%7D& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,o,i){"use strict";i.r(o),i.d(o,"render",function(){return e}),i.d(o,"staticRenderFns",function(){return n});var e=function(){var t=this.$createElement;this._self._c},n=[];e._withStripped=!0},1655:
/*!**************************************************************************!*\
  !*** ./src/plugins/composition/index/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */function(t,o,i){"use strict";i.r(o);var e=i(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */1656),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(o,t,function(){return e[t]})}(s);o.default=n.a},1656:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/composition/index/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,o,i){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=i(/*! vuex */12);function n(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,e)}return i}function s(t,o,i){return o in t?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i,t}var a={data:function(){return{about:"",list:[],detail:{},position:"static",iphone_x:!1,noMore:!1,showGoods:!1,page:2,height:0,scrollHeight:0,tabbarbool:!1,animationData:{},currentRoute:this.$platDiff.route(),activityBg:""}},components:{"app-composition":function(){return i.e(/*! import() | components/basic-component/app-composition/app-composition */"components/basic-component/app-composition/app-composition").then(i.bind(null,/*! ../../../components/basic-component/app-composition/app-composition.vue */2541))}},computed:function(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?n(i,!0).forEach(function(o){s(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}({},(0,e.mapState)({tabBarNavs:function(t){return t.mallConfig.navbar.navs},compositionImg:function(t){return t.mallConfig.__wxapp_img.composition}}),{},(0,e.mapGetters)("mallConfig",{getTheme:"getTheme"})),watch:{tabBarNavs:{handler:function(){this.b()},immediate:!0}},methods:{b:function(){for(var t=this.currentRoute,o=0;o<this.tabBarNavs.length;o++)if(t.includes(this.tabBarNavs[o].url.split("?")[0]))return this.tabbarbool=!0;return this.tabbarbool=!1},show:function(o){var i=this;i.detail=o,i.showGoods=!0,i.position="fixed";var e=t.createAnimation({duration:1e3,timingFunction:"ease"});i.animationData=e,setTimeout(function(){e.translateY(i.height).step(),i.animationData=e.export()},200)},close:function(){this.detail={},this.showGoods=!1,this.position="static"},toRule:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.composition.config),"&key=rule")})},toDetail:function(o){t.navigateTo({url:"/plugins/composition/detail/detail?composition_id="+o.id})},toGoods:function(o){t.navigateTo({url:"/pages/goods/goods?id="+o})},toSearch:function(){t.navigateTo({url:"/plugins/composition/search/search"})},getSetting:function(){var o=this;o.$showLoading({type:"global",text:"加载中..."}),o.$request({url:o.$api.composition.config}).then(function(i){0==i.code?(o.getList(),o.activityBg=i.data.activityBg):(o.$hideLoading(),t.showToast({title:i.msg,icon:"none",duration:1e3}))}).catch(function(t){o.$hideLoading()})},getList:function(){var o=this;o.$request({url:o.$api.composition.index}).then(function(i){if(o.$hideLoading(),0==i.code){for(var e in o.list=i.data.list,o.list.length<5&&(o.noMore=!0),o.list)for(var n in o.list[e].choose=!1,o.list[e].goods_list)o.list[e].goods_list[n].choose_attr=null,2==o.list[e].type&&(o.list[e].host_list[0].choose_attr=null,o.list[e].host_list[0].opacity=1,o.list[e].goods_list[n].choose_goods=!1,o.list[e].host_list[0].choose_goods=!1);t.setStorage({key:"composition",data:o.list})}else o.$hideLoading(),t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){o.$hideLoading()})},getMore:function(){var o=this,i=this;t.showLoading({mask:!0,title:"加载中"}),i.$request({url:i.$api.composition.index,data:{page:i.page}}).then(function(e){if(t.hideLoading(),0==e.code){if(0==e.data.list.length)return o.noMore=!0,!1;i.page++;var n=e.data.list;for(var s in n)for(var a in n[s].choose=!1,n[s].goods_list)n[s].goods_list[a].choose_attr=null,2==n[s].type&&(n[s].host_list[0].choose_attr=null,n[s].host_list[0].opacity=1,n[s].goods_list[a].choose_goods=!1,n[s].host_list[0].choose_goods=!1);i.list=i.list.concat(n),t.setStorage({key:"composition",data:i.list})}else t.hideLoading(),t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(){i.$hideLoading()})}},onLoad:function(){this.$commonLoad.onload();var o=this;t.getSystemInfo({success:function(t){o.height=-t.screenHeight,(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(o.iphone_x=!0)}}),wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]}),o.getSetting()},onShareAppMessage:function(){return this.$shareAppMessage({title:this.$children[0].navigationBarTitle,path:"/plugins/composition/index/index"})},onShareTimeline:function(){return this.$shareTimeline({title:this.$children[0].navigationBarTitle,query:{}})},onReachBottom:function(){this.noMore||this.getMore()}};o.default=a}).call(this,i(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},1657:
/*!***********************************************************************************************************!*\
  !*** ./src/plugins/composition/index/index.vue?vue&type=style&index=0&id=5f00f490&scoped=true&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */function(t,o,i){"use strict";i.r(o);var e=i(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../node_modules/css-loader??ref--8-oneOf-1-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=5f00f490&scoped=true&lang=scss& */1658),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(o,t,function(){return e[t]})}(s);o.default=n.a},1658:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/plugins/composition/index/index.vue?vue&type=style&index=0&id=5f00f490&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,o,i){}},[[1651,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/plugins/composition/index/index.js.map
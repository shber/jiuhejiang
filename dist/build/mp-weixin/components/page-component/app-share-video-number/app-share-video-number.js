(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-share-video-number/app-share-video-number"],{"29ab":function(t,e,n){"use strict";n.r(e);var r=n("c76e"),i=n("60e8");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("ccae");var o=n("2877"),c=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,"0a24a1c0",null);e["default"]=c.exports},"5a62":function(t,e,n){},"60e8":function(t,e,n){"use strict";n.r(e);var r=n("d393"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},c76e:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},ccae:function(t,e,n){"use strict";var r=n("5a62"),i=n.n(r);i.a},d393:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={name:"app-share-video-number",props:{title:{type:String,default:function(){return"生成商品海报"}},isShow:{type:Boolean,default:function(){return!1}},goodsId:null},data:function(){return{article_url:"",number:0,isLoading:!1,interval:null}},computed:a({},(0,r.mapState)({sph:function(t){return t.mallConfig.__wxapp_img.sph}})),watch:{isShow:function(t,e){t&&this.addMaterial()}},methods:{addMaterial:function(){var e=this;t.showLoading({title:"加载中"}),this.$request({url:this.$api.goods.addMaterial,data:{goods_id:this.goodsId}}).then(function(n){t.hideLoading(),0===n.code?e.getArticleUrl(n.data.media_id):e.showModal(n.msg,e.interval)}).catch(function(){})},getArticleUrl:function(e){var n=this;this.article_url="",this.isLoading=!0;var r=setInterval(function(){n.number++,n.number>15&&n.showModal("获取视频号链接异常,请稍后重试",r),n.$request({url:n.$api.goods.articleUrl,data:{media_id:e}}).then(function(e){t.hideLoading(),0===e.code?(n.article_url=e.data.url,n.article_url&&clearInterval(r)):n.showModal(e.msg,r)})},1e3);this.interval=r},showModal:function(e,n){var r=this;this.isLoading=!1,this.number=0,t.showModal({content:e,showCancel:!1,success:function(){r.close()}}),clearInterval(n)},copyText:function(){this.$utils.uniCopy({data:this.article_url,success:function(){t.showToast({title:"复制成功"}),this.close()}})},close:function(){this.isLoading=!1,clearInterval(this.interval),this.$emit("close",!1)}}};e.default=c}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-share-video-number/app-share-video-number-create-component',
    {
        'components/page-component/app-share-video-number/app-share-video-number-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("29ab"))
        })
    },
    [['components/page-component/app-share-video-number/app-share-video-number-create-component']]
]);                

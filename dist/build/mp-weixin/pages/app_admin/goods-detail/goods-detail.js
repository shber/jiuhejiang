(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/goods-detail/goods-detail"],{"206b":function(t,e,i){"use strict";i.r(e);var n=i("e80a"),o=i("dfc9");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("ce9c");var a=i("2877"),r=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,"f155d942",null);e["default"]=r.exports},"2ca2":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62"),o=s(i("d5ea"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(i,!0).forEach(function(e){c(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={data:function(){return{tempFilePaths:"",imgheight:0,menu:!1,overflow:!1,list:[],txt:"",textDialog:!1,is_delete:!1,toToggle:!1,index:0,reEdit:!1,loadingImg:!1,iphone_x:!1}},computed:r({},(0,n.mapState)({userInfo:function(t){return t.user.info},adminImg:function(t){return t.mallConfig.__wxapp_img.app_admin}})),methods:{toList:function(){this.textDialog=!1;var t={type:"text",text:this.txt};this.reEdit?(this.list.splice(this.index,1,t),this.reEdit=!1):this.list.splice(this.index,0,t)},editText:function(t,e){this.txt=e.text,this.reEdit=!0,this.textDialog=!0,this.index=t},move:function(t,e,i){this.list.splice(e,1),1==t?this.list.splice(e+1,0,i):this.list.splice(e-1,0,i)},toRemove:function(t){this.txt=null,this.is_delete=!0,this.index=t},cancel:function(){this.is_delete=!1},remove:function(){this.is_delete=!1,this.list.splice(this.index,1)},showMenu:function(t){t>-1?(this.index=t+1,this.menu=!0,this.txt="",this.toToggle=!1):(this.txt.length>0?this.toList():this.textDialog=!1,this.menu=!1)},toggle:function(t){this.index=t,this.toToggle=!0,this.menu=!0},addLine:function(){var t={type:"line"};this.list.splice(this.index,0,t),this.menu=!1},showText:function(){this.textDialog=!this.textDialog,this.menu=!1},add:function(e){var i=this;this.menu=!1,t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:[e],success:function(e){var n=e.tempFilePaths,s=i.list;n.forEach(function(e,a){var r={pic_url:"",type:"img",id:0};i.loadingImg=!0,i.toToggle?s.splice(i.index,1,r):s.splice(i.index,0,r),i.list=s;var c="";(0,o.default)({url:i.$api.upload.file,filePath:e,fileType:"image",mch_id:0,fileName:c}).then(function(e){var o=void 0;if(o=JSON.parse(e.data),0==o.code)for(var r in s)"img"===s[r].type&&""===s[r].pic_url&&(s[r].pic_url=o.data.url,s[r].id=o.data.id);i.list=s,a==n.length-1&&(i.loadingImg=!1,t.hideLoading())})})}})},imageLoad:function(t,e){var i=e.detail.height,n=e.detail.width,o=i*(750/n);this.list[t].height=o+"rpx",this.$forceUpdate()},clear:function(t){this.img.splice(t,1),this.$storage.setStorageSync("goods_detail",this.list)},save:function(){this.loadingImg?t.showToast({title:"上传图片中，请稍后...",icon:"none",duration:1e3}):(this.$storage.setStorageSync("goods_detail",this.list),setTimeout(function(){t.navigateBack()},500))}},onLoad:function(){this.$commonLoad.onload();var e=this;this.list=this.$storage.getStorageSync("goods_detail")?this.$storage.getStorageSync("goods_detail"):[],t.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(e.iphone_x=!0)}})}};e.default=l}).call(this,i("543d")["default"])},"7e24":function(t,e,i){},ae58:function(t,e){t.exports=require("../siteinfo.js")},ce9c:function(t,e,i){"use strict";var n=i("7e24"),o=i.n(n);o.a},dfc9:function(t,e,i){"use strict";i.r(e);var n=i("2ca2"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},e80a:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})}},[["fe7e","common/runtime","common/vendor"]]]);
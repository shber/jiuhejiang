(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/web/web"],{"02d9":function(e,t,n){},1541:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},3949:function(e,t,n){"use strict";n.r(t);var r=n("73f7"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=i.a},"3bea":function(e,t,n){"use strict";var r=n("02d9"),i=n.n(r);i.a},"73f7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"web",data:function(){return{url:"",webviewStyles:{progress:{width:"100%",height:"100%"}}}},onLoad:function(e){this.$commonLoad.onload(e),e.is_pay?this.url=JSON.parse(e.url).url:this.getUrl(unescape(e.url))},methods:{getUrl:function(e){e=decodeURIComponent(e);var t=e.split("?"),n=t[0],r=t[1]?t[1].split("&"):"";if(r){if(e=n,this.$user.isLogin()){for(var i in r){if("visiter_id="===r[i]){var o=this.$store.state.user.accessToken;r[i]+=o||""}var s=this.$store.state.user.info;"visiter_name="===r[i]&&(r[i]+=encodeURIComponent(s?s.nickname:"游客")),"avatar="===r[i]&&(r[i]+=encodeURIComponent(s?s.avatar:""))}this.$store.state.user.info&&r.push("user_id="+this.$store.state.user.info.options.user_id)}var a=getCurrentPages();if(a.length>1){var u=a[a.length-2],c=null;if(c=u.data.goods,c){var d="",l="";d=u.data.goods,l={pid:d.id,title:d.name,img:d.cover_pic,info:"",price:"￥"+d.price,url:""},"plugins/integral_mall/goods/goods"===u.route&&(l.price="","undefined"!=typeof d.integral&&(l.price+=d.integral+"积分 + "),l.price+="￥"+d.price),"plugins/step/goods/goods"===u.route&&(l.price=d.price),l&&r.push("product="+encodeURIComponent(JSON.stringify(l)))}}e=n+"?"+r.join("&")}else this.$user.isLogin()&&this.$store.state.user.info&&(e=n+"?user_id="+this.$store.state.user.info.options.user_id);this.url=e}},onShareAppMessage:function(){var e={path:"/pages/web/web",params:{url:encodeURIComponent(this.url)}};return this.$shareAppMessage(e)}};t.default=r},d5d4f:function(e,t,n){"use strict";n.r(t);var r=n("1541"),i=n("3949");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("3bea");var s=n("2877"),a=Object(s["a"])(i["default"],r["a"],r["b"],!1,null,"5eca233e",null);t["default"]=a.exports}},[["4dbd","common/runtime","common/vendor"]]]);
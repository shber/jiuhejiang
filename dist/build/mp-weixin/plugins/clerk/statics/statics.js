(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/clerk/statics/statics"],{"0f10":function(t,e,a){},"37e0":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("a9cc")),o=a("2f62");function n(t){return t&&t.__esModule?t:{default:t}}function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){u(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d,l=function(){return a.e("components/basic-component/app-tab-nav/app-tab-nav").then(a.bind(null,"7fd0"))},f={},p={name:"about",components:{"app-tab-nav":l},data:function(){return{noBorder:!1,tabList:[{id:0,name:"累计"},{id:1,name:"今日"},{id:-1,name:"昨日"},{id:7,name:"7日"},{id:30,name:"30日"}],cWidth:"",cHeight:"",pixelRatio:1,card_list:[],order_num_list:[],order_price_list:[],activeTab:0,total_card:0,total_order_num:0,total_order_price:0}},computed:s({},(0,o.mapState)({mall:function(t){return t.mallConfig.mall}})),onLoad:function(){this.$commonLoad.onload(),d=this,this.cWidth=t.upx2px(702),this.cHeight=t.upx2px(340),this.activeTab=0,this.getList()},methods:{showColumn:function(t,e,a,o){f[t]=new r.default({$this:d,canvasId:t,type:"area",legend:{show:!1},fontSize:9,background:"#FFFFFF",colors:a,padding:o||[15,15,4,0],pixelRatio:d.pixelRatio,animation:!1,categories:e.categories,series:e.series,xAxis:{disableGrid:!0},yAxis:{gridType:"dash",data:{disabled:!0}},dataLabel:!1,dataPointShape:!1,width:d.cWidth*d.pixelRatio,height:d.cHeight*d.pixelRatio,extra:{area:{type:"curve",addLine:!0},tooltip:{bgColor:"#000000",bgOpacity:.7}}})},tabStatus:function(t){this.activeTab=t.currentTarget.dataset.id,this.getList()},touchIt:function(t,e){f[e].showToolTip(t,{format:function(t,e){return t.color="rgba(0,0,0,0)","object"===i(t.data)?e+" "+t.name+":"+t.data.value:e+" "+t.name+":"+t.data}})},getList:function(){var e=this;e.$request({url:e.$api.clerk.statistics,data:{key:e.activeTab}}).then(function(a){if(e.$hideLoading(),0==a.code){e.card_list=a.data.card_list,e.order_num_list=a.data.order_num_list,e.order_price_list=a.data.order_price_list,e.total_card=0,e.total_order_num=0,e.total_order_price=0,e.card_list.forEach(function(t){e.total_card=(+e.total_card+ +t.num).toFixed(2)}),e.order_num_list.forEach(function(t){e.total_order_num=(+e.total_order_num+ +t.num).toFixed(2)}),e.order_price_list.forEach(function(t){e.total_order_price=(+e.total_order_price+ +t.num).toFixed(2)});var r={categories:[],series:[{name:"核销订单数",data:[]}]},o={categories:[],series:[{name:"核销订单金额",data:[]}]},n={categories:[],series:[{name:"核销卡券次数",data:[]}]},i=[15,15,4,-20];1!=e.activeTab&&-1!=e.activeTab&&7!=e.activeTab||(i=[15,15,4,0]),r=e.create(a.data.order_num_list,r),d.showColumn("canvasFirst",r,["#417afd"],i),o=e.create(a.data.order_price_list,o),d.showColumn("canvasSec",o,["#ff9000"]),n=e.create(a.data.card_list,n),d.showColumn("canvasThird",n,["#41c6fe"])}else t.showToast({title:a.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},create:function(t,e){var a,r=this;return t.forEach(function(o,n){a=t[n].time,1==r.activeTab||-1==r.activeTab?n%6==0?(a<10?a="0"+a+":00":a+=":00",e.categories.push(a)):e.categories.push(""):30==r.activeTab?n%5==0||n==t.length-1?e.categories.push(a):e.categories.push(""):e.categories.push(a),e.series[0].data.push(o.num)}),1!=r.activeTab&&-1!=r.activeTab||e.categories.push("24:00"),e}}};e.default=p}).call(this,a("543d")["default"])},"47ad":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return o})},"64ef":function(t,e,a){"use strict";a.r(e);var r=a("47ad"),o=a("e25f");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("f54a");var i=a("2877"),c=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,"24651a7a",null);e["default"]=c.exports},e25f:function(t,e,a){"use strict";a.r(e);var r=a("37e0"),o=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);e["default"]=o.a},f54a:function(t,e,a){"use strict";var r=a("0f10"),o=a.n(r);o.a}},[["fdf1","common/runtime","common/vendor"]]]);
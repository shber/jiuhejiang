(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/u-index-plugins/u-miaosha"],{"2bfc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.goodsList,function(e,n){var i=t.isShowStock(e),a=t.isShowMemPrice(e),o=t.isShowVip(e);return{$orig:t.__get_orig(e),m0:i,m1:a,m2:o}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"337a":function(t,e,n){"use strict";var i=n("dd58"),a=n.n(i);a.a},a40b:function(t,e,n){"use strict";n.r(e);var i=n("2bfc"),a=n("c737");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("337a");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"78b2605a",null);e["default"]=s.exports},bfd6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){return n.e("components/page-component/u-index-plugins/u-index-plugins").then(n.bind(null,"03c56"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/u-goods-list/u-ordinary-list")]).then(n.bind(null,"24ba"))},c={name:"u-miaosha",props:{value:{type:Object,default:function(){return{open_date:null,list:[]}}},pageHide:Boolean,theme:Object,index:Number,page_id:Number,is_required:Boolean,appImg:{type:Object,default:function(){return{plugins_out:""}}},appSetting:{type:Object,default:function(){return{is_show_stock:1,sell_out_pic:"",is_use_stock:1}}}},data:function(){return{style:"1",goods_num:20,newData:{},timer:null,time:null,is_vip:!0,tempList:[],goodsList:[],timeOut:0}},components:{uIndexPlugins:s,uOrdinaryList:u},computed:o({},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"})),beforeDestroy:function(){clearInterval(this.time),clearTimeout(this.timeOut)},watch:{pageHide:{handler:function(t){if(t)return clearInterval(this.time),void clearTimeout(this.timeOut)},immediate:!0},newData:{handler:function(t){this.$validation.isEmpty(t)||(this.tempList=this.cloneData(t.list),this.splitData())},immediate:!0}},methods:{isShowMemPrice:function(t){return 1===t.is_level&&1!==t.is_negotiable?1:0},isShowVip:function(t){return t.vip_card_appoint&&t.vip_card_appoint.discount>0&&1!==t.is_negotiable?1:0},isShowStock:function(t){return 1===this.appSetting.is_show_stock&&0===t.goods_stock?1:0},router:function(t){this.$emit("router",t)},loadData:function(){var t=this,e={type:0===this.page_id?"mall":"diy",key:"miaosha",page_id:this.page_id,index:this.index};this.goods_num&&(e.goods_num=this.goods_num),this.$request({url:this.$api.index.extra,data:e}).then(function(e){if(0===e.code&&e.data){t.newData=e.data,t.newData.str="00:00:00 点场";var n=new Date;if(new Date(t.newData.open_date).getDate()!=n.getDate())t.newData.str="预告 "+t.newData.open_date+" "+t.newData.open_time+"点场";else if(t.newData.open_time!=n.getHours())t.newData.str="预告 "+t.newData.open_time+"点场";else{var i=1e3*t.newData.date_time-n.getTime();t.time=setInterval(function(){if(i-=1e3,t.newData.str=t.newData.open_time+"点场",i<=0)clearInterval(t.time);else{var e=parseInt(i/1e3/60/60),n=parseInt(i/1e3/60%60),a=parseInt(i/1e3%60);t.timer={hour:e<10?"0"+e:e,min:n<10?"0"+n:n,sec:a<10?"0"+a:a}}},1e3)}}})},cloneData:function(t){return JSON.parse(JSON.stringify(t))},splitData:function(){var t=this;if(this.tempList.length){var e=this.tempList[0];this.goodsList.push(e),this.tempList.splice(0,1),this.tempList.length&&(this.timeOut=setTimeout(function(){t.splitData()},200))}}},mounted:function(){var t=this.$storage.getStorageSync("INDEX_MALL");this.style=t.home_pages[this.index].style,this.goods_num=t.home_pages[this.index].goods_num,this.loadData()}};e.default=c},c737:function(t,e,n){"use strict";n.r(e);var i=n("bfd6"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},dd58:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/u-index-plugins/u-miaosha-create-component',
    {
        'components/page-component/u-index-plugins/u-miaosha-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a40b"))
        })
    },
    [['components/page-component/u-index-plugins/u-miaosha-create-component']]
]);                

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order-submit/store-pick"],{"0b05":function(t,i,o){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={name:"store-pick",data:function(){return{mchIndex:null,list:null,firstGoodsId:null,plugin:null,manualLocation:!1,longitude:"",latitude:"",locationAddress:null,keyword:""}},onLoad:function(t){this.$commonLoad.onload(t),this.mchIndex=t.mchIndex,this.firstGoodsId=t.firstGoodsId||null,this.plugin=t.plugin||null},onShow:function(){this.manualLocation||this.getLocation()},methods:{clear:function(){t.hideKeyboard(),this.keyword="",this.loadData()},search:function(){this.loadData()},getLocation:function(){var i=this;t.showLoading({mask:!0,title:"正在获取位置信息"}),t.getLocation({success:function(o){t.hideLoading(),i.longitude=o.longitude,i.latitude=o.latitude,i.loadData()},fail:function(){t.hideLoading(),t.showModal({title:"提示",content:"获取位置信息失败，需要授权获取您的位置信息",showCancel:!1,confirmText:"打开授权",success:function(i){i.confirm&&t.openSetting({})}})}})},selectLocation:function(){var i=this;this.manualLocation=!0,t.chooseLocation({success:function(t){i.longitude=t.longitude,i.latitude=t.latitude,i.locationAddress=(t.address||"")+" "+t.name||"",i.locationAddress=i.locationAddress.trim(),i.loadData()}})},loadData:function(){var i=this;t.showLoading({mask:!0,title:"加载中"}),this.$request({url:"booking"===this.plugin?this.$api.book.store_list:this.$api.order.store_list,data:{keyword:this.keyword,longitude:this.longitude,latitude:this.latitude,goods_id:this.firstGoodsId}}).then(function(o){t.hideLoading(),0===o.code&&(i.list=o.data.list)}).catch(function(){t.hideLoading()})},setData:function(i){if("gift"===this.plugin){this.$store.state.gift.store_id;i,this.$store.commit("gift/storeId",i)}else{var o=this.$store.state.orderSubmit.formData;o.list[this.mchIndex].store_id=i,this.$store.commit("orderSubmit/mutSetFormData",o)}t.navigateBack()}}};i.default=o}).call(this,o("543d")["default"])},"2dcc":function(t,i,o){"use strict";o.r(i);var n=o("0b05"),e=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(i,t,function(){return n[t]})}(a);i["default"]=e.a},"4cb9":function(t,i,o){},"5d1b":function(t,i,o){"use strict";var n=o("610c"),e=o.n(n);e.a},"610c":function(t,i,o){},"881e":function(t,i,o){"use strict";o.r(i);var n=o("9e0c"),e=o("2dcc");for(var a in e)"default"!==a&&function(t){o.d(i,t,function(){return e[t]})}(a);o("5d1b"),o("f7fd");var s=o("2877"),d=Object(s["a"])(e["default"],n["a"],n["b"],!1,null,"2f072f65",null);i["default"]=d.exports},"9e0c":function(t,i,o){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},e=[];o.d(i,"a",function(){return n}),o.d(i,"b",function(){return e})},f7fd:function(t,i,o){"use strict";var n=o("4cb9"),e=o.n(n);e.a}},[["9237","common/runtime","common/vendor"]]]);
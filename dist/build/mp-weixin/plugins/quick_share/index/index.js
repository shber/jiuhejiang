(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/quick_share/index/index"],{"005c":function(t,e,i){"use strict";i.r(e);var a=i("7bcf"),o=i("ac26");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("dd4c");var s=i("2877"),r=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"3a6bbc28",null);e["default"]=r.exports},"2b5a":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return i.e("components/page-component/goods/app-goods-preview-poster").then(i.bind(null,"7dc7"))},o=function(){return Promise.all([i.e("common/vendor"),i.e("components/page-component/app-share-video-number/app-share-video-number")]).then(i.bind(null,"29ab"))},n={name:"index",components:{appGoodsPreviewPoster:a,appShareVideoNumber:o},data:function(){return{friendModel:!1,is_video:!1,tab:"goods",sort:1,page:1,args:!1,load:!1,list:[],allTextList:[],shareData:{},posterShow:!1,posterUrl:"",isShowVideoNumber:!1,currentGoods:{}}},onReachBottom:function(){var t=this;if(!t.args&&!t.load){t.load=!0;var e=t.page+1;t.$request({url:t.$api.quick_share.goods,data:{type:t.tab,sort:t.sort,page:e}}).then(function(i){if(0===i.code){i.data.list.forEach(function(t){t.is_all_btn=!1});var a=[e,0===i.data.list.length,t.list.concat(i.data.list)];t.page=a[0],t.args=a[1],t.list=a[2],t.formatList()}t.load=!1})}},onLoad:function(){this.$commonLoad.onload(),this.loadData()},onShareAppMessage:function(t){if("button"===t.from)return this.$shareAppMessage(this.shareData)},methods:{navDetail:function(e){t.navigateTo({url:"/pages/goods/goods?id="+e.goods_id})},previewImage:function(e,i){var a=e.map(function(t){return t.pic_url});t.previewImage({urls:a,current:i})},showText:function(t){var e=this.allTextList.indexOf(t);-1===e?this.allTextList.splice(-1,0,t):this.allTextList.splice(e,1)},sortChange:function(t){var e=[[],[]];this.list=e[0],this.allTextList=e[1];var i=[1,!1,t];this.page=i[0],this.args=i[1],this.sort=i[2],this.loadData()},tabChange:function(t){var e=[[],[]];this.list=e[0],this.allTextList=e[1];var i=[1,!1,t];this.page=i[0],this.args=i[1],this.tab=i[2],this.loadData()},loadData:function(){var t=this;t.$showLoading({text:"加载中"}),t.$request({url:t.$api.quick_share.goods,data:{page:1,type:t.tab,sort:t.sort}}).then(function(e){t.$hideLoading(),0===e.code&&(e.data.list.forEach(function(t){t.is_all_btn=!1}),t.list=e.data.list,t.formatList())}).catch(function(e){t.$hideLoading()})},formatList:function(){var e=this,i=this;setTimeout(function(){var a=JSON.parse(JSON.stringify(i.list)),o=t.createSelectorQuery().in(e);o.select("#opacity-hide").boundingClientRect(function(e){a.forEach(function(a,o){var n=t.createSelectorQuery().in(i);n.select("#all_hide_text_"+o).boundingClientRect(function(t){a.is_all_btn=t.height+1>=e.height}).exec()}),i.list=a}).exec()})},saveImage:function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this;a.is_video=0===e.goods_id&&e.material_video_url;var o=function(){t.showToast({title:"保存成功"})},n=function(){a.friendModel=!0,setTimeout(function(){a.friendModel=!1},1500)};if(a.is_video){var s=e.material_video_url;a.$utils.batchSave(s,"video").then(function(t){i?n():o()})}else t.showLoading({title:"图片保存中"}),a.$request({url:a.$api.quick_share.poster_list,data:{id:e.id}}).then(function(t){if(0===t.code){var s=e.share_pic.map(function(t){return t.pic_url});s.splice(-1,1,t.data.pic_url),a.$utils.batchSave(s,"image").then(function(t){i?n():o()})}}).catch(function(e){t.hideLoading()})},setPoster:function(e){if("dynamic"===this.tab)this.posterUrl=this.$api.quick_share.poster+"&id="+e.id,this.posterShow=!0;else{var i=this.$api.quick_share.poster_config+"&id="+e.id,a=this.$api.quick_share.poster_generate+"&id="+e.id;t.navigateTo({url:"/pages/poster/goods?poster_config=".concat(escape(i),"&poster_generate=").concat(escape(a))})}},copyText:function(t){this.$utils.uniCopy({data:t.share_text,success:function(){}})},batchCopy:function(t){this.copyText(t),this.saveImage(t,!0)},shareCard:function(t){this.shareShow=!0;var e=t.app_share_title?t.app_share_title:t.share_text,i="";t.share_pic[0].pic_url&&(i=t.share_pic[0].pic_url),t.app_share_pic&&(i=t.app_share_pic),this.shareData={title:e,imageUrl:i,path:0===t.goods_id?"/pages/index/index":"/pages/goods/goods",params:0===t.goods_id?{}:{id:t.goods_id}}},closeVideoNumber:function(){this.isShowVideoNumber=!1},videoNumber:function(t){this.currentGoods=t,this.isShowVideoNumber=!0}}};e.default=n}).call(this,i("543d")["default"])},7024:function(t,e,i){},"7bcf":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.list,function(e,i){var a=t.allTextList.indexOf(i),o=t.allTextList.indexOf(i);return{$orig:t.__get_orig(e),g0:a,g1:o}}));t._isMounted||(t.e0=function(e){t.posterShow=!1}),t.$mp.data=Object.assign({},{$root:{l0:i}})},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},ac26:function(t,e,i){"use strict";i.r(e);var a=i("2b5a"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},dd4c:function(t,e,i){"use strict";var a=i("7024"),o=i.n(a);o.a}},[["a13e","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods-edit/cat-edit/cat-edit"],{"074b":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62"),n=s(i("d5ea"));function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach(function(e){c(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h={data:function(){return{dialog:!1,level:[{value:1,label:"一级"},{value:2,label:"二级"},{value:3,label:"三级"}],iphone_x:!1,showParams:!1,parents:null,parents_two:null,mode:"",params:[],pickList:[],linkType:[{value:"base",name:"基础"},{value:"order",name:"订单"},{value:"marketing",name:"营销"},{value:"plugin",name:"插件"},{value:"diy",name:"微页面"}],chooseType:"base",title:"",linkList:[],list:[],mch_id:null,id:0,type:"",newIndex:0,chooseIndex:[0],catItem:{level:1,name:"",sort:100,pic_url:"",big_pic_url:"",advert_pic:"",status:1,advert_url:"",advert_open_type:"",advert_params:[],is_show:1,parent_id:""},color:""}},computed:r({},(0,a.mapState)({userInfo:function(t){return t.user.info},adminImg:function(t){return t.mallConfig.__wxapp_img.app_admin}})),methods:{paramsConfirm:function(){var e=!0,i=!1,a=void 0;try{for(var n,s=this.params[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var o=n.value;if(o.is_required&&!o.value)return t.showToast({title:o.desc,icon:"none",duration:1e3}),!1}}catch(r){i=!0,a=r}finally{try{e||null==s.return||s.return()}finally{if(i)throw a}}this.dialog=!1,this.showParams=!1,this.catItem.advert_url=this.pickList[this.newIndex].value,this.catItem.advert_open_type=this.pickList[this.newIndex].open_type,this.catItem.advert_params=this.params},toggleType:function(t){var e=this;this.chooseType=t,this.pickList=[],this.newIndex=0,this.chooseIndex[0]=0,setTimeout(function(){e.pickList=e.linkList[t]},200)},getList:function(e){var i=this;if(this.pickList=[],this.mode=e,this.newIndex=0,this.chooseIndex[0]=0,"one"==e){var a=[],n=!0,s=!1,o=void 0;try{for(var r,c=this.list[Symbol.iterator]();!(n=(r=c.next()).done);n=!0){var h=r.value;3==this.catItem.level?h.children&&a.push(h):a.push(h)}}catch(p){s=!0,o=p}finally{try{n||null==c.return||c.return()}finally{if(s)throw o}}for(var l in a)this.parents&&this.parents.value==a[l].value&&(this.newIndex=+l,this.chooseIndex[0]=+l),this.pickList.push(a[l]);if(0==this.pickList.length)return t.showToast({title:"暂无可用的一级分类",icon:"none",duration:1e3}),this.catItem.level--,!1;this.$nextTick(function(){i.dialog=!0})}if("two"==e){if(!this.parents)return t.showToast({title:"请选择归属的一级分类",icon:"none",duration:1e3}),!1;if(this.parents.children){for(var d in this.parents.children)this.parents_two&&this.parents_two.value==this.parents.children[d].value&&(this.newIndex=+d,this.chooseIndex[0]=+d),this.pickList.push(this.parents.children[d]);if(0==this.pickList.length)return t.showToast({title:"暂无二级分类",icon:"none",duration:1e3}),this.catItem.level--,!1;this.$nextTick(function(){i.dialog=!0})}}if("ad"==e){for(var u in this.pickList=this.linkList[this.chooseType],this.linkList[this.chooseType])this.catItem.advert_url&&this.catItem.advert_url==this.linkList[this.chooseType][u].value&&(this.newIndex=+u,this.chooseIndex[0]=+u);this.$nextTick(function(){i.dialog=!0})}},submitChoose:function(){"one"==this.mode?(this.dialog=!1,this.parents&&this.parents.value!=this.pickList[this.newIndex].value&&(this.parents_two=null),this.parents=this.pickList[this.newIndex]):"two"==this.mode?(this.dialog=!1,this.parents_two=this.pickList[this.newIndex]):"ad"==this.mode&&(this.pickList[this.newIndex].params?(this.params=this.pickList[this.newIndex].params,this.title=this.pickList[this.newIndex].name,this.showParams=!0):(this.dialog=!1,this.catItem.advert_url=this.pickList[this.newIndex].value,this.catItem.advert_open_type=this.pickList[this.newIndex].open_type,this.catItem.advert_params=[]))},bindChange:function(t){this.newIndex=+t.detail.value[0]},getCat:function(){var e=this,i=0==this.mch_id?e.$api.app_admin.cat:"mall"==e.type?e.$api.mch.cat:e.$api.mch.mch_cat;e.$request({url:i,data:{mch_id:e.mch_id}}).then(function(i){e.$hideLoading(),0==i.code?e.list=i.data.list:t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},getPickLine:function(){var e=this;e.$request({url:e.$api.app_admin.pick_link}).then(function(i){e.$hideLoading(),0==i.code?e.linkList=i.data.list:t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},add:function(e){var i=this;this.menu=!1,t.chooseImage({count:1,sizeType:["original","compressed"],success:function(a){var s=a.tempFilePaths;t.showLoading({mask:!0,title:"上传中..."}),s.forEach(function(a,s){var o="";(0,n.default)({url:i.$api.upload.file,filePath:a,fileType:"image",mch_id:0,fileName:o}).then(function(a){t.hideLoading();var n=void 0;n=JSON.parse(a.data),0==n.code&&("pic_url"==e?i.catItem.pic_url=n.data.url:"big_pic_url"==e?i.catItem.big_pic_url=n.data.url:"advert_pic"==e&&(i.catItem.advert_pic=n.data.url))})})}})},typeChange:function(t){if(this.id>0)return!1;this.catItem.level=t.target.value,3==this.catItem.level&&this.parents&&!this.parents.children&&(this.parents=null)},save:function(){var e=this,i=0==this.mch_id?e.$api.app_admin.cat_edit:"mall"==e.type?e.$api.mch.cat:e.$api.mch.mch_cat_edit;if(e.catItem.status=e.catItem.status.toString(),3==e.catItem.level){if(!e.parents_two||!e.parents_two.value)return t.showToast({title:"请选择归属的二级分类",icon:"none",duration:1e3}),!1;e.catItem.parent_id=e.parents_two.value}else if(2==e.catItem.level){if(!e.parents||!e.parents.value)return t.showToast({title:"请选择归属的一级分类",icon:"none",duration:1e3}),!1;e.catItem.parent_id=e.parents.value}if(!e.catItem.name)return t.showToast({title:"分类名称不能为空",icon:"none",duration:1e3}),!1;t.showLoading({mask:!0,title:"提交中..."}),e.mch_id>0&&(e.catItem.mch_id=e.mch_id),e.catItem.is_show=+e.catItem.is_show,e.catItem.status=e.catItem.status.toString(),e.$request({url:i,data:{form:JSON.stringify(e.catItem),mch_id:e.mch_id},method:"post"}).then(function(i){e.$hideLoading(),t.hideLoading(),0==i.code?(t.showToast({title:i.msg,duration:1e3}),setTimeout(function(){t.navigateBack()},1e3)):t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(i){t.hideLoading(),e.$hideLoading()})},getDetail:function(){var e=this,i=0==this.mch_id?e.$api.app_admin.cat_edit:"mall"==e.type?e.$api.mch.cat:e.$api.mch.mch_cat_edit;e.$request({url:i,data:{id:e.id,mch_id:e.mch_id}}).then(function(i){if(e.$hideLoading(),0==i.code){if(e.catItem=i.data.detail,e.catItem.level=i.data.detail.parents.length+1,e.catItem.level>1){var a=!0,n=!1,s=void 0;try{for(var o,r=e.catItem.parents[Symbol.iterator]();!(a=(o=r.next()).done);a=!0){var c=o.value;0==c.parent_id?e.parents={label:c.name,value:c.id}:e.parents_two={label:c.name,value:c.id}}}catch(h){n=!0,s=h}finally{try{a||null==r.return||r.return()}finally{if(n)throw s}}}}else t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})}},onLoad:function(e){var i=this;this.id=e.id?e.id:0,this.type=e.type?e.type:"",this.mch_id=e.mch_id?e.mch_id:0,this.color=this.mch_id>0?"#ff4544":"#446dfd",t.setNavigationBarTitle({title:this.id>0?"编辑分类":"新增分类"}),0==this.mch_id&&i.getPickLine(),this.id>0&&(i.$showLoading({type:"global",text:"加载中..."}),this.getDetail()),t.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),i.getCat()}};e.default=h}).call(this,i("543d")["default"])},"26d1":function(t,e,i){"use strict";i.r(e);var a=i("074b"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"6e06":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.params,function(e,i){var a=Array.isArray(e.value);return{$orig:t.__get_orig(e),g0:a}}));t._isMounted||(t.e0=function(e){t.catItem.status=0==t.catItem.status?1:0},t.e1=function(e){t.catItem.is_show=!t.catItem.is_show},t.e2=function(e){t.dialog=!1},t.e3=function(e){var i=t.item.value,a=e.target,n=!!a.checked;if(Array.isArray(i)){var s=null,o=t._i(i,s);a.checked?o<0&&t.$set(t.item,"value",i.concat([s])):o>-1&&t.$set(t.item,"value",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(t.item,"value",n)},t.e4=function(e){t.showParams=!1}),t.$mp.data=Object.assign({},{$root:{l0:i}})},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"75b4":function(t,e,i){"use strict";var a=i("a3d0"),n=i.n(a);n.a},a3d0:function(t,e,i){},ae58:function(t,e){t.exports=require("../siteinfo.js")},fe08:function(t,e,i){"use strict";i.r(e);var a=i("6e06"),n=i("26d1");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("75b4");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"03fe9249",null);e["default"]=r.exports}},[["521c","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-attr/app-attr"],{"22f6":function(t,r,i){"use strict";var e=i("922f"),s=i.n(e);s.a},"3eba":function(t,r,i){"use strict";(function(t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e=i("2f62"),s=o(i("1639"));function o(t){return t&&t.__esModule?t:{default:t}}function n(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,e)}return i}function a(t){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(i,!0).forEach(function(r){l(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function l(t,r,i){return r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}var u=function(){return i.e("components/page-component/goods/app-price").then(i.bind(null,"6c9f9"))},h=function(){return i.e("components/page-component/app-member-mark/app-member-mark").then(i.bind(null,"1ed7"))},c=function(){return i.e("components/page-component/goods/app-sell-tip").then(i.bind(null,"571a"))},d={name:"app-attr",mixins:[s.default],components:{appPrice:u,appMemberMark:h,appSellTip:c},props:{goods:Object,attrGroupList:Array,attrCart:{type:Array,default:function(){return[]}},cartShow:{type:[Boolean,Number],default:function(){return!0}},previewUrl:String,submitUrl:String,goodsId:{type:Number,default:function(){return 0}},show:Number,buyText:{type:String,default:function(){return"立即购买"}},plugin:{default:""},theme:{type:Object},chooseNumber:{type:Boolean,default:!0},noPay:{type:Boolean,default:!1},buyClick:{type:Boolean,default:!1},addText:{type:String,default:"加入购物车"},is_show_buy:{type:Boolean,default:!0},sign:{type:String},totalPrice:{type:String,default:"0.00"},totalNumber:{type:Number,default:0},discount:{type:Number,default:0},wholesaleType:{type:Number,default:0},attentionSign:{type:String}},data:function(){return{display:"none",number:1,selectAttr:null,newAttrGroupList:null,pic_url:null,activeAttr:[],goodsAttr:[],sell_time:0}},watch:{show:function(){"block"===this.display?(this.selectAttr=null,this.close()):"none"===this.display&&this.alert()},newData:{handler:function(){this.$emit("attr",this.newData)},immediate:!0},attrGroupList:{handler:function(){this.newAttrGroupList=this.attrGroupList,"block"==this.display&&this.alert()},immediate:!0},goods:{handler:function(){"block"==this.display&&this.alert(),this.goods&&(this.sell_time=this.goods.sell_time)},immediate:!0}},mounted:function(){if("wholesale"==this.sign)if(this.pic_url=this.goods.attr_groups[0].attr_list[0].pic_url,1==this.goods.attr_groups.length)this.goodsAttr=this.goods.attr;else{var t=!0,r=!1,i=void 0;try{for(var e,s=this.goods.attr_groups[Symbol.iterator]();!(t=(e=s.next()).done);t=!0){var o=e.value,n={attr_group_name:"",attr_group_id:"",attr_id:"",attr_name:""};n.attr_group_name=o.attr_group_name,n.attr_group_id=o.attr_group_id,n.attr_id=o.attr_list[0].attr_id,n.attr_name=o.attr_list[0].attr_name,this.activeAttr.push(n)}}catch(f){r=!0,i=f}finally{try{t||null==s.return||s.return()}finally{if(r)throw i}}var a=!0,l=!1,u=void 0;try{for(var h,c=this.goods.attr[Symbol.iterator]();!(a=(h=c.next()).done);a=!0){for(var d=h.value,p=!0,m=0;m<d.attr_list.length-1;m++){var g={attr_group_name:d.attr_list[m].attr_group_name,attr_group_id:d.attr_list[m].attr_group_id,attr_id:d.attr_list[m].attr_id,attr_name:d.attr_list[m].attr_name};JSON.stringify(g)!=JSON.stringify(this.activeAttr[m])&&(p=!1)}p&&this.goodsAttr.push(d)}}catch(f){l=!0,u=f}finally{try{a||null==c.return||c.return()}finally{if(l)throw u}}}},methods:{alert:function(){if(!this.attrGroupList||0!==this.attrGroupList.length){if("wholesale"!==this.sign){var t=this.attrGroupList,r=this.goods.attr,i=null;if(this.number=1,1===t.length){for(var e in r)for(var s in t[0].attr_list)t[0].attr_list[s].attr_id==r[e].attr_list[0].attr_id&&(r[e].stock>0?(1===r.length&&(t[0].attr_list[s].checked=!0),t[0].attr_list[s].attr_num_0=!1,this.pic_url=t[0].attr_list[s].pic_url):(this.number=0,t[0].attr_list[s].checked=!1,t[0].attr_list[s].attr_num_0=!0));1===r.length&&(i=r[0],this.$emit("attrtap",i))}this.newAttrGroupList=t,this.goods.selectAttr?this.selectAttr=this.goods.selectAttr:this.selectAttr=i}this.display="block"}},scrollGet:function(t,r){this.goods.attr_groups[r].scrollLeft=t.detail.scrollLeft,this.$forceUpdate()},toBottom:function(t){var r=this;this.$nextTick().then(function(){r.goods.attr_groups[t].scrollLeft=99999,r.$forceUpdate()})},chooseAttr:function(t,r){var i=this,e=!0,s=!1,o=void 0;try{for(var n,a=i.goods.attr_groups[t].attr_list[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var l=n.value;l.active=!1,l.attr_id==r.attr_id&&l.attr_name==r.attr_name&&(l.active=!0)}}catch(b){s=!0,o=b}finally{try{e||null==a.return||a.return()}finally{if(s)throw o}}0==t&&(i.pic_url=r.pic_url),i.activeAttr[t].attr_id=r.attr_id,i.activeAttr[t].attr_name=r.attr_name,i.goodsAttr=[];var u=!0,h=!1,c=void 0;try{for(var d,p=i.goods.attr[Symbol.iterator]();!(u=(d=p.next()).done);u=!0){for(var m=d.value,g=!0,f=0;f<m.attr_list.length-1;f++){var _={attr_group_name:m.attr_list[f].attr_group_name,attr_group_id:m.attr_list[f].attr_group_id,attr_id:m.attr_list[f].attr_id,attr_name:m.attr_list[f].attr_name};JSON.stringify(_)!=JSON.stringify(this.activeAttr[f])&&(g=!1)}g&&i.goodsAttr.push(m)}}catch(b){h=!0,c=b}finally{try{u||null==p.return||p.return()}finally{if(h)throw c}}i.$forceUpdate(),i.count()},wholesaleNumberSub:function(t){if(0==this.goodsAttr[t].number)return!1;this.goodsAttr[t].number--,1==this.goods.attr_groups.length&&(this.pic_url=this.goodsAttr[t].pic_url),this.count(t)},wholesaleNumberAdd:function(t){if(this.goodsAttr[t].number>this.goodsAttr[t].stock||this.goodsAttr[t].number==this.goodsAttr[t].stock)return!1;this.goodsAttr[t].number++,1==this.goods.attr_groups.length&&(this.pic_url=this.goodsAttr[t].pic_url),this.count(t)},wholesaleNumberBlur:function(t){+this.goodsAttr[t].number>+this.goodsAttr[t].stock&&(this.goodsAttr[t].number=this.goodsAttr[t].stock),1==this.goods.attr_groups.length&&(this.pic_url=this.goodsAttr[t].pic_url),this.count(t)},count:function(t){var r=this;this.$emit("attrtap",{goods:r.goods,goodsAttr:r.goodsAttr}),setTimeout(function(){r.selectAttr=r.goodsAttr[t]})},close:function(){this.display="none",this.$emit("close",!1)},preventD:function(){},storeAttrClick:function(r,i){var e=JSON.parse(JSON.stringify(this.newAttrGroupList)),s=this.goods.attr,o=[],n=this.attrCart;for(var a in e)for(var l in e[a].attr_list){var u=e[a].attr_list[l];if(parseInt(e[a].attr_group_id)==parseInt(i))if(parseInt(u.attr_id)===parseInt(r)){if(u.checked?u.checked=!1:u.checked=!0,u.attr_num_0)return}else u.checked=!1;u.checked&&(0==a&&(this.pic_url=e[0].attr_list[l].pic_url),o.push(e[a].attr_group_id+"-"+u.attr_id))}function h(t,r){return r.some(function(r){return t==r})}var c=[],d=null,p=1;for(var m in s){var g=[],f=0;for(var _ in s[m].attr_list){var b=s[m].attr_list[_].attr_group_id+"-"+s[m].attr_list[_].attr_id;h(b,o)||(f+=1,g.push(b))}if(0==s[m].stock&&f<=1&&(c=c.concat(g)),0==f){if(d||(d={}),d=s[m],n.forEach(function(t){t.attr_id==d.id&&(p=t.num)}),d.stock<=0)return void t.showToast({title:"库存不足",icon:"none"});d.stock<=p&&(p=d.stock)}}for(var y in 0==o.length&&(d=null),e)for(var v in e[y].attr_list){var w=e[y].attr_list[v],A=e[y].attr_group_id+"-"+w.attr_id;h(A,c)&&!h(A,o)?w.attr_num_0=!0:w.attr_num_0=!1}this.newAttrGroupList=e,this.selectAttr=d,this.number=p,this.$emit("attrtap",this.selectAttr)},numberBlur:function(r){return r=parseInt(r.value),r>this.attrNum&&(t.showToast({title:"库存不足",icon:"none"}),r=this.attrNum),this.$emit("attrtap",this.selectAttr),this.number=r},numberSub:function(){var t=this.number;if(t<=1)return!0;t--,this.number=t,this.$emit("attrtap",this.selectAttr)},numberAdd:function(){var r=this.number;if(r++,r>this.attrNum)return t.showToast({title:"库存不足",icon:"none"}),void(this.number=this.attrNum);this.number=r,this.$emit("attrtap",this.selectAttr)},cart:function(){var r=this;if(!this.submit())return!1;var i=this.selectAttr;if("pick"!==this.goods.sign&&"community"!==this.goods.sign)if("goods"===this.goods.type)if("miaosha"===this.goods.sign)this.$request({url:this.$api.miaosha.add_cart,data:{miaosha_goods_id:i.goods_id,attr_id:i.id,num:this.number},method:"post"}).then(function(i){t.showToast({title:i.msg,type:"success"}),r.display="none",r.selectAttr.number=r.number,r.$emit("selectNumber",r.selectAttr)}).catch(function(){r.display="none"});else if("flash_sale"===this.goods.sign)this.$request({url:this.$api.flash_sale.add_cart,data:{flash_goods_id:i.goods_id,attr_id:i.id,num:this.number},method:"post"}).then(function(i){t.showToast({title:i.msg,type:"success"}),r.display="none",r.selectAttr.number=r.number,r.$emit("selectNumber",r.selectAttr)}).catch(function(){r.display="none"});else if("wholesale"==this.goods.sign){if(this.totalNumber<this.goods.wholesaleGoods.rise_num)return t.showToast({title:"至少采购"+this.goods.wholesaleGoods.rise_num+this.goods.unit,image:"https://yewi.vvv6g.cn/web/mini_images/plugins/tip.png",duration:1e3}),!1;var e=[],s=!0,o=!1,n=void 0;try{for(var a,l=this.goods.attr[Symbol.iterator]();!(s=(a=l.next()).done);s=!0){var u=a.value;u.number>0&&e.push(u)}}catch(h){o=!0,n=h}finally{try{s||null==l.return||l.return()}finally{if(o)throw n}}this.$request({url:this.$api.wholesale.cart,data:{attr:JSON.stringify(e)},method:"post"}).then(function(i){if(r.display="none",0===i.code){var e=!0,s=!1,o=void 0;try{for(var n,a=r.goods.attr[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var l=n.value;l.number="0"}}catch(h){s=!0,o=h}finally{try{e||null==a.return||a.return()}finally{if(s)throw o}}var u=!0,c=!1,d=void 0;try{for(var p,m=r.goodsAttr[Symbol.iterator]();!(u=(p=m.next()).done);u=!0){var g=p.value;g.number="0"}}catch(h){c=!0,d=h}finally{try{u||null==m.return||m.return()}finally{if(c)throw d}}r.count(),t.hideLoading(),t.showToast({title:"添加成功",duration:1e3})}}).catch(function(t){r.display="none"})}else this.$request({url:this.$api.cart.add,data:{goods_id:i.goods_id,attr:i.id,num:this.number},method:"post"}).then(function(i){0===i.code?(t.showToast({title:i.msg,type:"success"}),r.display="none",r.selectAttr.number=r.number,r.$emit("selectNumber",r.selectAttr)):(t.showToast({title:i.msg,icon:"none",duration:2500}),r.display="none")}).catch(function(){r.display="none"});else"ecard"===this.goods.type&&t.showToast({title:"虚拟商品不允许加入购物车",icon:"none"});else this.$emit("add",i,this.number)},buy:function(){if(this.$user.isLogin())if(this.goods.sell_time>0)this.rightTip();else{if(!this.submit())return!1;if(this.noPay)this.$emit("pay",this.number);else{if(this.buyClick)return this.display="none",this.selectAttr.number=this.number,this.$emit("buyClick",this.selectAttr),!1;if("wholesale"==this.goods.sign){if(this.totalNumber<this.goods.wholesaleGoods.rise_num)return t.showToast({title:"至少采购"+this.goods.wholesaleGoods.rise_num+this.goods.unit,image:"https://yewi.vvv6g.cn/web/mini_images/plugins/tip.png",duration:1e3}),!1;var r={},i=[{mch_id:0,goods_list:[]}],e=!0,s=!1,o=void 0;try{for(var n,a=this.goods.attr[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var l=n.value;if(l.number>0){r={id:l.goods_id,attr:[],num:l.number,cat_id:0,goods_attr_id:l.id};var u=!0,h=!1,c=void 0;try{for(var d,p=l.attr_list[Symbol.iterator]();!(u=(d=p.next()).done);u=!0){var m=d.value,g={attr_id:m.attr_id,attr_group_id:m.attr_group_id};r.attr.push(g)}}catch(N){h=!0,c=N}finally{try{u||null==p.return||p.return()}finally{if(h)throw c}}i[0].goods_list.push(r)}}}catch(N){s=!0,o=N}finally{try{e||null==a.return||a.return()}finally{if(s)throw o}}var f="/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify(i));this.submitUrl&&this.previewUrl&&(f+="&preview_url=".concat(encodeURIComponent(this.previewUrl),"&submit_url=").concat(encodeURIComponent(this.submitUrl),"&plugin=").concat(this.plugin)),t.navigateTo({url:f})}else{var _=this.goods,b=this.number,y=this.selectAttr,v=y.id,w=[];for(var A in y.attr_list)w.push({attr_id:y.attr_list[A].attr_id,attr_group_id:y.attr_list[A].attr_group_id});var k=[{mch_id:_.mch_id?_.mch_id:0,goods_list:[{id:this.goodsId?this.goodsId:_.id,attr:w,num:b,cat_id:0,goods_attr_id:v}]}],S="/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify(k));this.submitUrl&&this.previewUrl&&(S+="&preview_url=".concat(encodeURIComponent(this.previewUrl),"&submit_url=").concat(encodeURIComponent(this.submitUrl),"&plugin=").concat(this.plugin)),t.navigateTo({url:S})}}}else this.$user.getInfo()},submit:function(){var r=this.selectAttr;return"wholesale"===this.goods.sign||(r?r.stock<=0?(t.showToast({title:"库存不足",icon:"none"}),!1):this.number<=0?(t.showToast({title:"数量不能为0",icon:"none"}),!1):!!this.goods:(t.showToast({title:"请先选规格",icon:"none"}),!1))},clickImg:function(r){t.previewImage({current:0,urls:[r]})},changeTime:function(t){this.sell_time=t}},computed:a({},(0,e.mapState)({gConfig:function(t){return t.gConfig},isTip:function(t){return t.mallConfig.mall.setting.is_remind_sell_time}}),{attrPic:function(){return this.pic_url?this.pic_url:this.goods?this.goods.cover_pic:""},priceColor:function(){return this.goods&&1===this.goods.level_show?"member":this.theme+"-color"},attrNum:function(){return this.selectAttr?this.selectAttr.stock:this.goods?this.goods.goods_num:0},attrPrice:function(){var t;return this.selectAttr?(t=1===this.goods.level_show?this.selectAttr.price_member:this.selectAttr.price,"wholesale"==this.sign?0==this.selectAttr.number?"undefined":0==this.wholesaleType?(t=(t*(this.discount/10)).toFixed(2),t):(t=(t-this.discount).toFixed(2),t):t):"wholesale"==this.sign?"undefined":this.goods?this.goods.hasOwnProperty("price_min")?this.goods.price_min:this.goods.price:0},newData:function(){var t=this.number,r=this.display,i=this.selectAttr;return{number:t,display:r,selectAttr:i}}},(0,e.mapGetters)("iPhoneX",{boolEmpty:"getBoolEmpty"}),{},(0,e.mapGetters)({userInfo:"user/info"}),{showRight:function(){return!(0==this.isTip&&this.goods.sell_time>0)&&this.is_show_buy},remindParams:function(){return{sell_time:this.sell_time,goods_id:this.goods.id,template_message_list:this.goods.template_message_list,buy_text:this.buyText}}})};r.default=d}).call(this,i("543d")["default"])},"5cc6":function(t,r,i){"use strict";var e=function(){var t=this,r=t.$createElement;t._self._c},s=[];i.d(r,"a",function(){return e}),i.d(r,"b",function(){return s})},"922f":function(t,r,i){},a8f8:function(t,r,i){"use strict";i.r(r);var e=i("3eba"),s=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(r,t,function(){return e[t]})}(o);r["default"]=s.a},d3c4:function(t,r,i){"use strict";i.r(r);var e=i("5cc6"),s=i("a8f8");for(var o in s)"default"!==o&&function(t){i.d(r,t,function(){return s[t]})}(o);i("22f6");var n=i("2877"),a=Object(n["a"])(s["default"],e["a"],e["b"],!1,null,"2a490656",null);r["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-attr/app-attr-create-component',
    {
        'components/page-component/app-attr/app-attr-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d3c4"))
        })
    },
    [['components/page-component/app-attr/app-attr-create-component']]
]);                

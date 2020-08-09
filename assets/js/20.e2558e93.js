(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{495:function(t,e,o){},498:function(t,e,o){"use strict";var n=o(495);o.n(n).a},499:function(t,e,o){"use strict";var n={name:"ZingButton",components:{Icon:o(497).a},props:{type:{type:String,default:"default"},loading:{type:Boolean,default:!1},icon:String,iconPosition:{type:String,default:"left",validate:t=>!("left"!==t&&"right"!==t)},disabled:{type:Boolean,default:!1}},computed:{classes(){return{["icon-"+this.iconPosition]:!0,loading:this.loading,["btn-"+this.type]:!0,disabled:this.disabled}}}},s=(o(498),o(43)),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.classes,on:{click:function(e){return t.$emit("click")}}},[t.loading?o("Icon",{staticClass:"icon",attrs:{name:"loading"}}):t._e(),t._v(" "),!t.loading&&t.icon?o("Icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),o("div",{staticClass:"content"},[t._t("default")],2)],1)}),[],!1,null,"400c25e0",null);e.a=i.exports},502:function(t,e,o){},511:function(t,e,o){"use strict";var n=o(502);o.n(n).a},512:function(t,e,o){"use strict";o(65);var n,s={name:"ZingToast",components:{ZingIcon:o(497).a},data:()=>({show:!1}),props:{type:{type:String,default:"default"},position:{type:String,default:"middle",validator:t=>["top","middle","bottom"].indexOf(t)>-1},autoClose:{type:Boolean,default:!0},closeDelay:{type:Number,default:3e3},closeButton:{type:Object,default:()=>({type:"icon",text:void 0,callback:void 0})},enableHtml:{type:Boolean,default:!1},parentNode:[String,Object],zIndex:Number},computed:{toastClasses(){let{type:t,position:e,parentNode:o}=this;return[t,e,o?"hasParent":""]},toastStyle(){return{zIndex:this.zIndex}}},mounted(){this.autoClose&&setTimeout(()=>{this.close()},this.closeDelay),this.show=!0,this.closeButton.text&&(this.closeButton.type="text",this.initLineHeight())},methods:{initLineHeight(){this.$nextTick(()=>{let t=this.$refs.toast.getBoundingClientRect().height-10+"px";this.$refs.line.style.height=t})},close(t){t&&t(),this.show=!1},afterLeave(){this.$emit("close"),this.$el.remove(),this.$destroy()},clickCloseButton(){this.close(),this.closeButton&&this.closeButton.callback&&this.closeButton.callback()}}},i=(o(511),o(43)),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade"},on:{"after-leave":t.afterLeave}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"toast",staticClass:"toast",class:t.toastClasses,style:t.toastStyle},[o("div",{staticClass:"content"},[t.enableHtml?o("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default")],2),t._v(" "),o("div",{staticClass:"closeButton",on:{click:t.clickCloseButton}},["icon"===t.closeButton.type?o("zing-icon",{staticClass:"icon",attrs:{name:"circleClose"}}):o("div",{ref:"text",staticClass:"text"},[o("div",{ref:"line",staticClass:"line"}),t._v(" "),o("span",[t._v(t._s(t.closeButton.text))])])],1)])])}),[],!1,null,null,null).exports,l=o(0),c=["type","position","closeButton","position","enableHtml","parentNode","zIndex","closeDelay"];e.a={install:function(t){t.prototype.$toast=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n&&n.close(),n=u(t,e);var o=e.parentNode;o?("string"==typeof o&&(o=document.querySelector(o)),o.appendChild(n.$el)):document.body.appendChild(n.$el)}}};function u(t,e){var o=new(l.a.extend(a));o.$slots.default=[t];var n=e.closeButton;return n&&void 0===n.text&&void 0===n.type&&(n.type="icon"),c.forEach((function(t){e[t]&&(o.$props[t]=e[t])})),o.$on("close",(function(){o.$el.remove(),o.$destroy()})),o.$mount(),o}},641:function(t,e,o){"use strict";o.r(e);var n=o(512),s=o(496),i=o(499);o(0).a.use(n.a);var a={name:"collapse-demos",components:{templateDemos:s.default,Button:i.a},mounted:function(){},methods:{showToast1:function(){this.$toast("默认信息")},showToast2:function(){this.$toast("顶部信息",{position:"top",zIndex:30})},showToast3:function(){this.$toast("底部信息",{position:"bottom"})}},data:function(){return{code:"\nthis.$toast('默认信息',)\nthis.$toast('顶部信息', {position: 'top', zIndex: 30})\nthis.$toast('底部信息', {position: 'bottom'})\n "}}},l=o(43),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("templateDemos",{attrs:{title:"基本用法",code:t.code}},[o("Button",{on:{click:t.showToast1}},[t._v("默认信息")]),t._v(" "),o("Button",{on:{click:t.showToast2}},[t._v("顶部信息")]),t._v(" "),o("Button",{on:{click:t.showToast3}},[t._v("底部信息")])],1)}),[],!1,null,"091ada90",null);e.default=c.exports}}]);
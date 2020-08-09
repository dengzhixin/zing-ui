(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{495:function(t,e,o){},498:function(t,e,o){"use strict";var s=o(495);o.n(s).a},499:function(t,e,o){"use strict";var s={name:"ZingButton",components:{Icon:o(497).a},props:{type:{type:String,default:"default"},loading:{type:Boolean,default:!1},icon:String,iconPosition:{type:String,default:"left",validate:t=>!("left"!==t&&"right"!==t)},disabled:{type:Boolean,default:!1}},computed:{classes(){return{["icon-"+this.iconPosition]:!0,loading:this.loading,["btn-"+this.type]:!0,disabled:this.disabled}}}},n=(o(498),o(43)),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.classes,on:{click:function(e){return t.$emit("click")}}},[t.loading?o("Icon",{staticClass:"icon",attrs:{name:"loading"}}):t._e(),t._v(" "),!t.loading&&t.icon?o("Icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),o("div",{staticClass:"content"},[t._t("default")],2)],1)}),[],!1,null,"400c25e0",null);e.a=a.exports},502:function(t,e,o){},511:function(t,e,o){"use strict";var s=o(502);o.n(s).a},512:function(t,e,o){"use strict";o(65);var s,n={name:"ZingToast",components:{ZingIcon:o(497).a},data:()=>({show:!1}),props:{type:{type:String,default:"default"},position:{type:String,default:"middle",validator:t=>["top","middle","bottom"].indexOf(t)>-1},autoClose:{type:Boolean,default:!0},closeDelay:{type:Number,default:3e3},closeButton:{type:Object,default:()=>({type:"icon",text:void 0,callback:void 0})},enableHtml:{type:Boolean,default:!1},parentNode:[String,Object],zIndex:Number},computed:{toastClasses(){let{type:t,position:e,parentNode:o}=this;return[t,e,o?"hasParent":""]},toastStyle(){return{zIndex:this.zIndex}}},mounted(){this.autoClose&&setTimeout(()=>{this.close()},this.closeDelay),this.show=!0,this.closeButton.text&&(this.closeButton.type="text",this.initLineHeight())},methods:{initLineHeight(){this.$nextTick(()=>{let t=this.$refs.toast.getBoundingClientRect().height-10+"px";this.$refs.line.style.height=t})},close(t){t&&t(),this.show=!1},afterLeave(){this.$emit("close"),this.$el.remove(),this.$destroy()},clickCloseButton(){this.close(),this.closeButton&&this.closeButton.callback&&this.closeButton.callback()}}},a=(o(511),o(43)),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade"},on:{"after-leave":t.afterLeave}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"toast",staticClass:"toast",class:t.toastClasses,style:t.toastStyle},[o("div",{staticClass:"content"},[t.enableHtml?o("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default")],2),t._v(" "),o("div",{staticClass:"closeButton",on:{click:t.clickCloseButton}},["icon"===t.closeButton.type?o("zing-icon",{staticClass:"icon",attrs:{name:"circleClose"}}):o("div",{ref:"text",staticClass:"text"},[o("div",{ref:"line",staticClass:"line"}),t._v(" "),o("span",[t._v(t._s(t.closeButton.text))])])],1)])])}),[],!1,null,null,null).exports,l=o(0),c=["type","position","closeButton","position","enableHtml","parentNode","zIndex","closeDelay"];e.a={install:function(t){t.prototype.$toast=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s&&s.close(),s=u(t,e);var o=e.parentNode;o?("string"==typeof o&&(o=document.querySelector(o)),o.appendChild(s.$el)):document.body.appendChild(s.$el)}}};function u(t,e){var o=new(l.a.extend(i));o.$slots.default=[t];var s=e.closeButton;return s&&void 0===s.text&&void 0===s.type&&(s.type="icon"),c.forEach((function(t){e[t]&&(o.$props[t]=e[t])})),o.$on("close",(function(){o.$el.remove(),o.$destroy()})),o.$mount(),o}},642:function(t,e,o){"use strict";o.r(e);var s=o(512),n=o(496),a=o(499);o(0).a.use(s.a);var i={name:"collapse-demos",components:{templateDemos:n.default,Button:a.a},mounted:function(){},methods:{showToast1:function(){this.$toast("默认信息",{closeButton:{type:"icon"}})},showToast2:function(){this.$toast("这是一段很长自定义文字，你猜有多长？你数一数大概有几个字，我猜你肯定没有数，我来告诉你吧，这里有100个字，不信？那你自己去数数吧，数完再来告诉我，我来改。",{closeButton:{text:"关闭"}})},showToast3:function(){var t=this;this.$toast("携带关闭回调函数",{closeButton:{callback:function(){t.$toast("我是回调函数的Toast")}}})},showToast4:function(){this.$toast("我将在2秒后关闭",{closeDelay:2e3})}},data:function(){return{code:"\nthis.$toast(`默认信息`, {closeButton: {type: 'icon'}})\nthis.$toast(`自定义文字`, {closeButton: {text: '关闭'}})\nthis.$toast(`携带关闭回调函数`, {\n    closeButton:\n        {\n            callback: () => {\n                this.$toast(`我是回调函数的Toast`)\n            }\n        }\n})\nthis.$toast(`我将在2秒后关闭`, {closeDelay: 2000})\n"}}},l=o(43),c=Object(l.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("templateDemos",{attrs:{title:"自定义关闭按钮",code:t.code}},[o("Button",{attrs:{type:"default"},on:{click:t.showToast1}},[t._v("默认信息")]),t._v(" "),o("Button",{on:{click:t.showToast2}},[t._v("自定义文字")]),t._v(" "),o("Button",{on:{click:t.showToast3}},[t._v("关闭按钮回调函数")]),t._v(" "),o("Button",{on:{click:t.showToast4}},[t._v("设置自动关闭时间")])],1)}),[],!1,null,"3e26bf2e",null);e.default=c.exports}}]);
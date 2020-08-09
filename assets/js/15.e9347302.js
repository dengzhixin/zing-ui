(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{556:function(e,t,n){},557:function(e,t,n){},558:function(e,t,n){},602:function(e,t,n){"use strict";var a=n(556);n.n(a).a},603:function(e,t,n){"use strict";var a=n(557);n.n(a).a},604:function(e,t,n){"use strict";var a=n(558);n.n(a).a},616:function(e,t,n){"use strict";n.r(t);var a=n(496),i={props:{},data:()=>({layoutClass:{hasSider:!1}}),mounted(){this.$children.forEach(e=>{"ZingAside"===e.$options.name&&(this.layoutClass.hasSider=!0)})}},o=(n(602),n(43)),s=Object(o.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"55cbb11a",null).exports,r={data:()=>({}),mounted(){}},d=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"0721c0d4",null).exports,u={name:"ZingContent"},l=(n(603),Object(o.a)(u,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"main"},[this._t("default")],2)}),[],!1,null,"6732ec78",null).exports),c={name:"ZingAside",props:{width:[String,Number]},computed:{styles(){let{width:e}=this;if(e)return"number"==typeof e&&(e+="px"),{width:e}}}},h={},_={name:"button-simple-demos",components:{Layout:s,Header:d,Main:l,Aside:Object(o.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"aside",style:this.styles},[this._t("default")],2)}),[],!1,null,"98f52650",null).exports,Footer:Object(o.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"2feb3a5e",null).exports,templateDemos:a.default},data:function(){return{code:'\n                <h5>上下布局</h5>\n        <Layout>\n            <Header>Header</Header>\n            <Main>Main</Main>\n        </Layout>\n\n        <h5>上中下布局</h5>\n        <Layout>\n            <Header>Header</Header>\n            <Main>Main</Main>\n            <Footer>Footer</Footer>\n        </Layout>\n\n        <h5>左右布局</h5>\n        <Layout>\n            <Aside width="200px">Aside</Aside>\n            <Main>Main</Main>\n        </Layout>\n\n        <h5>组合布局1</h5>\n        <Layout>\n            <Header>Header</Header>\n            <Layout>\n                <Aside width="200px">Aside</Aside>\n                <Main>Main</Main>\n            </Layout>\n        </Layout>\n        <h5>组合布局2</h5>\n\n        <Layout>\n            <Header>Header</Header>\n            <Layout>\n                <Aside width="200px">Aside</Aside>\n                <Layout>\n                    <Main>Main</Main>\n                    <Footer>Footer</Footer>\n                </Layout>\n            </Layout>\n        </Layout>\n        <h5>组合布局3</h5>\n        <Layout>\n            <Aside width="200px">Aside</Aside>\n            <Layout>\n                <Header>Header</Header>\n                <Main>Main</Main>\n                <Footer>Footer</Footer>\n            </Layout>\n        </Layout>\n<style lang="scss" scoped>\n    .header, .footer {\n        background-color: #B3C0D1;\n        color: #333;\n        text-align: center;\n        line-height: 60px;\n    }\n\n    .aside {\n        background-color: #D3DCE6;\n        color: #333;\n        text-align: center;\n        line-height: 200px;\n    }\n\n    .main {\n        background-color: #E9EEF3;\n        color: #333;\n        text-align: center;\n        line-height: 160px;\n    }\n\n    body > .container {\n        margin-bottom: 40px;\n    }\n\n    .container:nth-child(5) .aside,\n    .container:nth-child(6) .aside {\n        line-height: 260px;\n    }\n\n</style>\n'}}},v=(n(604),Object(o.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("templateDemos",{attrs:{title:"常见页面布局\n",code:e.code}},[n("h5",[e._v("上下布局")]),e._v(" "),n("Layout",[n("Header",[e._v("Header")]),e._v(" "),n("Main",[e._v("Main")])],1),e._v(" "),n("h5",[e._v("上中下布局")]),e._v(" "),n("Layout",[n("Header",[e._v("Header")]),e._v(" "),n("Main",[e._v("Main")]),e._v(" "),n("Footer",[e._v("Footer")])],1),e._v(" "),n("h5",[e._v("左右布局")]),e._v(" "),n("Layout",[n("Aside",{attrs:{width:"200px"}},[e._v("Aside")]),e._v(" "),n("Main",[e._v("Main")])],1),e._v(" "),n("h5",[e._v("左中右布局")]),e._v(" "),n("Layout",[n("Aside",{attrs:{width:"100px"}},[e._v("Aside")]),e._v(" "),n("Layout",[n("Main",[e._v("Main")]),e._v(" "),n("Aside",{attrs:{width:"100px"}},[e._v("Aside")])],1)],1),e._v(" "),n("h5",[e._v("组合布局1")]),e._v(" "),n("Layout",[n("Header",[e._v("Header")]),e._v(" "),n("Layout",[n("Aside",{attrs:{width:"200px"}},[e._v("Aside")]),e._v(" "),n("Main",[e._v("Main")])],1)],1),e._v(" "),n("h5",[e._v("组合布局2")]),e._v(" "),n("Layout",[n("Header",[e._v("Header")]),e._v(" "),n("Layout",[n("Aside",{attrs:{width:"200px"}},[e._v("Aside")]),e._v(" "),n("Layout",[n("Main",[e._v("Main")]),e._v(" "),n("Footer",[e._v("Footer")])],1)],1)],1),e._v(" "),n("h5",[e._v("组合布局3")]),e._v(" "),n("Layout",[n("Aside",{attrs:{width:"200px"}},[e._v("Aside")]),e._v(" "),n("Layout",[n("Header",[e._v("Header")]),e._v(" "),n("Main",[e._v("Main")]),e._v(" "),n("Footer",[e._v("Footer")])],1)],1)],1)}),[],!1,null,"0258cff7",null));t.default=v.exports}}]);
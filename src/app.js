import Vue from 'vue'
import Icon from "./Icon";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import TextBox from './TextBox';
import Col from "./Col";
import Row from './Row'
import Layout from "./Layout";
import Header from "./Header";
import Sider from "./Aside";
import Footer from "./Footer";
import Content from "./Main";
import Toast from "./Toast.js";
import Tabs from "./Tabs";
import TabsHead from "./TabsHead";
import TabsHeadItem from "./TabsHeadItem";
import TabsBody from "./TabsBody";
import TabsBodyPane from "./TabsBodyPane";
import Popover from "./Popover";
import Collapse from "./Collapse";
import CollapseItem from "./CollapseItem";
import Switch from "./Switch";
Vue.component('z-icon',Icon)
Vue.component('z-button',Button)
Vue.component('z-button-group',ButtonGroup)
Vue.component('z-text-box',TextBox)
Vue.component('z-col',Col)
Vue.component('z-row',Row)
Vue.component('z-layout',Layout)
Vue.component('z-header',Header)
Vue.component('z-sider',Sider)
Vue.component('z-footer',Footer)
Vue.component('z-content',Content)
Vue.component('z-tabs',Tabs)
Vue.component('z-tabs-head',TabsHead)
Vue.component('z-tabs-item',TabsHeadItem)
Vue.component('z-tabs-body',TabsBody)
Vue.component('z-tabs-pane',TabsBodyPane)
Vue.component('z-popover',Popover)
Vue.component('z-collapse',Collapse)
Vue.component('z-collapse-item',CollapseItem)
Vue.component('z-switch',Switch)
Vue.use(Toast)

const vue = new Vue({
    el:'#app',
    data:{
        switchValue:false,
        loading:false,
        message:'sss',
        collapseSelected:[
            'item1'
        ]
    },
    methods:{
        switchChange(value  ){
            console.log(value);
        },
        showToast(){
            this.$toast(
                `${Math.random()*100}`,
                {
                    parentNode:'#toastParent',
                    closeButton:{
                        text:'关闭',
                        callback:()=>{
                    console.log("关闭回调")
                    }}})
        }
    }
})



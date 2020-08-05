import Vue from 'vue'
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import TextBox from './TextBox';
import Col from "./Col";
import Row from './Row'
import Layout from "./Layout";
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import Content from "./Content";
import Toast from "./Toast.js";
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
Vue.use(Toast)

const vue = new Vue({
    el:'#app',
    data:{
        loading:false,
        message:'sss'
    },
    methods:{
        showToast(){
            this.$toast(
                `${Math.random()*100}`,
                {closeButton:{callback:()=>{
                    console.log("关闭回调")
                    }}})
        }
    }
})



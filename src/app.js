import Vue from 'vue'
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import TextBox from './TextBox';
Vue.component('z-button',Button)
Vue.component('z-button-group',ButtonGroup)
Vue.component('z-text-box',TextBox)
const vue = new Vue({
    el:'#app',
    data:{
        loading:false,
        message:'sss'
    }
})


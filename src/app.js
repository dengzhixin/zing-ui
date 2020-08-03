import Vue from 'vue'
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import TextBox from './TextBox';
import Col from "./Col";
import Row from './Row'
Vue.component('z-button',Button)
Vue.component('z-button-group',ButtonGroup)
Vue.component('z-text-box',TextBox)
Vue.component('z-col',Col)
Vue.component('z-row',Row)
const vue = new Vue({
    el:'#app',
    data:{
        loading:false,
        message:'sss'
    }
})


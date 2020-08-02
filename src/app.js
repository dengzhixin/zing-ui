import Vue from 'vue'
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
Vue.component('z-button',Button)
Vue.component('z-button-group',ButtonGroup)
const vue = new Vue({
    el:'#app',
    data:{
        loading:false
    }
})


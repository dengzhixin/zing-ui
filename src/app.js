import Vue from 'vue'
import Button from "./Button";
Vue.component('z-button',Button)
const vue = new Vue({
    el:'#app',
    data:{
        loading:false
    }
})


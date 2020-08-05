import Toast from "./Toast.vue";
import Vue from 'vue'

let currentToast
const propsKey = ['type', 'position', 'closeButton', 'position', 'enableHtml']

export default {
    install(vue) {
        vue.prototype.$toast = (message,options) => {
            currentToast && currentToast.close()
            currentToast = createToast(message,options)
            document.body.appendChild(currentToast.$el)
        }
    }
}

function createToast(message,options={}){
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor
    toast.$slots.default = [message]

    //单独处理closeButton只穿回调，不传其他的情况
    let closeButton =options.closeButton
    if(closeButton && closeButton.text===undefined && closeButton.type === undefined){
        closeButton.type='icon'
    }

    propsKey.forEach((key) => {
        if(options[key]){
            toast.$props[key] =options[key]
        }
    })

    toast.$on('close',()=>{
        currentToast=null
    })
    toast.$mount()
    return toast
}


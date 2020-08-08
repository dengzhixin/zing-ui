import Toast from "./Toast.vue";
import Vue from 'vue'

let currentToast
const propsKey = ['type', 'position', 'closeButton', 'position', 'enableHtml','parentNode','zIndex','closeDelay']

export default {
    install(vue) {
        vue.prototype.$toast = (message, options = {}) => {
            currentToast && currentToast.close()
            currentToast = createToast(message, options)
            let parentNode = options.parentNode
            if (parentNode) {
                if (typeof parentNode === 'string') {
                    parentNode = document.querySelector(parentNode)
                }
                parentNode.appendChild(currentToast.$el);

            } else {
                document.body.appendChild(currentToast.$el)
            }
        }
    }
}

function createToast(message, options) {
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor
    toast.$slots.default = [message]

    //单独处理closeButton只穿回调，不传其他的情况
    let closeButton = options.closeButton
    if (closeButton && closeButton.text === undefined && closeButton.type === undefined) {
        closeButton.type = 'icon'
    }

    propsKey.forEach((key) => {
        if (options[key]) {
            toast.$props[key] = options[key]
        }
    })

    toast.$on('close', () => {
        toast.$el.remove()
        toast.$destroy()
        // currentToast = null
    })
    toast.$mount()
    return toast
}


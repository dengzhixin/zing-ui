import Toast from "./Toast.vue";
import Vue from 'vue'

export default {
    install(vue) {
        vue.prototype.$toast = (options) => {
            if (typeof options === 'string') {
                options = {
                    message: options
                }
            }
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor
            toast.$slots.default = [options.message]

            const props = ['type', 'position', 'closeButton', 'position']
            props.forEach((key) => {
                toast.$props[key] = options[key]
            })

            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
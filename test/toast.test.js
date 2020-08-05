import {describe} from "mocha";

const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/Toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    it('接收type', () => {
        const Constructor = Vue.extend(Toast)
        const div = document.createElement('div')
        const vm = new Constructor({
            propsData: {
                type: 'danger'
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('danger')).eq(true)
    })
    it('接收autoClose和closeDelay', (done) => {
        const Constructor = Vue.extend(Toast)
        const div = document.createElement('div')
        const vm = new Constructor({
            propsData: {
                autoClose: true,
                closeDelay: 1000
            }
        }).$mount(div)
        setTimeout(() => {
            expect(document.body.contains(vm.$el)).to.eq(false)
            div.remove()
            vm.$destroy()
            done()
        }, 1500)


    })

    it('接收parentNode', () => {
        const Constructor = Vue.extend(Toast)
        const div = document.createElement('div')
        const vm = new Constructor({
            propsData: {
               parentNode:'body'
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('hasParent')).eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收closeButton', (done) => {
        const Constructor = Vue.extend(Toast)
        const div = document.createElement('div')
        const callback = sinon.fake()
        const vm = new Constructor({
            propsData: {
                closeButton: {
                    text:'关闭',
                    callback
                }
            }
        }).$mount(div)
        const closeButton = vm.$el.querySelector('.closeButton')
        expect(closeButton.innerText.trim()).eq('关闭')
        setTimeout(()=>{
            closeButton.click()
            expect(callback).called
            div.remove()
            vm.$destroy()
            done()
        },200)


    })
    it('接收enableHtml', () => {
        const Constructor = Vue.extend(Toast)
        const div = document.createElement('div')
        const callback = sinon.fake()
        const vm = new Constructor({
            propsData: {
                enableHtml:true
            }
        })
        vm.$slots.default = [`<a id="aaa" href="#">超链接</a>`]
        vm.$mount(div)
        const aaa = vm.$el.querySelector('#aaa')
        expect(aaa).exist
        div.remove()
        vm.$destroy()
    })
    it('接收position', () => {
        const Constructor = Vue.extend(Toast)
        const div = document.createElement('div')
        const callback = sinon.fake()
        const vm = new Constructor({
            propsData: {
                position:'middle'
            }
        })
        vm.$mount(div)
        expect(vm.$el.classList.contains('middle')).eq(true)
        div.remove()
        vm.$destroy()
    })

})
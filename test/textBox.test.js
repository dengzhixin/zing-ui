const expect = chai.expect;
import Vue from 'vue'
import TextBox from '../src/TextBox.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TextBox', () => {
    it('存在.', () => {
        expect(TextBox).to.be.ok
    })
    it('设置value.', () => {
        const Constructor = Vue.extend(TextBox)
        const vm = new Constructor({
            propsData: {
                value: '123'
            }
        }).$mount()
        const input = vm.$el.querySelector('input')
        expect(input.value).to.equal('123')
        vm.$destroy()
    })
    it('设置禁止状态', () => {
        const Constructor = Vue.extend(TextBox)
        const vm = new Constructor({
            propsData: {
                value: '123',
                disabled:true
            }
        }).$mount()
        const input = vm.$el.querySelector('input')
        console.log(input.$el)
        expect(input.disabled).to.equal(true)
        vm.$destroy()
    })
    it('设置只读状态', () => {
        const Constructor = Vue.extend(TextBox)
        const vm = new Constructor({
            propsData: {
                value: '123',
                readonly:true
            }
        }).$mount()
        const input = vm.$el.querySelector('input')
        console.log(input.outerHTML);
        expect(input.readOnly).to.equal(true)
        vm.$destroy()
    })


})
import {describe} from "mocha";

const expect = chai.expect;
import Vue from 'vue'
import TextBox from '../src/TextBox.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TextBox传值测试', () => {
    const Constructor = Vue.extend(TextBox)
    let vm
    afterEach(() => {
        vm && vm.$destroy()
    })

    it('存在.', () => {
        expect(TextBox).to.be.ok
    })
    it('设置value.', () => {
        vm = new Constructor({
            propsData: {
                value: '123'
            }
        }).$mount()
        const input = vm.$el.querySelector('input')
        expect(input.value).to.equal('123')
    })
    it('设置禁止状态', () => {
        vm = new Constructor({
            propsData: {
                value: '123',
                disabled: true
            }
        }).$mount()
        const input = vm.$el.querySelector('input')
        console.log(input.$el)
        expect(input.disabled).to.equal(true)
    })
    it('设置只读状态', () => {
        vm = new Constructor({
            propsData: {
                value: '123',
                readonly: true
            }
        }).$mount()
        const input = vm.$el.querySelector('input')
        console.log(input.outerHTML);
        expect(input.readOnly).to.equal(true)
    })

})

describe('事件测试', () => {
    const Constructor = Vue.extend(TextBox)
    let vm
    afterEach(() => {
        vm && vm.$destroy()
    })
    it('change/input/focus/blur测试', () => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        let events = ['change', 'input', 'focus', 'blur']
        events.forEach((eventName) => {
            vm.$on(eventName, callback)
            let event = new Event(eventName)
            let textbox = vm.$el.querySelector('input')
            textbox.dispatchEvent(event)
            expect(callback).to.calledWith(event)
        })

    })

})
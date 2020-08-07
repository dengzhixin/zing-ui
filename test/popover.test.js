import {describe} from "mocha";

const expect = chai.expect;
import Vue from 'vue'
import Popover from "../src/Popover";
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.ok
    })

    it('接收position.', () => {
        const Constructor = Vue.extend(Popover)
        const vm = new Constructor({
            propsData: {
                position: 'left'
            }
        }).$mount()
        expect(vm.$el.querySelector('.popoverContent').classList.contains('left')).eq(true)
        vm.$destroy()
    })
    it('接收trigger.', (done) => {
        const Constructor = Vue.extend(Popover)
        const vm = new Constructor({
            propsData: {
                trigger: 'hover'
            }
        }).$mount()
        const {triggerWrapper} = vm.$refs;
        const event = new Event('mouseenter')
        triggerWrapper.dispatchEvent(event)
        setTimeout(()=>{
            expect(document.querySelector('.popoverContent').style.display).not.equal('none')
            done()
            vm.$destroy()

        },1000)
    })


})

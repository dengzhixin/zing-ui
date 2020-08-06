const expect = chai.expect;
import Vue from 'vue'
import TabsHeadItem from '../src/TabsHeadItem.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsHeadItem', () => {
    it('存在.', () => {
        expect(TabsHeadItem).to.be.ok
    })
    it('接收name.', () => {
        const Constructor = Vue.extend(TabsHeadItem)
        const vm = new Constructor({
            propsData: {
                name: 'xxx'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.equal('xxx')

        vm.$destroy()
    })
    it('接收disabled.', () => {
        const Constructor = Vue.extend(TabsHeadItem)
        const vm = new Constructor({
            propsData: {
                name: 'xxx',
                disabled:true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.equal(true)

        vm.$destroy()
    })

})

import {describe} from "mocha";

const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/Row.vue'
import Col from '../src/Col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
        expect(Col).to.be.ok
    })
    it('Row 接收 gutter.', (done) => {
        Vue.component('z-row',Row)
        Vue.component('z-col',Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
        <z-row  gutter="20">
            <z-col></z-col>
            <z-col></z-col>
        </z-row>
        `
        const vm = new Vue({
            el:div
        })
        setTimeout(()=>{
            let row = vm.$el.querySelectorAll('.row')
            expect(row[0].style.marginLeft).to.eq('-10px')
            expect(row[0].style.marginRight).to.eq('-10px')

            let cols = vm.$el.querySelectorAll('.col')
            expect(cols[0].style.paddingLeft).to.eq('10px')
            expect(cols[0].style.paddingRight).to.eq('10px')
            expect(cols[1].style.paddingLeft).to.eq('10px')
            expect(cols[1].style.paddingRight).to.eq('10px')
            done()
            div.remove()
            vm.$destroy()
        })

    })

    it('row 接受 justify ', function () {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData:{
                justify:'around'
            }
        }).$mount(div)
        const el = vm.$el
        expect(getComputedStyle(el).justifyContent).eq('space-around')
        div.remove()
        vm.$destroy()
    });
    it('row 接受 justify ', function () {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData:{
                align:'top'
            }
        }).$mount(div)
        const el = vm.$el
        expect(getComputedStyle(el).alignItems).eq('flex-start')
        div.remove()
        vm.$destroy()
    });
})
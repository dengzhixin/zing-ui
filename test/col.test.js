import {describe} from "mocha";

const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/Col.vue'
import Row from "../src/Row";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })


    it('接收 span ', function () {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                span:'1'
            }
        }).$mount(div)
        const el = vm.$el
        expect(el.classList.contains('col-1')).eq(true)
        div.remove()
        vm.$destroy()
    });

    it('接收 offset ', function () {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                offset:'1'
            }
        }).$mount(div)
        const el = vm.$el
        console.log(el.outerHTML);
        expect(el.classList.contains('offset-1')).eq(true)
        div.remove()
        vm.$destroy()
    });
    it('接收 justify ', function () {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                justify:'left'
            }
        }).$mount(div)
        const el = vm.$el
        expect(getComputedStyle(el).justifyContent).eq('flex-start')
        div.remove()
        vm.$destroy()
    });
    it('接收 align ', function () {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                align:'bottom'
            }
        }).$mount(div)
        const el = vm.$el
        expect(getComputedStyle(el).alignItems).eq('flex-end')
        div.remove()
        vm.$destroy()
    });

    it('接收 ipad 属性 ', function () {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                ipad:{
                    span:12,
                    offset:2
                }
            }
        }).$mount(div)
        const el = vm.$el
        console.log(el.outerHTML);
        expect(el.classList.contains('offset-ipad-2') && el.classList.contains('col-ipad-12') ).eq(true)
        div.remove()
        vm.$destroy()
    });

    it('接收 narrow-pc 属性 ', function () {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                narrowPc:{
                    span:12,
                    offset:2
                }
            }
        }).$mount(div)
        const el = vm.$el
        console.log(el.outerHTML);
        expect(el.classList.contains('offset-narrowPc-2') && el.classList.contains('col-narrowPc-12') ).eq(true)
        div.remove()
        vm.$destroy()
    });
    it('接收 pc 属性 ', function () {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                pc:{
                    span:12,
                    offset:2
                }
            }
        }).$mount(div)
        const el = vm.$el
        console.log(el.outerHTML);
        expect(el.classList.contains('offset-pc-2') && el.classList.contains('col-pc-12') ).eq(true)
        div.remove()
        vm.$destroy()
    });
    it('接收 widePc 属性 ', function () {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                widePc:{
                    span:12,
                    offset:2
                }
            }
        }).$mount(div)
        const el = vm.$el
        console.log(el.outerHTML);
        expect(el.classList.contains('offset-widePc-2') && el.classList.contains('col-widePc-12') ).eq(true)
        div.remove()
        vm.$destroy()
    });



})
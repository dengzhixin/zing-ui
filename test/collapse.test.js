import Row from "../src/Row";

const expect = chai.expect;
import Vue from 'vue'
import Collapse from "../src/Collapse";
import CollapseItem from "../src/CollapseItem";
import Col from "../src/Col";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.be.ok
        expect(CollapseItem).to.be.ok
    })
    it('接收selected.', (done) => {
        Vue.component('z-collapse', Collapse)
        Vue.component('z-collapse-item', CollapseItem)
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <z-collapse :selected.sync="array">
            <z-collapse-item title="item1" name="item1">
            item1
            </z-collapse-item>
            <z-collapse-item title="item2" name="item2">
                item2
            </z-collapse-item>
        </z-collapse>
        `
        const vm = new Vue({
            el: div,
            data(){
                return{
                    array:['item1']
                }
            }
        })
        setTimeout(() => {
            expect(vm.$el.querySelectorAll('.itemContent').length).to.eq(1)
            done()
            div.remove()
            vm.$destroy()
        })
    })


})

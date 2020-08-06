import {describe} from "mocha";

const expect = chai.expect;
import Vue from 'vue'
import Tabs from "../src/Tabs";
import TabsHead from "../src/TabsHead";
import TabsHeadItem from "../src/TabsHeadItem";
import TabsBody from "../src/TabsBody";
import TabsBodyPane from "../src/TabsBodyPane";
import Row from "../src/Row";
import Col from "../src/Col";
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.ok
        expect(TabsHead).to.ok
        expect(TabsHeadItem).to.ok
        expect(TabsBody).to.ok
        expect(TabsBodyPane).to.ok
    })

    it('接收selected.', (done) => {
        Vue.component('z-tabs',Tabs)
        Vue.component('z-tabs-head',TabsHead)
        Vue.component('z-tabs-item',TabsHeadItem)
        Vue.component('z-tabs-body',TabsBody)
        Vue.component('z-tabs-pane',TabsBodyPane)

        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
         <z-tabs selected="item3">
            <z-tabs-head>
                <z-tabs-item name="item1"><z-icon name="settings"></z-icon> 选项卡1</z-tabs-item>
                <z-tabs-item name="item2" disabled>选项卡12</z-tabs-item>
                <z-tabs-item name="item3">选项卡3</z-tabs-item>
                <z-tabs-item name="item4" >选项卡4</z-tabs-item>
                <z-button slot="actions">设置</z-button>
            </z-tabs-head>
            <z-tabs-body>
                <z-tabs-pane name="item1">哈哈哈1</z-tabs-pane>
                <z-tabs-pane name="item2">哈哈哈2222</z-tabs-pane>
                <z-tabs-pane name="item3">123</z-tabs-pane>
                <z-tabs-pane name="item4">cdc</z-tabs-pane>
            </z-tabs-body>
        </z-tabs>
        `
        const vm = new Vue({
            el:div
        })
        setTimeout(()=>{
            let items = vm.$children[0].$children[0].$children
            items.forEach((item)=>{
                if(item.name==='item3'){
                    expect(item.$el.classList.contains('active')).eq(true)
                    done()

                    div.remove()
                    vm.$destroy()
                }
            })

        })

    })

})

import Vue from 'vue'
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
Vue.component('z-button',Button)
Vue.component('z-button-group',ButtonGroup)
const vue = new Vue({
    el:'#app',
    data:{
        loading:false
    }
})


import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

//单元测试
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'like'
        }

    })
    vm.$mount("#test")

    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-like')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'like',
            loading:true
        }

    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')

}

{
    const div = document.createElement('div')
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'like',
            iconPosition:'left'
        }

    })
    document.body.appendChild(div)
    vm.$mount(div)

    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()

}

{
    const div = document.createElement('div')
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'like',
            iconPosition:'right'
        }

    })
    document.body.appendChild(div)
    vm.$mount(div)

    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()

}


{
    const div = document.createElement('div')
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'like',
            iconPosition:'right'
        }

    })
    document.body.appendChild(div)
    vm.$mount(div)

    let spy = chai.spy(function(){

    })
    vm.$on('click',spy)
    vm.$el.click()
    expect(spy).to.have.been.called()

    vm.$el.remove()
    vm.$destroy()

}
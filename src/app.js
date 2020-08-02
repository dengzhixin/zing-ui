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
const expect = chai.expect

//单元测试
{
    const vm = Vue.extend(Button)
    const button = new vm({
        propsData:{
            icon:'like'
        }

    })
    button.$mount("#test")

    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-like')
    button.$el.remove()
    button.$destroy()
}
{
    const vm = Vue.extend(Button)
    const button = new vm({
        propsData:{
            icon:'like',
            loading:true
        }

    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')

}

{
    const div = document.createElement('div')
    const vm = Vue.extend(Button)
    const button = new vm({
        propsData:{
            icon:'like',
            iconPosition:'left'
        }

    })
    document.body.appendChild(div)
    button.$mount(div)

    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()

}

{
    const div = document.createElement('div')
    const vm = Vue.extend(Button)
    const button = new vm({
        propsData:{
            icon:'like',
            iconPosition:'right'
        }

    })
    document.body.appendChild(div)
    button.$mount(div)

    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()

}
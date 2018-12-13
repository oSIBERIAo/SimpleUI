import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)

var app = new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false,
        loading3: false,
    },
})


//单元测试

import chai from 'chai'

var expect = chai.expect

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#icon-setting')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true,
        }
    })
    vm.$mount(div)
    let svgElement = vm.$el.querySelector('svg')
    let style = window.getComputedStyle(svgElement)
    let order = style.order
    expect(order).to.equal('0')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true,
            icon_position: 'right',
        }
    })
    vm.$mount(div)
    let svgElement = vm.$el.querySelector('svg')
    let style = window.getComputedStyle(svgElement)
    let order = style.order
    expect(order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    // mock
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount()
    vm.$on('click', function () {
        expect(1).to.eq(1)
    })
    // 函数被执行
    let button = vm.$el
    button.click()
    vm.$el.remove()
    vm.$destroy()
}
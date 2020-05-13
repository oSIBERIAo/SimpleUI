const expect = chai.expect
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'

chai.use(sinonChai)

// import { callbackify, log } from 'util'
// import { eventNames } from 'cluster'

import Tab from '../src/tab'
import TabBody from '../src/tab-body'
import TabHead from '../src/tab-head'
import TabItem from '../src/tab-item'
import TabPane from '../src/tab-pane'

Vue.component('s-tab', Tab)
Vue.component('s-tab-body', TabBody)
Vue.component('s-tab-head', TabHead)
Vue.component('s-tab-item', TabItem)
Vue.component('s-tab-pane', TabPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tab', () => {
    xit('Tab 等全部存在', () => {
        expect(Tab).to.exist
        expect(TabBody).to.exist
        expect(TabHead).to.exist
        expect(TabItem).to.exist
        expect(TabPane).to.exist
    })

    describe('Tab 例子验证', () => {
        // afterEach(() => {
        //     vm.$el.remove();
        //     vm.$destroy()
        // })
        xit('Tab', () => {
            const Constructor = Vue.extend()
            let div = document.createElement('div')
            div.innerHTML = `
                <s-tab selected='1'>
                    <s-tab-head>
                        <s-tab-item :name='1'>科技</s-tab-item>
                        <s-tab-item :name='2'>数码</s-tab-item>
                        <s-tab-item :name='3'>娱乐</s-tab-item>
                    </s-tab-head>
                    <s-tab-body>
                        <s-tab-pane :name='1'>科技内容</s-tab-pane>
                        <s-tab-pane :name='2'>数码内容</s-tab-pane>
                        <s-tab-pane :name='3'>娱乐内容</s-tab-pane>
                    </s-tab-body>
                </s-tab>
            `
            document.body.appendChild(div)
            let vm = new Constructor({
                el: div,
            })
            vm.$mount(div)
            vm.$nextTick(() => {
                let e = vm.$el.querySelector(`.tab-item[data-name="1"]`)
                console.log('e.classList', e.classList)
                expect(e.classList.contains('active')).to.be.true
            })
            vm.$el.remove()
            vm.$destroy()
        })
        xit('TabItem 接受 name 属性', () => {
            const Constructor = Vue.extend(TabItem)
            const vm = new Constructor({
                propsData: {
                    name: 'test',
                },
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.eq('test')
            vm.$el.remove()
            vm.$destroy()
        })
        xit('TabItem 接受 disabled 属性', () => {
            const Constructor = Vue.extend(TabItem)
            const vm = new Constructor({
                propsData: {
                    disabled: true,
                },
            }).$mount()
            expect(vm.$el.classList.contains('disabled')).to.eq(true)

            let callback = sinon.fake()
            vm.$on('click', callback)
            vm.$el.click()
            expect(callback).to.have.not.been.called
            vm.$el.remove()
            vm.$destroy()
        })
    })
})

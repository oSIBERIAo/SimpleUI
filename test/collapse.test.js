const expect = chai.expect
import Vue from 'vue'

import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

import plugin from '../src/plugin'
import { callbackify, log } from 'util'
import { eventNames } from 'cluster'

Vue.component('s-collapse', Collapse)
Vue.component('s-collapse-item', CollapseItem)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('Collapse 存在', () => {
        expect(Collapse).to.exist
        expect(CollapseItem).to.exist
    })

    describe('Collapse 例子验证', () => {
        it('Collapse', (done) => {
            let judge = true

            const Constructor = Vue.extend(Collapse)
            let div = document.createElement('div')
            div.innerHTML = `
            <s-collapse style="margin: 0 20px;" :selected.sync="selectedData">
                <s-collapse-item title="title1" name="1"><span id="content-1">内容<span></s-collapse-item>
                <s-collapse-item title="title2" name="2"><span id="content-2">内容<span></s-collapse-item>
                <s-collapse-item title="title3" name="3"><span id="content-3">内容<span></s-collapse-item>         
            </s-collapse>
            `
            let vm = new Vue({
                el: div,
                data: {
                    selectedData: ['1', '2'],
                },
            })
            vm.$mount()

            setTimeout(() => {
                expect(vm.$el.querySelector('#content-1')).to.exist
                expect(vm.$el.querySelector('#content-2')).to.exist
                expect(vm.$el.querySelector('#content-3')).to.not.exist

                vm.$el.querySelector('[data-name="1"]').click()
                vm.$el.querySelector('[data-name="2"]').click()
                vm.$el.querySelector('[data-name="3"]').click()

                setTimeout(() => {
                    expect(vm.$el.querySelector('#content-1')).to.not.exist
                    expect(vm.$el.querySelector('#content-2')).to.not.exist
                    expect(vm.$el.querySelector('#content-3')).to.exist
                    vm.$el.remove()
                    vm.$destroy()
                    done()
                })
            })
        })
        it('接受 single', (done) => {
            let judge = true

            const Constructor = Vue.extend(Collapse)
            let div = document.createElement('div')
            div.innerHTML = `
            <s-collapse style="margin: 0 20px;" :selected.sync="selectedData" single>
                <s-collapse-item title="title1" name="1"><span id="content-1">内容<span></s-collapse-item>
                <s-collapse-item title="title2" name="2"><span id="content-2">内容<span></s-collapse-item>
                <s-collapse-item title="title3" name="3"><span id="content-3">内容<span></s-collapse-item>         
            </s-collapse>
            `
            let vm = new Vue({
                el: div,
                data: {
                    selectedData: ['1'],
                },
            })
            vm.$mount()

            setTimeout(() => {
                vm.$el.querySelector('[data-name="2"]').click()
                setTimeout(() => {
                    expect(vm.$el.querySelector('#content-1')).to.not.exist
                    expect(vm.$el.querySelector('#content-2')).to.exist
                    vm.$el.remove()
                    vm.$destroy()
                    done()
                })
            })
        })
        it('触发 update:selected 事件', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <s-collapse style="margin: 0 20px;" :selected.sync="selectedData" @update:selected="onSelect">
                <s-collapse-item title="title1" name="1"><span id="content-1">内容<span></s-collapse-item>
                <s-collapse-item title="title2" name="2"><span id="content-2">内容<span></s-collapse-item>
                <s-collapse-item title="title3" name="3"><span id="content-3">内容<span></s-collapse-item>         
            </s-collapse>
            `
            const callback = sinon.fake()
            const vm = new Vue({
                el: div,
                data: {
                    selectedData: ['1'],
                },
                methods: {
                    onSelect: callback,
                },
            })
            setTimeout(() => {
                vm.$el.querySelector('[data-name="2"]').click()
                setTimeout(() => {
                    expect(callback).to.have.been.called
                    vm.$el.remove()
                    vm.$destroy()
                    done()
                })
            })
        })
    })
})

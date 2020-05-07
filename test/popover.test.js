const expect = chai.expect
import Vue from 'vue'

import Popover from '../src/popover'

import plugin from '../src/plugin'
import { callbackify, log } from 'util'
import { eventNames } from 'cluster'

Vue.component('s-popover', Popover)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('Popover 存在', () => {
        expect(Popover).to.exist
    })

    describe('Popover 例子验证', () => {
        it('Popover 接受 position', (done) => {
            const Constructor = Vue.extend()
            let div = document.createElement('div')
            div.innerHTML = `
             <div style="display: flex; justify-content: center; align-items: center;">
                <s-popover position="left" ref="popover">
                    <template slot="content">
                        <div id="popover-content">
                            Never give up, Never lose hope.
                        </div>
                    </template>
                    <button ref="button" id="button">点击左</button>
                </s-popover>
            </div>
            `
            const vm = new Vue({
                el: div,
            })
            vm.$mount()
            document.body.appendChild(vm.$el)

            document.querySelector('#button').click()

            vm.$nextTick(() => {
                let classList = vm.$refs.popover.$refs.content_wrapper.classList
                let a = classList.contains('position-left')

                expect(a).to.eq(true)

                document.body.click()
                vm.$nextTick(() => {
                    let style =
                        vm.$refs.popover.$refs.content_wrapper.style.display

                    expect(style).to.eq('none')

                    vm.$el.remove()
                    document.querySelector('.content-wrapper').remove()
                    vm.$destroy()
                    done()
                })
            })
        })
        it('Popover 接受 trigger', (done) => {
            const Constructor = Vue.extend()
            let div = document.createElement('div')
            div.innerHTML = `
             <div style="display: flex; justify-content: center; align-items: center;">
                <s-popover position="left" trigger="hover" ref="popover">
                    <template slot="content">
                        <div id="popover-content">
                            Never give up, Never lose hope.
                        </div>
                    </template>
                    <button ref="button" id="button">鼠标移入</button>
                </s-popover>
            </div>
            `
            const vm = new Vue({
                el: div,
            })
            vm.$mount()
            //  无法模拟鼠标移入
            vm.$el.remove()
            vm.$destroy()
            done()
        })
    })
})

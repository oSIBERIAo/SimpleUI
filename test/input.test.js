const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'
import { callbackify } from 'util'
import { eventNames } from 'cluster'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('input 存在', () => {
        expect(Input).to.exist
    })
    //input.vue

    //props未优化
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$el.remove()
            vm.$destroy()
        })
        it('input传入 error 显示 alert 样式, :error=true', () => {
            vm = new Constructor({
                propsData: {
                    error: '出错了',
                },
            })
            vm.$mount()

            let useElement = vm.$el.querySelector('use')
            let href = useElement.getAttribute('xlink:href')
            expect(href).to.equal('#icon-alert')

            let input = vm.$el.querySelector('input')
            var a = input.className.indexOf('error') > -1
            expect(a).to.equal(true)

            let spen = vm.$el.getElementsByTagName('SPAN')[0]
            expect(spen.innerText).to.equal('出错了')
        })

        it('input传入value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'input传入value',
                },
            })
            vm.$mount()

            let input = vm.$el.querySelector('input')
            let value = input.value
            expect(value).to.equal('input传入value')
        })

        it('input传入 :disabled=true', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true,
                },
            })
            vm.$mount()

            let input = vm.$el.querySelector('input')
            var a = input.className.indexOf('disabled') > -1
            expect(a).to.equal(true)
        })

        it('input传入 :success=true', () => {
            vm = new Constructor({
                propsData: {
                    success: true,
                },
            })
            vm.$mount()

            let input = vm.$el.querySelector('input')
            var a = input.className.indexOf('success') > -1
            expect(a).to.equal(true)
        })

        it('input传入 :readonly=true', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true,
                },
            })
            vm.$mount()

            let input = vm.$el.querySelector('input')

            var a = input.readOnly
            expect(a).to.equal(true)
        })
    })

    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$el.remove()
            vm.$destroy()
        })

        it('input_ 全部事件', () => {
            let array = ['change', 'focus', 'blur', 'input']
            array.forEach((eventNames) => {
                const Constructor = Vue.extend(Input)
                vm = new Constructor()
                vm.$mount()
                let callback = sinon.fake()

                if (eventNames == 'input') {
                    vm.$on(eventNames, callback)
                } else {
                    vm.$on(`input_${eventNames}`, callback)
                }

                let input = vm.$el.querySelector('input')

                // IE
                var eventA = document.createEvent('Event')
                eventA.initEvent(eventNames, true, true)

                //修改只读属性并返回
                Object.defineProperty(eventA, 'target', {
                    value: { value: 'testValue' },
                    enumerable: true,
                })
                var a = input.dispatchEvent(eventA)
                expect(a).to.equal(true)

                let eventB = new Event(eventNames, {
                    bubbles: true,
                    cancelable: true,
                })
                Object.defineProperty(eventB, 'target', {
                    value: { value: 'testValue' },
                    enumerable: true,
                })
                var b = input.dispatchEvent(eventB)
                expect(b).to.equal(true)

                expect(callback).to.have.been.calledTwice.calledWith(
                    eventA.target.value || eventB.target.value
                )
            })
        })
    })
})

const expect = chai.expect;
import Vue from 'vue'
import Toast from "../src/toast";
import plugin from '../src/plugin'
import { callbackify } from 'util';
import { eventNames } from 'cluster';

Vue.component("s-toast", Toast)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it("Toast 存在", () => {
        expect(Toast).to.exist
    })

    describe('Toast 例子验证', () => {
        it("Toast 自动关闭， 回调调用", (done) => {
            let judge = true

            const Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: "关闭",
                        callback: (toast) => {
                            toast.close()
                        }
                    },
                    autoClose: 0.1,
                    buttonVisible: true,
                }
            })
            vm.$slots.default = 'New message on your toast'
            
            vm.$mount()
            document.body.appendChild(vm.$el)

            let callback = sinon.fake();
            vm.$on('closeToast', () => {
                if (document.querySelector('.toast')) {
                    judge = false
                }
                callback()
                expect(judge).to.equal(true)
                expect(callback).to.have.been.called
                done()
            })       
        })
        it("Toast 内容使用 Html 检测、模拟点击关闭按钮", (done) => {
            let judge = true

            const Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: "testButton",
                        callback: (toast) => {
                            toast.close()
                        }
                    },
                    autoClose: false,
                    buttonVisible: true,
                    useHtml: true,
                    position: 'center',
                }
            })
            vm.$slots.default = ['<strong id="testHtml">New message on your toast</strong>']

            vm.$mount()
            document.body.appendChild(vm.$el)

            setTimeout(() => {
                if (!document.querySelector('#testHtml') ) {
                    judge = false
                }
                if (!document.querySelector('.position-center') ) {
                    judge = false
                }
                //模拟点击关闭按钮
                let closeButton = document.querySelector('.line').nextElementSibling
                if (!closeButton.textContent.trim() === "testButton") {
                    judge = false
                }  
                closeButton.click()
                if (document.querySelector('.toast')) {
                    judge = false
                }
                expect(judge).to.equal(true)
                done()
            })  
        })
    })
})

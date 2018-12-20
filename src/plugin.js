import Toast from './toast'

let currentToast = undefined
export default {
    install(Vue, options) {
        // 4. 添加实例方法
        Vue.prototype.$toast = function (message, toastOptions) {
            // 逻辑...
            if (currentToast) {
                currentToast.close()
                currentToast = undefined
            }
            currentToast = createToast({ Vue, message, propsData: toastOptions })
        }
    }
}

function createToast({ Vue, message, propsData }) {
    const Constructor = Vue.extend(Toast)
    let vm = new Constructor({ propsData })
    vm.$slots.default = [message]
    vm.$mount()
    document.body.appendChild(vm.$el)
    return vm
}

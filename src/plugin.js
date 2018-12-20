import Toast from './toast'

let currentToast = null
export default {
    install(Vue, options) {
        // 4. 添加实例方法
        Vue.prototype.$toast = function (message, toastOptions) {
            // 逻辑...
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({ 
                Vue, message, propsData: toastOptions,
                onClose: ()=> {
                    currentToast = null 
                },
            })
        }
    }
}

function createToast({ Vue, message, propsData, onClose}) {
    const Constructor = Vue.extend(Toast)
    let vm = new Constructor({ propsData })
    vm.$slots.default = [message]
    vm.$on('closeToast', onClose)
    vm.$mount()
    document.body.appendChild(vm.$el)
    return vm
}

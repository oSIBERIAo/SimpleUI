import Toast from './toast'
export default {
    install(Vue, options) {
        // 4. 添加实例方法
        Vue.prototype.$toast = function (message) {
            // 逻辑...
            const Constructor = Vue.extend(Toast)
            let vm = new Constructor()
            vm.$slots.default = [message]
            vm.$mount()
            document.body.appendChild(vm.$el)
            console.log(message);
        }
    }
}

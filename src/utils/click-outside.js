let onClickDocument = (e) => {
    let { target } = e
    callback.forEach((item) => {
        if (target === item.el || item.el.contains(target)) {
            return
        } else {
            item.callback()
        }
    })
}
let callback = []
document.addEventListener('click', onClickDocument)

export default {
    bind: function (el, binding, vnode) {
        callback.push({ el: el, callback: binding.value })
    },
}

function removeListener() {
    document.removeEventListener('click', onClickDocument)
}

export { removeListener }

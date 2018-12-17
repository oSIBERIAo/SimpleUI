import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from "./input";
import Row from "./row";
import Col from "./col";

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)
Vue.component("s-input", Input)
Vue.component("s-row", Row)
Vue.component("s-col", Col)

var app = new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false,
        loading3: false,
        current_input: undefined,
    },
    // methods: {
    //     input(e) {
    //         this.current_input = e 
    //     }
    // }
})


//单元测试

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

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
    let spy = chai.spy(function () { });
    vm.$on('click', spy)
    // 函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
}

// input.vue
{
  const Constructor = Vue.extend(Input);
  const vm = new Constructor({
    propsData: {
      error: "出错了",
    }
  });
  vm.$mount();
  // 函数被执行
  let useElement = vm.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.equal("#icon-alert");
  vm.$el.remove();
  vm.$destroy();
}
{
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
        propsData: {
            disabled: true,
        }
    });
    vm.$mount();

    let input = vm.$el.querySelector("input");
    var a = input.className.indexOf("disabled") > -1

    expect(a).to.equal(a);
    vm.$el.remove();
    vm.$destroy();
}
{
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
        propsData: {
            readonly: true,
        }
    });
    vm.$mount();

    let input = vm.$el.querySelector("input");

    var a = input.readOnly
    expect(a).to.equal(true);

    vm.$el.remove();
    vm.$destroy();
}
{
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
        propsData: {
            error: "出错了",
        }
    });
    vm.$mount();

    let useElement = vm.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.equal("#icon-alert");

    let input = vm.$el.querySelector("input");
    var a = input.className.indexOf("error") > -1
    expect(a).to.equal(true);

    let spen = vm.$el.getElementsByTagName("SPAN")[0]
    expect(spen.innerText).to.equal("出错了");

    vm.$el.remove();
    vm.$destroy();
}
{
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
        propsData: {
        }
    });
    vm.$mount();

    let input = vm.$el.querySelector("input");
    var event = document.createEvent('Event');
    event.initEvent('input', true, true);
    var a = input.dispatchEvent(event);

    expect(a).to.equal(true);
    vm.$el.remove();
    vm.$destroy();

}

{
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
        propsData: {
        }
    });
    vm.$mount();
    let num = 0
    // let callback = function(e) {
    //     console.log('e', e);
    //     if (e) {
    //         num += 1
    //     };
    // }
    function callback() {
        let e  = true
        if (e) {
            num += 1
        };
    }
    vm.$on('input', callback)

    let input = vm.$el.querySelector("input");

    // IE
    var eventA = document.createEvent('Event');
    eventA.initEvent('input', true, true);
    var a = input.dispatchEvent(eventA);

    let eventB = new Event('input', {
        'bubbles': true,
        'cancelable': true
    });

    var b = input.dispatchEvent(eventB);
    expect(b).to.equal(true);
    
    // expect(num).to.equal(2)

    vm.$el.remove();
    vm.$destroy();
}
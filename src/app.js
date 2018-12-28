import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from "./input"

import Row from "./row"
import Col from "./col"

import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

import Toast from './toast'

import Tab from './tab'
import TabBody from './tab-body'
import TabHead from './tab-head'
import TabItem from './tab-item'
import TabPane from './tab-pane'

import Popover from './popover'

import Collapse from './collapse'
import CollapseItem from './collapse-item'


import plugin from './plugin'
// import { install } from './plugin'

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)
Vue.component("s-input", Input)

Vue.component("s-row", Row)
Vue.component("s-col", Col)

Vue.component('s-layout', Layout)
Vue.component('s-header', Header)
Vue.component('s-sider', Sider)
Vue.component('s-content', Content)
Vue.component('s-footer', Footer)

Vue.component('s-toast', Toast)

Vue.component('s-tab', Tab)
Vue.component('s-tab-body', TabBody)
Vue.component('s-tab-head', TabHead)
Vue.component('s-tab-item', TabItem)
Vue.component('s-tab-pane', TabPane)

Vue.component('s-popover', Popover)

Vue.component('s-collapse', Collapse)
Vue.component('s-collapse-item', CollapseItem)

Vue.use(plugin)
// Vue.use(install)


var app = new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false,
        loading3: false,
        current_input: undefined,
        sider_style: 'height: 100px; width: 150px;',
        selectedTab: '2',
        selectedCollapse: ['1', '2'],
        selectedCollapse2: ['1'],
    },
    created() {
        // this.$toast('New message on your toast',
        //     {
        //         closeButton: {
        //             text: "关闭",
        //             callback: (toast) => {
        //                 toast.close()
        //             }
        //         },
        //         autoClose: 3,
        //         buttonVisible: true,
        //     })
    },
    methods: {
        yyy() {
            console.log('yyy');
        },
        showToastTop() {
            this.$toast('<strong>New message on your toast</strong>', {
                buttonVisible: true,
                autoClose: false,
                useHtml: true,
                position: 'top',
            })
        },
        showToastCenter() {
            this.$toast('<strong>New message on your toast</strong>', {
                buttonVisible: true,
                autoClose: false,
                useHtml: true,
                position: 'center',
            })
        },
        showToastDown() {
            this.$toast('<strong>New message on your toast</strong>', {
                buttonVisible: true,
                autoClose: false,
                useHtml: true,
                position: 'down',
            })
        }        
    }
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



//row&col
{
    const Constructor = Vue.extend()
    let div = document.createElement('div')
    div.innerHTML = `
        <s-row gutter="20">
            <s-col :spen="12" :xs="{span:12, offset:12}" :sm="{span:10}" :md="{span:8}" :lg="{span:6}" :xl="{span:4}" :xll="{span:2}">col</s-col>
            <s-col :spen="12" :xs="{span:12, offset:12}" :sm="{span:14}" :md="{span:16}" :lg="{span:18}" :xl="{span:20}" :xll="{span:22}">col</s-col>
        </s-row>
    `
    document.body.appendChild(div)
    let vm = new Constructor({})
    
    vm.$mount(div)

    let judge = true

    let col = vm.$el.querySelectorAll('.col')
    let judgeClassList = [
        ["col", "col-12", "col-xs-12", "offset-xs-12", "col-sm-10", "col-lg-6", "col-xl-4",],
        ["col", "col-12", "col-xs-12", "offset-xs-12", "col-sm-14", "col-lg-18", "col-xl-20"],
    ]

    //验证classList是否预期
    for (let i = 0; i < col.length; i++) {     
        col[i].classList.forEach((style) => {
            if (!judgeClassList[i].includes(style)) {
                judge = false
            }
        })
    }
    expect(judge).to.equal(true)

    let row = vm.$el.querySelectorAll('.s-row')

    let rowStyle = row[0].style.cssText.split(';').filter(e => { return e != ""})
    // console.log('rowStyle', rowStyle);
    let judgeCssText = [
        "margin-left: -10px", " margin-right: -10px",
    ]
    rowStyle.forEach((style) => {
        if (!judgeCssText.includes(style)) {
            log('style!!!', style)
            judge = false
        }
    })

    expect(judge).to.equal(true)
    vm.$el.remove();
    vm.$destroy();
}
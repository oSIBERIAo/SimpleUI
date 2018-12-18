const expect = chai.expect;
import Vue from 'vue'
import Row from "../src/row";
import Col from "../src/col";
import { callbackify } from 'util';
import { eventNames } from 'cluster';

Vue.component("s-row", Row)
Vue.component("s-col", Col)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it("Row 存在", () => {
        expect(Row).to.exist
    })
    it("Col 存在", () => {
        expect(Col).to.exist
    })

    describe('Row&Col 例子验证', () => {
        it("Row&Col", (done) => {
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
                col[i].classList.forEach(style => {
                    if (!judgeClassList[i].includes(style)) {
                        judge = false
                    }
                })
            }
            expect(judge).to.equal(true)

            //验证margin是否预期
            let row = vm.$el.querySelectorAll('.s-row')
            let rowStyle = row[0].style.cssText.split(';').filter(e => { return e != "" })
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

            // 异步获取准确数据
            setTimeout( ()=> {
                let row = vm.$el.querySelectorAll('.s-row')
                let a = window.getComputedStyle(row[0])
                let b = window.getComputedStyle(col[0])

                judge = a.marginLeft == '-10px' && a.marginRight == '-10px'  
                expect(judge).to.equal(true)
                judge = b.paddingLeft == '10px' && b.paddingRight == '10px'
                expect(judge).to.equal(true)

                vm.$el.remove();
                vm.$destroy();
                done()
            })  
        });
    })

})

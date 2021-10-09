<template>
    <div class="demo">
        <h3>默认用法</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-collapse
                    style="margin: 0 20px"
                    :selected.sync="selectedCollapse"
                >
                    <s-collapse-item title="标题1" name="1"
                        >内容
                    </s-collapse-item>
                    <s-collapse-item title="标题2" name="2"
                        >内容
                    </s-collapse-item>
                    <s-collapse-item title="标题3" name="3"
                        >内容
                    </s-collapse-item>
                </s-collapse>
            </div>
            <div class="lock-code" @click="showCode(0)" ref="xxx">
                <div>
                    <s-icon
                        class="down"
                        :name="isShow[0] === false ? 'down' : 'up'"
                    ></s-icon>
                    <!--                    <span></span>-->
                    <span class="lock-code-word">{{
                        isShow[0] === false ? '显示代码' : '隐藏代码'
                    }}</span>
                </div>
            </div>
            <div class="code-content" v-highlight style="height: 0">
                <div class="code-content-height">
                    <pre><code class="html">{{ codeStr }}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
import Button from '../../../src/button'
import Icon from '../../../src/icon'

import Toast from '../../../src/toast'
import plugin from '../../../src/plugin'
;(function () {
    Vue.component('s-collapse', Collapse)
    Vue.component('s-collapse-item', CollapseItem)
    Vue.component('s-icon', Icon)
    Vue.component('s-toast', Toast)
})()

Vue.use(plugin)
import mixin from '../mixin'

export default {
    name: 'Toast',
    mixins: [mixin],
    data() {
        return {
            selectedCollapse: ['1'],
            codeStr: `
        <s-collapse
            style="margin: 0 20px;"
            :selected.sync="selectedCollapse">
            <s-collapse-item title="标题1" name="1">内容</s-collapse-item>
            <s-collapse-item title="标题2" name="2">内容</s-collapse-item>
            <s-collapse-item title="标题3" name="3">内容</s-collapse-item>
        </s-collapse>

        data() {
            return {
                selectedCollapse: ['1'],
            }
        }
        `
                .replace(/^ {8}/gm, '')
                .trim(),
        }
    },
}
</script>
<style lang="scss" scoped>
.component-wrapper-demo {
    * {
        color: #2c3e50;
        font-size: 18px;
        font-weight: bolder;
        text-align: center;
    }

    button {
        height: 50px;
    }
}
</style>

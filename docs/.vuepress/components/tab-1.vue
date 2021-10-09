<template>
    <div class="demo">
        <h3>基本用法</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-tab :selected="selected">
                    <s-tab-head>
                        <s-tab-item name="1">1</s-tab-item>
                        <s-tab-item name="2">2</s-tab-item>
                    </s-tab-head>
                    <s-tab-body>
                        <s-tab-pane name="1">content 1</s-tab-pane>
                        <s-tab-pane name="2">content 2</s-tab-pane>
                    </s-tab-body>
                </s-tab>
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
import Icon from '../../../src/icon'

import Tab from '../../../src/tab'
import TabBody from '../../../src/tab-body'
import TabHead from '../../../src/tab-head'
import TabItem from '../../../src/tab-item'
import TabPane from '../../../src/tab-pane'
import plugin from '../../../src/plugin'
;(function () {
    Vue.component('s-tab', Tab)
    Vue.component('s-tab-body', TabBody)
    Vue.component('s-tab-head', TabHead)
    Vue.component('s-tab-item', TabItem)
    Vue.component('s-tab-pane', TabPane)
    Vue.component('s-icon', Icon)
})()

Vue.use(plugin)
import mixin from '../mixin'

export default {
    name: 'Toast',
    mixins: [mixin],
    data() {
        return {
            selected: '1',
            codeStr: `
        <s-tab :selected="selected">
            <s-tab-head>
                <s-tab-item name="1">1</s-tab-item>
                <s-tab-item name="2">2</s-tab-item>
            </s-tab-head>
            <s-tab-body>
                <s-tab-pane name="1">content 1</s-tab-pane>
                <s-tab-pane name="2">content 2</s-tab-pane>
            </s-tab-body>
        </s-tab>

        data() {
            return {
                selected: '1',
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
    padding-bottom: 60px;
}
</style>

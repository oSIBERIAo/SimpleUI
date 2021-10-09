<template>
    <div class="demo">
        <h3>基本用法</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-cascader
                    :source.sync="sourceCascader"
                    :selected.sync="selectedCascader"
                    popover-height="200px"
                ></s-cascader>
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
import Cascader from '../../../src/cascader'
import Icon from '../../../src/icon'

import Toast from '../../../src/toast'
import plugin from '../../../src/plugin'
;(function () {
    Vue.component('s-cascader', Cascader)
    Vue.component('s-icon', Icon)
})()

Vue.use(plugin)
import mixin from '../mixin'

export default {
    name: 'Toast',
    mixins: [mixin],
    data() {
        return {
            selectedCascader: [],
            sourceCascader: [
                {
                    name: '一一',
                    children: [
                        {
                            name: '一二',
                            children: [
                                {
                                    name: '一二一',
                                },
                                {
                                    name: '一二二',
                                },
                                {
                                    name: '一二三',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: '二一',
                    children: [
                        {
                            name: '二二',
                            children: [
                                {
                                    name: '二三',
                                },
                            ],
                        },
                        {
                            name: '二二',
                            children: [
                                {
                                    name: '二三',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: '三一',
                    children: [
                        {
                            name: '三二',
                            children: [
                                {
                                    name: '三三',
                                },
                            ],
                        },
                    ],
                },
            ],
            codeStr: `
        <s-cascader
            :source.sync="sourceCascader"
            :selected.sync="selectedCascader"
            popover-height="200px"
        ></s-cascader>

        data() {
            return {
                selectedCascader: [],
            sourceCascader: [
                {
                    name: '一一',
                    children: [
                        {
                            name: '一二',
                            children: [
                                {
                                    name: '一二一',
                                },
                                {
                                    name: '一二二',
                                },
                                {
                                    name: '一二三',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: '二一',
                    children: [
                        {
                            name: '二二',
                            children: [
                                {
                                    name: '二三',
                                },
                            ],
                        },
                        {
                            name: '二二',
                            children: [
                                {
                                    name: '二三',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: '三一',
                    children: [
                        {
                            name: '三二',
                            children: [
                                {
                                    name: '三三',
                                },
                            ],
                        },
                    ],
                },
            ],
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
.component-wrapper {
    overflow: inherit;
}

.component-wrapper-demo {
    //* {
    //    color: #2c3e50;
    //    font-size: 18px;
    //    font-weight: bolder;
    //    text-align: center;
    //}
}
</style>

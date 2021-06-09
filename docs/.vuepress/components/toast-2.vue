<template>
    <div class="demo">
        <h3>设置关闭按钮，内容使用HTML</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-button @click="showToastTop">
                    top
                </s-button>
                <s-button @click="showToastCenter">
                    center
                </s-button>
                <s-button @click="showToastDown">
                    down
                </s-button>
            </div>
            <div class="lock-code" @click="showCode(1)" ref="xxx">
                <div>
                    <s-icon
                        class="down"
                        :name="isShow[1] === false ? 'down' : 'up'"
                    ></s-icon>
                    <!--                    <span></span>-->
                    <span class="lock-code-word">{{
                        isShow[1] === false ? '显示代码' : '隐藏代码'
                    }}</span>
                </div>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{ codeStr }}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Button from '../../../src/button'
import Icon from '../../../src/icon'

import Toast from '../../../src/toast'
import plugin from '../../../src/plugin'
;(function () {
    Vue.component('s-button', Button)
    Vue.component('s-icon', Icon)
    Vue.component('s-toast', Toast)
})()

Vue.use(plugin)
import mixin from '../mixin'

export default {
    name: 'Toast',
    mixins: [mixin],
    methods: {
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
        },
    },
    data() {
        return {
            codeStr: `
        <s-button @click="showToastTop">
            top
        </s-button>
        <s-button @click="showToastCenter">
            center
        </s-button>
        <s-button @click="showToastDown">
            down
        </s-button>

        methods: {
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
        },
        },
        <style>
        .toast {
          z-index: 9999;
        }
        </style>
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
        color: white;
        font-size: 18px;
        font-weight: bolder;
        text-align: center;
    }
}

.toast > span {
    margin-right: -30px;
}
</style>

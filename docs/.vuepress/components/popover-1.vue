<template>
    <div class="demo">
        <h3>默认用法，支持 HTML</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="popover-wrapper">
                    <s-popover position="left" z-index="999">
                        <template slot="content" slot-scope="{ close }">
                            <div>
                                {{ content }}
                            </div>
                            <br />
                            <s-button @click="close">关闭</s-button>
                        </template>
                        <s-button>点击左</s-button>
                    </s-popover>
                    <s-popover position="top">
                        <template slot="content">
                            <div>
                                {{ content }}
                            </div>
                        </template>
                        <s-button>点击上</s-button>
                    </s-popover>
                    <s-popover position="bottom">
                        <template slot="content">
                            <div>
                                {{ content }}
                            </div>
                        </template>
                        <s-button>点击下</s-button>
                    </s-popover>
                    <s-popover position="right">
                        <template slot="content">
                            <div>
                                {{ content }}
                            </div>
                        </template>
                        <s-button>点击右</s-button>
                    </s-popover>
                </div>
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
import Popover from '../../../src/popover'
import Button from '../../../src/button'
import Icon from '../../../src/icon'

import Toast from '../../../src/toast'
import plugin from '../../../src/plugin'

;(function () {
    Vue.component('s-popover', Popover)
    Vue.component('s-button', Button)
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
            content: `Never give up, Never lose hope. Always have
                      faith, It allows you to cope. Trying times will
                      pass, As they always do. Just have patience,
                      Your dreams will come true. So put on a smile,
                      You'll live through your pain. Know it will
                      pass, And strength you will gain.`,
            codeStr: `
        <s-popover position="left" z-index="999">
            <template slot="content" slot-scope="{ close }">
                <div>{{ content }}</div>
                <br />
                <s-button @click="close">关闭</s-button>
            </template>
        <s-button>点击左</s-button>
        </s-popover>
        <s-popover position="top">
            <template slot="content">
                <div>{{ content }}</div>
            </template>
        <s-button>点击上</s-button>
        </s-popover>
        <s-popover position="bottom">
            <template slot="content">
                <div>{{ content }}</div>
            </template>
            <s-button>点击下</s-button>
        </s-popover>
        <s-popover position="right">
            <template slot="content">
                <div>{{ content }}</div>
            </template>
            <s-button>点击右</s-button>
        </s-popover>

        data() {
            return {
                content: \`Never give up, Never lose hope. Always have
                          faith, It allows you to cope. Trying times will
                          pass, As they always do. Just have patience,
                          Your dreams will come true. So put on a smile,
                          You'll live through your pain. Know it will
                          pass, And strength you will gain.\`,
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
        color: white;
        font-size: 18px;
        font-weight: bolder;
        text-align: center;
    }

    button {
        height: 50px;
    }
}

.popover-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .popover {
        padding: 6px;
    }
}
</style>

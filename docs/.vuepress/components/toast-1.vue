<template>
    <div class="demo">
        <h3>this.$toast</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-button
                    @click="
                        $toast('New message on your toast', {
                            position: 'top',
                        })
                    "
                >
                    top
                </s-button>
                <s-button
                    @click="
                        $toast('New message on your toast', {
                            position: 'center',
                        })
                    "
                >
                    center
                </s-button>
                <s-button
                    @click="
                        $toast('New message on your toast', {
                            position: 'down',
                        })
                    "
                >
                    down
                </s-button>
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
    data() {
        return {
            codeStr: `
        <s-button
            @click="
                $toast('New message on your toast', {
                    position: 'top',
            })"
        >
            top
        </s-button>
        <s-button
            @click="
                $toast('New message on your toast', {
                    position: 'center',
            })"
        >
            center
        </s-button>
        <s-button
            @click="
                $toast('New message on your toast', {
                    position: 'down',
            })"
        >
            down
        </s-button>

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

    button {
        height: 50px;
    }
}

.toast > span {
    margin-right: -30px;
}
</style>

<template>
    <div class="demo">
        <h3>默认用法</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-slides :selected.sync="slidesSelected" :interval="3000">
                    <s-slides-item name="1">
                        <div class="box">1</div>
                    </s-slides-item>
                    <s-slides-item name="2">
                        <div class="box">2</div>
                    </s-slides-item>
                    <s-slides-item name="3">
                        <div class="box">3</div>
                    </s-slides-item>
                    <s-slides-item name="4">
                        <div class="box">4</div>
                    </s-slides-item>
                    <s-slides-item name="5">
                        <div class="box">5</div>
                    </s-slides-item>
                </s-slides>
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
import Slides from '../../../src/slides'
import SlidesItem from '../../../src/slides-item'
import Icon from '../../../src/icon'

import Toast from '../../../src/toast'
import plugin from '../../../src/plugin'

;(function () {
    Vue.component('s-slides', Slides)
    Vue.component('s-slides-item', SlidesItem)
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
            slidesSelected: '',
            codeStr: `
        <s-slides :selected.sync="slidesSelected" :interval="3000">
            <s-slides-item name="1">
                <div class="box">1</div>
            </s-slides-item>
            <s-slides-item name="2">
                <div class="box">2</div>
            </s-slides-item>
            <s-slides-item name="3">
                <div class="box">3</div>
            </s-slides-item>
            <s-slides-item name="4">
                <div class="box">4</div>
            </s-slides-item>
            <s-slides-item name="5">
                <div class="box">5</div>
            </s-slides-item>
        </s-slides>

        data() {
            return {
                slidesSelected: ['1'],
            }
        }

        <style>
        .box {
            height: 300px;
            background-color: #eaeaea;
            color: #2c3e50;
            font-weight: bolder;
            font-size: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
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
        color: #2c3e50;
        font-size: 18px;
        font-weight: bolder;
        text-align: center;
    }

    button {
        height: 50px;
    }

    .box {
        /*width: 200px;*/
        height: 300px;
        background-color: #eaeaea;
        color: #2c3e50;
        font-weight: bolder;
        font-size: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>

<template>
    <div class="demo">
        <h3>圣杯布局</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-layout>
                    <s-header> header </s-header>
                    <s-content> content </s-content>
                    <s-footer> footer </s-footer>
                </s-layout>
            </div>
            <!--            <div class="code-user-desc">-->
            <!--                典型的页面布局。-->
            <!--            </div>-->
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
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Content from '../../../src/content'
import Footer from '../../../src/footer'

import Icon from '../../../src/icon'
import mixin from '../mixin'

export default {
    name: 'gird',
    mixins: [mixin],
    components: {
        's-layout': Layout,
        's-header': Header,
        's-content': Content,
        's-footer': Footer,
        's-icon': Icon,
    },
    data() {
        return {
            codeStr: `
        <s-layout>
            <s-header>header</s-header>
            <s-content>content</s-content>
            <s-footer>footer</s-footer>
        </s-layout>

        <style>
        .header,
        .content,
        .footer {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            background: #d3dce6;
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

.header,
.content,
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: #d3dce6;
}

.content {
    background: #99a9bf;
    height: 100px;
}
</style>

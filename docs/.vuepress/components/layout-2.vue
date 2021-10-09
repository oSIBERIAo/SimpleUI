<template>
    <div class="demo">
        <h3>多栏布局 一</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-header>header</s-header>
                <s-layout>
                    <s-sider>sider</s-sider>
                    <s-content>content</s-content>
                </s-layout>
                <s-footer>footer</s-footer>
            </div>
            <!--            <div class="code-user-desc">-->
            <!--                典型的页面布局。-->
            <!--            </div>-->
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
import Sider from '../../../src/sider'

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
        's-sider': Sider,
        's-icon': Icon,
    },
    data() {
        return {
            codeStr: `
        <s-header>header</s-header>
            <s-layout>
                <s-sider>sider</s-sider>
                <s-content>content</s-content>
            </s-layout>
        <s-footer>footer</s-footer>
        <style>
        .header,
        .content,
        .footer,
        .sider {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #d3dce6;
        }
        .header,
        .footer {
            height: 50px;
        }
        .sider {
            height: 100px;
            width: 200px;
            background: #8597ae;
        }
        .content {
            height: 100px;
            background: #99a9bf;
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
.footer,
.sider {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d3dce6;
}

.header,
.footer {
    height: 50px;
}

.sider {
    height: 100px;
    width: 200px;
    background: #8597ae;
}

.content {
    height: 100px;
    background: #99a9bf;
}

.layout {
    color: white;
}
</style>

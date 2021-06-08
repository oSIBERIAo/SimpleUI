<template>
    <div class="demo">
        <h3>左右偏移</h3>
        <p>基础用法</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-row>
                    <s-col :span="8">col-8</s-col>
                    <s-col :span="8" offset="8">col-8 offset-8</s-col>
                </s-row>
                <s-row>
                    <s-col :span="6" offset="6">col-6 offset-6</s-col>
                    <s-col :span="6" offset="6">col-6 offset-6</s-col>
                </s-row>
            </div>
            <div class="code-user-desc">
                列偏移。<br />
                使用 offset 可以将列向右侧偏。例如，offset={8}
                将元素向右侧偏移了 8 个列（column）的宽度。
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
import Row from '../../../src/row'
import Col from '../../../src/col'
import mixin from '../mixin'

export default {
    name: 'gird',
    mixins: [mixin],
    components: {
        's-row': Row,
        's-col': Col,
    },
    data() {
        return {
            codeStr: `
        <s-row>
            <s-col :span="8">col-8</s-col>
            <s-col :span="8" offset="8">col-8 offset-8</s-col>
        <s-row>
        <s-row>
            <s-col :span="6" offset="6">col-6 offset-6</s-col>
            <s-col :span="6" offset="6">col-6 offset-6</s-col>
        <s-row>
        `
                .replace(/^ {8}/gm, '')
                .trim(),
        }
    },
}
</script>
<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

.component-wrapper-demo {
}

.s-row {
    .col:nth-child(even) {
        background: #d3dce6;
    }

    .col {
        outline: none;
        background: #99a9bf;
        border-radius: 10px;
        margin-top: 20px;
        padding: 30px;
        color: white;
        font-size: 18px;
        font-weight: bolder;
        text-align: center;
    }
}
</style>

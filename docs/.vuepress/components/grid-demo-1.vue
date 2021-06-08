<template>
    <div class="demo">
        <h3>基础栅格</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-row>
                    <s-col :span="24">col</s-col>
                </s-row>
                <s-row>
                    <s-col :span="12">col-12</s-col>
                    <s-col :span="12">col-12</s-col>
                </s-row>
                <s-row>
                    <s-col :span="8">col-8</s-col>
                    <s-col :span="8">col-8</s-col>
                    <s-col :span="8">col-8</s-col>
                </s-row>
                <s-row>
                    <s-col :span="6">col-6</s-col>
                    <s-col :span="6">col-6</s-col>
                    <s-col :span="6">col-6</s-col>
                    <s-col :span="6">col-6</s-col>
                </s-row>
            </div>
            <div class="code-user-desc">
                使用单一的一组 Row 和 Col
                栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在
                Row 内。
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
import Row from '../../../src/row'
import Col from '../../../src/col'
import Icon from '../../../src/icon'
import mixin from '../mixin'

export default {
    name: 'gird',
    mixins: [mixin],
    components: {
        's-row': Row,
        's-col': Col,
        's-icon': Icon,
    },
    data() {
        return {
            codeStr: `
        <s-row>
            <s-col :span="24">col</s-col>
            </s-row>
        <s-row>
            <s-col :span="12">col-12</s-col>
            <s-col :span="12">col-12</s-col>
        </s-row>
        <s-row>
            <s-col :span="8">col-8</s-col>
            <s-col :span="8">col-8</s-col>
            <s-col :span="8">col-8</s-col>
        <s-row>
        <s-row>
            <s-col :span="6">col-6</s-col>
            <s-col :span="6">col-6</s-col>
            <s-col :span="6">col-6</s-col>
            <s-col :span="6">col-6</s-col>
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

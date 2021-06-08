<template>
    <div class="demo">
        <h3>区块间隔</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-row gutter="10">
                    <s-col :span="8">
                        <div class="demoCol">col-8</div>
                    </s-col>
                    <s-col :span="8">
                        <div class="demoCol">col-8</div>
                    </s-col>
                    <s-col :span="8">
                        <div class="demoCol">col-8</div>
                    </s-col>
                </s-row>
                <s-row gutter="10">
                    <s-col :span="6">
                        <div class="demoCol">col-6</div>
                    </s-col>
                    <s-col :span="6">
                        <div class="demoCol">col-6</div>
                    </s-col>
                    <s-col :span="6">
                        <div class="demoCol">col-6</div>
                    </s-col>
                    <s-col :span="6">
                        <div class="demoCol">col-6</div>
                    </s-col>
                </s-row>
            </div>
            <div class="code-user-desc">
                栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter
                属性，我们推荐使用 (16+8n)px 作为栅格间隔(n 是自然数)。
            </div>
            <div class="lock-code" @click="showCode(2)" ref="xxx">
                <div>
                    <s-icon
                        class="down"
                        :name="isShow[2] === false ? 'down' : 'up'"
                    ></s-icon>
                    <!--                    <span></span>-->
                    <span class="lock-code-word">{{
                        isShow[2] === false ? '显示代码' : '隐藏代码'
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
<s-row gutter="10">
    <s-col :span="8"><div class="demoCol">col-8</div></s-col>
    <s-col :span="8"><div class="demoCol">col-8</div></s-col>
    <s-col :span="8"><div class="demoCol">col-8</div></s-col>
</s-row>
<s-row gutter="10">
    <s-col :span="6"><div class="demoCol">col-6</div></s-col>
    <s-col :span="6"><div class="demoCol">col-6</div></s-col>
    <s-col :span="6"><div class="demoCol">col-6</div></s-col>
    <s-col :span="6"><div class="demoCol">col-6</div></s-col>
</s-row>
        `
                .replace(/^ {8}/gm, '')
                .trim(),
        }
    },
}
</script>
<style lang="scss">
* {
    box-sizing: border-box;
}

.component-wrapper-demo {
}

.demoCol {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    background: #99a9bf;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    font-weight: bolder;
    text-align: center;
}

.s-row {
    .col:nth-child(even) {
        .demoCol {
            background: #d3dce6;
        }
    }

    .col {
        padding-top: 10px;
    }
}
</style>

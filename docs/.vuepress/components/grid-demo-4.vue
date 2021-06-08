<template>
    <div class="demo">
        <h3>响应式栅格</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-row>
                    <s-col
                        :spen="2"
                        :xs="{ span: 12 }"
                        :sm="{ span: 6 }"
                        :md="{ span: 8 }"
                        :lg="{ span: 10 }"
                        :xl="{ span: 4 }"
                        :xll="{ span: 2 }"
                        >col
                    </s-col>
                    <s-col
                        :spen="22"
                        :xs="{ span: 12 }"
                        :sm="{ span: 18 }"
                        :md="{ span: 16 }"
                        :lg="{ span: 14 }"
                        :xl="{ span: 20 }"
                        :xll="{ span: 22 }"
                        >col
                    </s-col>
                </s-row>
            </div>
          <div class="code-user-desc">
            如果要支持响应式，可以写成分别设置
            <code>xs</code>
            <code>sm</code>
            <code>md</code>
            <code>lg</code>
            <code>xl</code>
            <code>xll</code> 的 <code>span</code> 属性。
          </div>
            <div class="lock-code" @click="showCode(3)" ref="xxx">
                <div>
                    <s-icon
                        class="down"
                        :name="isShow[3] === false ? 'down' : 'up'"
                    ></s-icon>
                    <span class="lock-code-word">{{
                        isShow[3] === false ? '显示代码' : '隐藏代码'
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
    <s-col
            :spen="2"
            :xs="{ span: 12 }"
            :sm="{ span: 6 }"
            :md="{ span: 8 }"
            :lg="{ span: 10 }"
            :xl="{ span: 4 }"
            :xll="{ span: 2 }"
    >col</s-col>
    <s-col
            :spen="22"
            :xs="{ span: 12 }"
            :sm="{ span: 18 }"
            :md="{ span: 16 }"
            :lg="{ span: 14 }"
            :xl="{ span: 20 }"
            :xll="{ span: 22 }"
    >col</s-col>
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

<template>
    <div class="demo">
        <h3>按钮组</h3>
        <p>按钮组用法</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-button-group>
                    <s-button icon="left" icon_position="left">上一页</s-button>
                    <s-button>更多</s-button>
                    <s-button icon="right" icon_position="right"
                        >下一页
                    </s-button>
                </s-button-group>
            </div>
            <div class="lock-code" @click="showCode(1)" ref="xxx">
                <div>
                    <s-icon
                        class="down"
                        :name="isShow[1] === false ? 'down' : 'up'"
                    ></s-icon>
                    <span class="lock-code-word">{{
                        isShow[1] === false ? '显示代码' : '隐藏代码'
                    }}</span>
                </div>
            </div>
            <div class="code-content" v-highlight style="height: 0">
                <div class="code-content-height">
                    <pre><code class="html">{{ codeStr1 }}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'
import Icon from '../../../src/icon'
import mixin from '../mixin'

export default {
    name: 'button',
    mixins: [mixin],
    components: {
        's-button': Button,
        's-button-group': ButtonGroup,
        's-icon': Icon,
    },
    data() {
        return {
            codeStr1: `
<s-button-group>
    <s-button icon="left" icon_position="left">上一页</s-button>
    <s-button>更多</s-button>
    <s-button icon="right" icon_position="right">下一页</s-button>
</s-button-group>
        `
                .replace(/^ {8}/gm, '')
                .trim(),
        }
    },
}
</script>

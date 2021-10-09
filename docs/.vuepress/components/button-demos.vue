<template>
    <div class="demo">
        <h3>基础用法</h3>
        <p>基础用法</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-button icon="loading" icon_position="left"
                    >加载图标按钮
                </s-button>
                <s-button icon="left" icon_position="left">左图标按钮</s-button>
                <s-button icon="right" icon_position="right"
                    >右图标按钮
                </s-button>
                <br /><br /><br />
                <s-button icon="up" icon_position="right">上图标按钮</s-button>
                <s-button icon="down" icon_position="right"
                    >下图标按钮
                </s-button>
                <br /><br /><br />
                <s-button-group>
                    <s-button icon="left" icon_position="left">上一页</s-button>
                    <s-button>更多</s-button>
                    <s-button icon="right" icon_position="right"
                        >下一页
                    </s-button>
                </s-button-group>
            </div>
            <!--            <div class="code-user-desc">-->
            <!--                默认按钮-->
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
            codeStr: `
        <s-button icon="loading" icon_position="left">加载图标按钮</s-button >
        <s-button icon="left" icon_position="left">左图标按钮</s-button>
        <s-button icon="right" icon_position="right">右图标按钮</s-button>
        <br /><br /><br />
        <s-button icon="up" icon_position="right">上图标按钮</s-button>
        <s-button icon="down" icon_position="right">下图标按钮</s-button>
        <br /><br /><br />
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

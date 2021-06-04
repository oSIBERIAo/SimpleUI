<template>
    <div class="demo">
        <h2>创建组件文档模板</h2>
        <p>组件描述</p>
        <h3>组件功能名字</h3>
        <p>组件功能描述</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                组件展示位置
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <!-- <div class="code-user-desc">
                组件描述说明
              </div> -->
                    <pre><code class="html">{{codeStr}}</code></pre>
                </div>
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
        </div>

        <h3>attributes</h3>
        <p>组件参数说明后期扩展</p>
    </div>
</template>

<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'
import Icon from '../../../src/icon'
import mixin from '../mixin'
export default {
    name: 'demo',
    mixins: [mixin],
    components: {
        's-button': Button,
        's-button-group': ButtonGroup,
        's-icon': Icon,
    },
    data() {
        return {
            codeStr: `
            <s-button icon="loading" icon_position="left">加载图标按钮1</s-button>
        `
                .replace(/^\s*/gm, '')
                .trim(),
        }
    },
}
</script>

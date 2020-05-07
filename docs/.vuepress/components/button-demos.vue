<template>
    <div>
        <br />

        <s-button icon="loading" icon_position="left">加载图标按钮</s-button>
        <s-button icon="setting" icon_position="left">左图标按钮</s-button>
        <s-button icon="setting" icon_position="right">右图标按钮</s-button>
        <br /><br /><br />
        <s-button-group>
            <s-button icon="left" icon_position="left">上一页</s-button>
            <s-button>更多</s-button>
            <s-button icon="right" icon_position="right">下一页</s-button>
        </s-button-group>

        <br /><br />
        <!-- <pre><code>{{content}}</code></pre> -->
    </div>
</template>
<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'
export default {
    components: {
        's-button': Button,
        's-button-group': ButtonGroup,
    },
    data() {
        return {
            content: `
            <s-button icon="loading" icon_position="left">加载图标按钮</s-button>
            <s-button icon="setting" icon_position="left">左图标按钮</s-button>
            <s-button icon="setting" icon_position="right">右图标按钮</s-button>

            <s-button-group>
                <s-button icon="left" icon_position="left">上一页</s-button>
                <s-button>更多</s-button>
                <s-button icon="right" icon_position="right">下一页</s-button>
            </s-button-group>
            `
                .replace(/\t+| +/g, '')
                .trim(),
        }
    },
}
</script>

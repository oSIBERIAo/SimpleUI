<template>
    <div>
        <br>

        <s-button icon="loading" icon_position="left" @click="loading1 = !loading1">加载图标按钮</s-button>
        <s-button icon="setting" icon_position="left" @click="loading2 = !loading2">左图标按钮</s-button>
        <s-button icon="setting" icon_position="right" @click="loading3 = !loading3">右图标按钮</s-button>
        <s-button-group>
            <s-button icon="left" icon_position="left">上一页</s-button>
            <s-button>更多</s-button>
            <s-button icon="right" icon_position="right">下一页</s-button>
        </s-button-group>

        <br><br>
        <pre>
            <code>{{content}}</code>
        </pre>
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
            <s-button icon="loading" icon_position="left" @click="loading1 = !loading1">加载图标按钮</s-button>
            <s-button icon="setting" icon_position="left" @click="loading2 = !loading2">左图标按钮</s-button>
            <s-button icon="setting" icon_position="right" @click="loading3 = !loading3">右图标按钮</s-button>
            <s-button-group>
                <s-button icon="left" icon_position="left">上一页</s-button>
                <s-button>更多</s-button>
                <s-button icon="right" icon_position="right">下一页</s-button>
            </s-button-group>
            `
        }
    },
}
</script>
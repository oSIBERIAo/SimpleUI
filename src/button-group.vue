<template>
    <div class="s-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {},
    mounted() {
        for (const name of this.$el.children) {
            if (name.localName !== 'button') {
                console.warn(
                    `<s-button-group>标签内的子元素应该全为<s-button>，当前为<${name.localName}>。`
                )
            }
        }
    },
}
</script>
<style lang="scss">
$border-radius: 4px;
.s-button-group {
    display: inline-flex;
    vertical-align: top;
    border-radius: $border-radius;
    box-shadow: 0 0 1px 0 rgba(10, 31, 68, 0.08),
        0 3px 4px 0 rgba(10, 31, 68, 0.1);
    > .s-button {
        border-radius: 0;
        box-shadow: 0 0 0 0 rgba(10, 31, 68, 0.08),
            0 0 0 0 rgba(10, 31, 68, 0.1);

        &:first-child {
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
        }
        &:last-child {
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }

        &:hover {
            z-index: 1;
            box-shadow: 0 0 1px 0 rgba(10, 31, 68, 0.08),
                0 3px 4px 0 rgba(10, 31, 68, 0.1);
        }
    }
}
</style>

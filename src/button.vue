<template>
    <button class="s-button" :class="{[`icon-${icon_position}`]: true,}">
        <!-- <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#icon-i-${icon}`"></use>
        </svg> -->
        <s-icon v-if="icon" :name="icon"></s-icon>    
        <slot></slot>
    </button>
</template>
<script>
    export default {
        // props: ['icon', 'icon_position']
        props: {
            icon: {},
            icon_position: {
                type: String,
                default: 'left',
                validator: function (value) {
                    // 这个值必须匹配下列字符串中的一个
                    return ['left', 'right'].indexOf(value) !== -1 
                }
            },
        }
    }
</script>
<style lang="scss">
    .s-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);

        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;  // 修复对齐Bug
       
        &:hover {
        border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        &.icon-left.content { order: 2; }
        &.icon-left.s-icon { order: 1; }
        
        &.icon-right {
            > .content { order: 1; }
            > .s-icon { order: 2; margin: 0 0 0 0.5em;}
        }
    }
</style>
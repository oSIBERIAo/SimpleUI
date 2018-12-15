<template>
    <button class="s-button" :class="{[`icon-${icon_position}`]: true,}" @click="$emit('click')">
        <s-icon v-if="loading"  class="loading" name="loading"></s-icon>   
        <s-icon v-if="icon && loading == false" :name="icon"></s-icon>    
        <slot></slot>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        components: {
            's-icon': Icon,
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false,
            },
            icon_position: {
                type: String,
                default: 'left',
                validator: function (value) {
                    // 这个值必须匹配下列字符串中的一个
                    return ['left', 'right'].indexOf(value) !== -1 
                }
            },
        },
    }
</script>
<style lang="scss">
    @keyframes spin {
        0%{ transform: rotate(0deg);}
        100%{ transform: rotate(360deg);}
    }
    .loading { animation: spin 1s infinite linear;}
    .s-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: #2C95FF;
        background:  #2C95FF;
        box-shadow: 0 0 1px 0 rgba(10,31,68,0.08), 0 3px 4px 0 rgba(10,31,68,0.10);

        color: #fff;

        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;  // 修复对齐Bug
       
        &:hover {
            border-color: #60AFFF;
            background-color:  #60AFFF;
        }

        &:active {
            background-color: #154A7F;
        }

        &:focus {
            outline: none;
        }

        & > .s-icon {
            fill: white;
        }
        &.icon-left.content { order: 1; }
        &.icon-left.s-icon { order: 0; }
        
        &.icon-right {
            > .content { order: 0; }
            > .s-icon { order: 1; margin: 0 0 0 0.5em;}
        }
    }
</style>
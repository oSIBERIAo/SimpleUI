<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" class="s-input" :class="{disabled, success, error}" :readonly="readonly">               
        <template v-if="error">
            <s-icon v-if="error" name="alert"><s-icon> 
        </template> 
        <!-- 奇怪的BUG -->
        <span v-if="error">{{error}}</span>
    </div>
</template>
<script>
    import Icon from './icon'
    export default {
        components: {
            's-icon': Icon,
        },
        name: 's-input',
        props: {
            name: {},
            value: {
                type: String
            },
            error: {
                type: String,
            },
            success: false,
            disabled: false,
            readonly: {
                type: Boolean,
                default: false
            },
        },
    }
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #2C95FF;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
.wrapper { 
    position: relative;
    font-size: $font-size;
    display: inline-flex; 
    align-items: center; 
    & > .s-icon {
        fill: #F03D3D;
        margin-left: -2em;
    }
    & > span {
        font-size: 14px;
        position: absolute; 
        margin-top: 24px;
        margin-left: 10px;
        padding-top: 4px;
        color: #F03D3D;
    }
}
.s-input {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;  // 修复对齐Bug
    height: 32px; 
    border: 2px solid #E1E4E8;
    border-radius: 4px; padding: 0 8px; 
    font-size: inherit;
    // 
    &:hover {
        border: 2px solid #98A1B1;
    }

    &:active {
        border: 2px solid #2C95FF;
    }

    &:focus {
        outline: none;
        border: 2px solid #2C95FF;
    }

    &.error {
        border: 2px solid #F03D3D;
    }
    &.success{
        border: 2px solid #3ED3A3;
    }
    &.disabled{
        border-color: #E1E4E8;
        color: #E1E4E8;
        background: #E1E4E8;
        cursor: not-allowed;
    }

} 
</style>
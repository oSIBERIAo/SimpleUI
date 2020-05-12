<template>
    <div class="wrapper" :class="{ error }">
        <input
            :value="value"
            class="s-input"
            :class="{ disabled, success, error }"
            :readonly="readonly"
            @input="$emit('input', $event.target.value)"
            @change="$emit('input_change', $event.target.value)"
            @focus="$emit('input_focus', $event.target.value)"
            @blur="$emit('input_blur', $event.target.value)"
        />
        <template v-if="error">
            <s-icon v-if="error" name="alert"></s-icon>
        </template>
        <!-- 奇怪的BUG -->
        <span v-if="error">{{ error }}</span>
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
            type: String,
        },
        error: {
            type: String,
        },
        success: false,
        disabled: false,
        readonly: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #2c95ff;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
    position: relative;
    font-size: $font-size;
    display: inline-flex;
    align-items: center;

    & > .s-icon {
        fill: #f03d3d;
        margin-left: -2em;
    }

    & > span {
        font-size: 14px;
        position: absolute;
        margin-top: 24px;
        margin-left: 10px;
        padding-top: 4px;
        color: #f03d3d;
    }
}
.s-input {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top; // 修复对齐Bug
    height: 32px;
    border: 2px solid #e1e4e8;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    //
    &:hover {
        border: 2px solid #98a1b1;
    }

    &:active {
        border: 2px solid #2c95ff;
    }

    &:focus {
        outline: none;
        border: 2px solid #2c95ff;
    }

    &.error {
        border: 2px solid #f03d3d;
    }

    &.success {
        border: 2px solid #3ed3a3;
    }

    &.disabled {
        border-color: #e1e4e8;
        color: #e1e4e8;
        background: #e1e4e8;
        cursor: not-allowed;
    }
}
</style>

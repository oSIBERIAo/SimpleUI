<template>
    <div class="s-cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            <!-- {{ source[1].name }} -->
            <!-- {{ popoverHeight }} -->
            {{ result || '&nbsp;' }}
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascader-items
                class="popover"
                :selected="selected"
                @update:selected="onUpdateSelected"
                :items="source"
                :height="popoverHeight"
                :style="{ height: popoverHeight }"
            ></cascader-items>
        </div>
    </div>
</template>
<script>
import CascaderItems from './cascader-items'

export default {
    name: 'Cascader',
    components: {
        CascaderItems: CascaderItems,
    },
    props: {
        source: {
            type: Array,
        },
        popoverHeight: {
            type: String,
        },
        selected: {
            type: Array,
            default: () => {
                return []
            },
        },
    },
    data() {
        return {
            popoverVisible: false,
        }
    },
    methods: {
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
            console.log('newSelected', newSelected)
        },
    },
    computed: {
        result() {
            return this.selected.map((item) => item.name).join('/')
        },
    },
}
</script>
<style scoped lang="scss">
@import 'var';

.s-cascader {
    // border: 1px solid red;
    display: inline-block;
    // display: inline-flex;
    margin: 10px;
    position: relative;

    .trigger {
        align-items: center;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        display: inline-flex;
        height: $input-height;
        min-width: 10em;
        padding: 0 1em;
    }

    .popover-wrapper {
        @extend .box-shadow;
        background: white;
        display: flex;
        left: 0;
        position: absolute;
        top: 100%;

        .label {
            white-space: nowrap;
        }
    }
}
</style>

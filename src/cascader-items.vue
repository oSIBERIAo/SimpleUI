<template>
    <div class="cascader-items" :style="{ height: height }">
        <!-- {{this.selected}} -->
        <div class="left">
            <div
                class="label"
                v-for="item in items"
                @click="onclickLabel(item)"
            >
                <span class="name">{{ item.name }}</span>
                <s-icon v-if="rightArrowsVisible(item)" name="right"></s-icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <s-cascader-items
                :level="level + 1"
                :items="rightItems"
                :height="height"
                :selected="selected"
                :load-data="loadData"
                @update:selected="onUpdateSelected"
            ></s-cascader-items>
        </div>
    </div>
</template>

<script>
import Icon from './icon'
export default {
    name: 'SCascaderItems',
    components: {
        's-icon': Icon,
    },
    props: {
        items: {
            type: Array,
        },
        height: {
            type: String,
        },
        level: {
            type: Number,
            default: 0,
        },
        selected: {
            type: Array,
            default: () => {
                return []
            },
        },
        loadData: {
            type: Function,
        },
    },
    data() {
        return {
            leftSelected: null,
        }
    },
    methods: {
        onclickLabel(item) {
            console.log(item)
            let s = JSON.parse(JSON.stringify(this.selected))
            s[this.level] = item
            s.splice(this.level + 1)
            console.log('this.level', this.level)
            console.log('this.sel', s)
            this.$emit('update:selected', s)
        },
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
        },
        rightArrowsVisible(item) {
            return this.loadData ? !item.isLeaf : item.children
        },
    },
    computed: {
        rightItems() {
            let currentSelected = this.selected[this.level]
            // console.log('this.selected~~', this.selected)
            // console.log('this.items~~', this.items)
            if (currentSelected) {
                let item = this.items.filter(
                    (item) => item.name === currentSelected.name
                )
                // console.log('rightItems~~', item)
                if (item && item[0].children && item[0].children.length > 0) {
                    return item[0].children
                }
            }
        },
    },
}
</script>

<style scoped lang="scss">
@import 'var';
.cascader-items {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
        height: 100%;
        width: 100%;
        white-space: nowrap;
        padding: 0 0;
        overflow: auto;
        // border-radius: $border-radius;
        // border: 1px solid;
        .label {
            padding: 0.5em 1em;
            display: flex;
            align-items: center;
            cursor: pointer;
            white-space: nowrap;
            &:hover {
                background: $grey;
            }
            .name {
                margin-right: 1em;
                user-select: none;
            }
            .s-icon {
                margin: 0 -0.5em 0 0;
            }
        }
    }
    .right {
        height: 100%;
        white-space: nowrap;
        display: inline-flex;
        // border-radius: $border-radius;
        border-left: 1px solid $border-color;
        // border: 1px solid;
    }
}
</style>

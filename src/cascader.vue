<template>
    <div class="s-cascader" ref="cascader" v-click-outside="close">
        <div class="trigger" @click="toggle">
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
                :loadData="loadData"
            ></cascader-items>
        </div>
    </div>
</template>
<script>
import CascaderItems from './cascader-items'
import ClickOutside from './utils/click-outside'
import { removeListener } from './utils/click-outside'

export default {
    name: 'Cascader',
    components: {
        CascaderItems: CascaderItems,
    },
    directives: {
        ClickOutside: ClickOutside,
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
        loadData: {
            type: Function,
        },
    },
    data() {
        return {
            popoverVisible: false,
        }
    },
    inject: {},
    methods: {
        open() {
            this.popoverVisible = true
        },
        close() {
            this.popoverVisible = false
        },
        toggle() {
            if (this.popoverVisible === true) {
                this.close()
            } else {
                this.open()
            }
        },
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
            console.log('newSelected', newSelected)

            //以下是动态加载方法
            let lastItem = newSelected[newSelected.length - 1]
            let simplest = (children, id) => {
                return children.filter((item) => item.id === id)[0]
            }
            let complex = (children, id) => {
                let noChildren = []
                let hasChildren = []
                children.forEach((item) => {
                    if (item.children) {
                        hasChildren.push(item)
                    } else {
                        noChildren.push(item)
                    }
                })
                let found = simplest(noChildren, id)
                if (found) {
                    return found
                } else {
                    found = simplest(hasChildren, id)
                    if (found) {
                        return found
                    } else {
                        for (let i = 0; i < hasChildren.length; i++) {
                            found = complex(hasChildren[i].children, id)
                        }
                        if (found) {
                            return found
                        }
                    }
                }
            }

            let updateSource = (result) => {
                let copy = JSON.parse(JSON.stringify(this.source))
                let toUpdate = complex(copy, lastItem.id)
                if (toUpdate) {
                    toUpdate.children = result
                    this.$emit('update:source', copy)
                }
            }
            this.loadData && this.loadData(lastItem, updateSource)
        },
    },
    computed: {
        result() {
            return this.selected.map((item) => item.name).join('/')
        },
    },
    destroyed() {
        removeListener()
    },
}
</script>
<style scoped lang="scss">
@import 'var';

.s-cascader {
    display: inline-flex;
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
        z-index: 1;

        .label {
            white-space: nowrap;
        }
    }
}
</style>

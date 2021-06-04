<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'Tab',
    data() {
        return {
            eventBus: new Vue(),
        }
    },
    props: {
        selected: {
            type: [String, Number],
            required: true,
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal', 'vertical'].indexOf(value) !== -1
            },
        },
    },
    provide() {
        return {
            eventBus: this.eventBus,
        }
    },
    created() {
        this.eventBus.$on('update:selected', (selected) => {
            this.$emit('update:selected', selected)
        })
    },
    mounted() {
        let currentItem
        this.$children.forEach((element) => {
            if (element.$options.name == 'Tab-head') {
                element.$children.forEach((item) => {
                    if (item.name == this.selected) {
                        currentItem = item
                    }
                })
            }
        })
        this.eventBus.$emit('update:selected', this.selected, currentItem)
    },
}
</script>
<style lang="scss">
.tab {
    height: 2em;
}
</style>

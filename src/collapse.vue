<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'Collapse',
    data() {
        return {
            eventBus: new Vue(),
        }
    },
    props: {
        selected: {
            type: Array,
        },
        single: {
            type: Boolean,
            default: false,
        },
    },
    provide() {
        return {
            eventBus: this.eventBus,
        }
    },
    methods: {
        updated(data) {
            this.eventBus.$emit('update:selected', data)
            this.$emit('update:selected', data)
        },
    },
    mounted() {
        this.eventBus.$emit('update:selected', this.selected)

        let selectedClone = JSON.parse(JSON.stringify(this.selected))

        this.eventBus.$on('update:onClick', (item) => {
            let name = item.name

            if (item.visible) {
                // 关闭显示当前item
                if (this.single) {
                    selectedClone == []
                        ? (selectedClone = [name])
                        : (selectedClone = [])
                } else {
                    let index = selectedClone.indexOf(name)
                    selectedClone.splice(index, 1)
                }
            } else {
                if (this.single) {
                    selectedClone = [name]
                } else {
                    selectedClone.push(name)
                }
            }

            this.updated(selectedClone)
        })
    },
}
</script>
<style lang="scss" scoped>
$border-radius: 6px;
.collapse {
    border: 1px solid #ddd;
    border-radius: $border-radius;
}
</style>

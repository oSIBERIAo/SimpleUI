<template>
    <div
        class="s-slides"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
    >
        <div class="s-slides-window">
            <div class="s-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="s-slides-dots">
            <span
                v-for="(children, index) in $children"
                :class="{ active: selectedIndex === index }"
                @click="select(index)"
            >
                {{ index + 1 }}
            </span>
        </div>
    </div>
</template>
<script>
// import CascaderItems from './cascader-items'

export default {
    name: 'Slides',
    props: {
        selected: {
            type: String,
        },
        autoPlay: {
            type: Boolean,
            default: true,
        },
        interval: {
            type: Number,
            default: 1000,
        },
    },
    data() {
        return {
            lastSelectedIndex: undefined,
            timeId: undefined,
            startTouch: undefined,
        }
    },
    inject: {},
    methods: {
        getSelected() {
            let first = this.$children[0]
            return this.selected || first.name
        },
        select(index) {
            this.lastSelectedIndex = this.selectedIndex
            this.$emit('update:selected', this.names[index])
        },
        onMouseEnter() {
            this.pause()
        },
        onMouseLeave() {
            this.playAutomatically()
        },
        onTouchStart(e) {
            if (e.touches.length > 1) {
                return
            }
            this.startTouch = e.touches[0]
            console.log('start', e)
        },
        onTouchMove(e) {
            console.log('move', e)
        },
        onTouchEnd(e) {
            console.log('end', e.changedTouches[0])
            this.playAutomatically()
        },
        pause() {
            clearTimeout(this.timeId)
            this.timeId = undefined
        },
        playAutomatically() {
            let run = () => {
                let index = this.names.indexOf(this.getSelected())
                let newIndex = index + 1
                if (newIndex > this.names.length - 1) {
                    newIndex = 0
                }
                if (newIndex === -1) {
                    newIndex = this.names.length - 1
                }
                this.select(newIndex)
                this.timeId = setTimeout(run, this.interval)
            }
            this.timeId = setTimeout(run, this.interval)
        },
        updateChildren() {
            let selected = this.getSelected()
            this.$children.forEach((vm) => {
                let newIndex = this.selectedIndex
                let oldIndex = this.lastSelectedIndex
                let reverse = newIndex <= oldIndex
                if (oldIndex === this.$children.length - 1 && newIndex === 0) {
                    reverse = false
                }
                if (newIndex === this.$children.length - 1 && oldIndex === 0) {
                    reverse = false
                }
                vm.reverse = reverse
                this.$nextTick(() => {
                    vm.selected = selected
                })
            })
        },
    },
    computed: {
        selectedIndex() {
            let index = this.names.indexOf(this.selected)
            return index === -1 ? 0 : index
        },
        names() {
            return this.$children.map((vm) => vm.name)
        },
    },
    mounted() {
        this.playAutomatically()
        this.lastSelectedIndex = this.getSelected()
    },
    updated() {
        this.updateChildren()
    },
}
</script>
<style scoped lang="scss">
@import 'var';

.s-slides {
    &-window {
        overflow: hidden;
    }

    &-wrapper {
        position: relative;
    }

    &-dots {
        padding: 8px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        > span {
            width: 20px;
            height: 20px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background: #ddd;
            border-radius: 50%;
            margin: 0 8px;
            font-size: 12px;

            &:hover {
                cursor: pointer;
            }

            &.active {
                background: black;
                color: white;

                &:hover {
                    cursor: default;
                }
            }
        }
    }
}
</style>

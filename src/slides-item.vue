<template>
    <transition name="slide">
        <div class="s-slides-item" v-if="visible" :class="{ reverse: reverse }">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'Slides-Item',
    props: {
        name: {
            type: String,
            require: true,
        },
    },
    data() {
        return {
            selected: undefined,
            reverse: false,
        }
    },
    inject: {},
    methods: {},
    computed: {
        visible() {
            return this.selected === this.name
        },
    },
}
</script>
<style lang="scss" scoped>
.s-slides-item {
}

.slide-leave-active {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s;
}

.slide-enter {
    transform: translateX(100%);
}

.slide-enter.reverse {
    transform: translateX(-100%);
}

.slide-leave-to {
    transform: translateX(-100%);
}

.slide-leave-to.reverse {
    transform: translateX(100%);
}
</style>

<template>
    <div class="tab-head">
        <slot></slot>
        <div class="actions-wapper">
            <slot name="actions"></slot>
        </div>
        <div class="line"></div>
    </div>
</template>
<script>
export default {
    name: 'Tab-head',
    inject: ['eventBus'],
    props: {},
    methods: {},
    mounted() {
        this.eventBus.$on('update:selected', (name, tabItem) => {
            let { width, left } = tabItem.$el.getBoundingClientRect()
            let line = this.$el.querySelector('.line')
            line.style.width = width + 'px'
            line.style.left = left + 'px'
        })
    },
    created() {},
}
</script>
<style lang="scss">
.tab-head {
    display: flex;
    // outline: 1px dashed red;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    position: relative;
    .actions-wapper {
        display: flex;
        margin-left: auto;
        margin-right: 10px;
        justify-content: center;
        align-items: center;
    }
    .line {
        // width: 50px;
        border: 1px solid #2c95ff;
        bottom: 0;
        position: absolute;
        transition: all 0.35s;
    }
}
</style>

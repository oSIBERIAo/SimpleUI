<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Layout',
    data() {
        return {
            layoutClass: {
                hasSider: false,
            },
        }
    },
    computed: {},
    methods: {
        xxx() {
            this.$children.forEach((e) => {
                if (e.$options.name === 'Sider') {
                    this.layoutClass.hasSider = true
                }
            })
        },
    },
    mounted() {
        this.xxx()
    },
}
</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    outline: 1px dashed red;
    flex-direction: column;
    flex-grow: 1;
}
.hasSider {
    flex-direction: row;
}
</style>

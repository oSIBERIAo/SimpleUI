<template>
    <div class="s-row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'Row',
        props: {
            gutter: [Number, String],
        },
        mounted() {
            this.$children.forEach(col => {
                col.gutter = this.gutter
            })
        },
        computed: {
            rowStyle() {
                let {gutter,} = this
                return {
                    marginLeft:  -gutter/2 + 'px', 
                    marginRight:  -gutter/2 + 'px',
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .s-row{
        display: flex;
    }
</style>
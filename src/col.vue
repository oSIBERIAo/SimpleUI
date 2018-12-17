<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'Col',
        props: {
            spen: [Number, String],
            offset: [Number, String],
        },
        data() {
            return {
                gutter: [Number, String],
            }
        },
        computed: {
            colClass() {
                let {spen, offset,} = this
                return [
                    spen && `col-${spen}`, 
                    offset && `offset-${offset}`,
                ]
            },
            colStyle() {
                let {gutter,} = this
                return {
                    paddingLeft:  gutter/2 + 'px', 
                    paddingRight:  gutter/2 + 'px',
                }
            }
        },
    }
</script>
<style lang="scss" >
    .col{
        height: 100px;
        // background-color: #60afff;
        width: 50%;
        // padding: 0 10px;
        // margin: 0 10px;
        // border: 1px dashed red;
        outline: 1px dashed  #007eff;
        $col: col-;
        // loops through 100 times
        @for $n from 1 through 24 {
            // for each $col_#{i} 
            &.#{$col}#{$n} {
                width: ($n / 24) * 100%;
                // background-color: darken(cornflowerblue, 0% + ($n / 2));
            }
        }
        $offset: offset-;
        @for $n from 1 through 24 {
            // for each $col_#{i} 
            &.#{$offset}#{$n} {
                margin-left: ($n / 24) * 100%;
                // background-color: darken(cornflowerblue, 0% + ($n / 2));
            }
        }
    }
    
</style>
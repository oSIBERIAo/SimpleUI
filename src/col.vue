<template>
    <div class="col" :class="`col-${spen}`"></div>
</template>
<script>
    export default {
        name: 'Col',
        props: {
            spen: [Number, String],
        },
    }
</script>
<style lang="scss" >
    .col{
        height: 100px;
        background-color: #60afff;
        width: 50%;
        outline: 1px solid #007eff;
    }
    $class: col-;
    // loops through 100 times
    @for $n from 1 through 24 {
        // for each $col_#{i} 
        .#{$class}#{$n} {
            width: ($n / 24) * 100%;
            // background-color: darken(cornflowerblue, 0% + ($n / 2));
        }
    }
</style>
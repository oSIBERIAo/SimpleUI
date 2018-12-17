<template>
    <div class="s-row">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'Row',
        props: {},
    }
</script>
<style lang="scss" scoped>
    .s-row{
        display: flex;
        // & > .col{
        //     height: 100px;
        //     background-color: #60afff;
        //     // width: 50%;
        //     /* border: 1px solid red; */
        //     outline: 1px solid #007eff;
        // }
    }
</style>
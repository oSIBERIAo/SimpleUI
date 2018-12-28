<template>
    <div class="tab-body">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "Tab-body",
        props: {},
    }
</script>
<style lang="scss">
    .tab-body{
        display: flex;
    }
</style>
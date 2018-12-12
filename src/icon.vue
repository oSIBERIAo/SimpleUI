<template>
    <svg class="s-icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
    export default {
        props: {
            name: {},
        },
    }
</script>
<style lang="scss">
    .s-icon{ width: 1em; height: 1em; margin: 0 0.5em 0 0;}
</style>
<template>
    <div class="footer">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Footer',
}
</script>
<style lang="scss" scoped>
.footer {
    min-height: 20px;
    outline: 1px dashed red;
}
</style>

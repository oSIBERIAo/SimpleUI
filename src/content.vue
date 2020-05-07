<template>
    <div class="content">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Content',
}
</script>
<style lang="scss" scoped>
.content {
    min-height: 20px;
    outline: 1px dashed red;
    flex-grow: 1;
}
</style>

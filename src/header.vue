<template>
  <div class="header">
       <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Header',
  }
</script>
<style lang="scss" scoped>
    .header{
        min-height: 20px;
        outline: 1px dashed red;
    }
</style>
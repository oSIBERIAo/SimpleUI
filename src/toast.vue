<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>

  export default {
    name: 'Toast',
    data(){
      return {
        
      }
    },
    mounted() {
        
    },
    computed: {
    },
  }
</script>

<style lang="scss" scoped>
    .toast{
        position: fixed;
        display: flex;
        // min-width: 448px;
        min-height: 48px;
        // outline: 1px dashed red;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        background: #2C95FF;
        padding: 0 10px;
        align-items: center;
        border-radius: 4px;
        border: 1px solid rgba(255,255,255,0.15);
        color: white;
        font-size: 16px;
        box-shadow: 0 0 1px 0 rgba(10,31,68,0.08), 0 3px 4px 0 rgba(10,31,68,0.10);
    }
</style>
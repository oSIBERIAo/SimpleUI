<template>
    <transition name="fade">
        <div class="sider" :style="sider_style" v-if="visible">
            <!-- <button @click='visible = false'>切换</button> -->
            <slot></slot>
        </div>
    </transition>
</template>
<script>
  export default {
    name: 'Sider',
    data(){
        return {
            visible: true
        }
    },
    props: {
        sider_style: { type: String, },
    },
  }
</script>
<style lang="scss" scoped>
    .sider {
        min-height: 20px;
        outline: 1px dashed red;
        button{
            position: absolute;
            left: 20px;
            top: 20px;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }
    .fade-enter, .fade-leave-to{
       margin-left: -150px;
       opacity: 0;
    }
</style> 
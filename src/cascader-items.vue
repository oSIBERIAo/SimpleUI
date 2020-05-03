<template>
  <div class="cascader-items" :style="{ height: height }">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        <span class="name">{{ item.name }}</span>
        <s-icon v-if="item.children" name="right"></s-icon>
      </div>
    </div>
    <div class="right" v-if="righrItems">
      <s-cascader-items :items="righrItems" :height="height"></s-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "./icon"
export default {
  name: "SCascaderItems",
  components: {
    "s-icon": Icon,
  },
  props: {
    items: {
      type: Array,
    },
    height: {
      type: String,
    },
  },
  data() {
    return {
      leftSelected: null,
    }
  },
  computed: {
    righrItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import "var";
.cascader-items {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    height: 100%;
    width: 100%;
    white-space: nowrap;
    padding: 0.3em 0;
    overflow: auto;
    // border-radius: $border-radius;
    // border: 1px solid;
    .label {
      padding: 0.3em 1em;
      display: flex;
      align-items: center;
      .s-icon {
        // transform: scale(0.8);
        margin: 0 0 0 0;
      }
    }
  }
  .right {
    height: 100%;
    width: 100%;
    white-space: nowrap;
    display: inline-flex;
    // border-radius: $border-radius;
    border-left: 1px solid $border-color;
    // border: 1px solid;
  }
}
</style>

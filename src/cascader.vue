<template>
  <div class="s-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <!-- {{ source[1].name }} -->
      <!-- {{ popoverHeight }} -->
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items
        class="popover"
        :items="source"
        :height="popoverHeight"
        :style="{ height: popoverHeight }"
      ></cascader-items>
    </div>
  </div>
</template>
<script>
import CascaderItems from "./cascader-items"
export default {
  name: "Cascader",
  components: {
    CascaderItems: CascaderItems,
  },
  props: {
    source: {
      type: Array,
    },
    popoverHeight: {
      type: String,
    },
  },
  data() {
    return {
      popoverVisible: false,
    }
  },
}
</script>
<style scoped lang="scss">
@import "var";
.s-cascader {
  position: relative;
  margin: 10px;
  display: inline-block;
  border: 1px solid red;
  .trigger {
    padding: 0 1em;
    min-width: 10em;
    height: $input-height;
    display: inline-flex;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    align-items: center;
  }
  .popover-wrapper {
    top: 100%;
    position: absolute;
    left: 0;
    display: flex;
    background: white;
    @extend .box-shadow;
    .label {
      white-space: nowrap;
    }
  }
}
</style>

<template>
  <div class="m-card">
    <div class="m-card-img" :style="width ? { width: width + 'px' } : {}">
      <img :src="imgSrc" alt="图片"  :style="imgHeight ? { height: imgHeight + 'px' } : {}">
    </div>
    <div  v-if="summary" class="m-card-summary">{{summary}}</div>
    <div v-else class="m-card-summary">
      <slot></slot>
    </div>
   <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: "m-card",
  props: {
    width: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: "",
    },
  },
};
</script>

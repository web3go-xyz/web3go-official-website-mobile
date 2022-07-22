<template>
  <div class="box">
    <div
      class="char"
      v-for="(v, i) in textArr"
      :key="i"
      :style="{ 'animation-delay': i * (0.2 / textArr.length) + 's' }"
    >
      {{ v }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {};
  },
  computed: {
    textArr() {
      return this.text.split("");
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes mymove {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
.box {
  overflow: hidden;
  cursor: pointer;
  &:hover {
    .char {
      animation: mymove 0.2s;
    }
  }
  .char {
    display: inline-block;
  }
}
</style>
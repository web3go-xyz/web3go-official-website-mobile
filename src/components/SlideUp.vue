<template>
  <div class="slide-up-box">
    <div ref="inner" class="inner">
      <slot />
    </div>
  </div>
</template>

<script>
import throttle from "lodash.throttle";
export default {
  props: {
    delay: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.move();
    window.addEventListener("scroll", this.windowScrollFunction);
  },
  unmounted() {
    window.removeEventListener("scroll", this.windowScrollFunction);
  },
  methods: {
    // windowScrollFunction: throttle(function () {
    //   this.move();
    // }, 50),
    windowScrollFunction() {
      this.move();
    },
    move() {
      const el = this.$refs.inner;
      const offset = el.getBoundingClientRect();
      if (offset.top <= window.innerHeight && offset.bottom >= 0) {
        el.style.animation = `slideUp 1s ${this.delay}s`;
        el.style["animation-fill-mode"] = "forwards";
      }
    },
    reMove() {
      const el = this.$refs.inner;
      const offset = el.getBoundingClientRect();
      el.style.animation = "";
      setTimeout(() => {
        if (offset.top <= window.innerHeight && offset.bottom >= 0) {
          el.style.animation = `slideUp 1s ${this.delay}s`;
          el.style["animation-fill-mode"] = "forwards";
        }
      }, 10);
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes slideUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

.slide-up-box {
  overflow: hidden;
  .inner {
    opacity: 0;
  }
}
</style>
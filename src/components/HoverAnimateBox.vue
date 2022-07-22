

<template>
  <div ref="boxWrap" class="box-wrap">
    <div
      class="box"
      @mousemove="handleMousemove"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
      :style="{
        transform:
          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(' +
          rotateX +
          'deg) rotateY(' +
          rotateY +
          'deg) rotateZ(0deg) skew(0deg, 0deg)',
      }"
    >
      <slot :getItemStyle="getItemStyle" :isInBox="isInBox"></slot>
    </div>
  </div>
</template>

<script>
import throttle from "lodash.throttle";
export default {
  props: {
    rotate: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      rotateX: 0,
      rotateY: 0,
      itemTranslateXPercent: 0,
      itemTranslateYPercent: 0,
      boxWidth: 0,
      boxHeight: 0,
      // 有时移出后还会触发mousemove
      isInBox: false,
    };
  },
  mounted() {
    this.boxWidth = this.boxWrapRef.offsetWidth;
    this.boxHeight = this.boxWrapRef.offsetHeight;
  },
  computed: {
    boxWrapRef() {
      return this.$refs.boxWrap;
    },
  },
  methods: {
    getItemStyle(maxTranslate) {
      return (
        "transition: 350ms ease-out;will-change: transform;transform-style: preserve-3d;transform:translate3d(" +
        this.itemTranslateXPercent * maxTranslate +
        "px, " +
        this.itemTranslateYPercent * maxTranslate +
        "px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);"
      );
    },
    getOffsetOfDocument(element) {
      var pos = { left: 0, top: 0 };

      var parents = element.offsetParent;

      pos.left += element.offsetLeft;
      pos.top += element.offsetTop;

      while (parents && !/html|body/i.test(parents.tagName)) {
        pos.left += parents.offsetLeft;
        pos.top += parents.offsetTop;

        parents = parents.offsetParent;
      }
      return pos;
    },
    handleMousemove: throttle(function (e) {
      if (!this.isInBox) {
        return;
      }
      // 子元素冒泡会影响e.offectX，所以只能自己计算
      const boxWrapOffset = this.getOffsetOfDocument(this.boxWrapRef);
      const offsetX = e.pageX - boxWrapOffset.left;
      const offsetY = e.pageY - boxWrapOffset.top;

      const halfWidth = this.boxWidth / 2;
      const halfHeight = this.boxHeight / 2;

      if (offsetX < halfWidth) {
        this.rotateY = (-this.rotate * (halfWidth - offsetX)) / halfWidth;
        this.itemTranslateXPercent = -(halfWidth - offsetX) / halfWidth;
      } else if (offsetX > halfWidth) {
        this.rotateY = (this.rotate * (offsetX - halfWidth)) / halfWidth;
        this.itemTranslateXPercent = (offsetX - halfWidth) / halfWidth;
      }
      if (offsetY < halfHeight) {
        this.rotateX = (this.rotate * (halfHeight - offsetY)) / halfHeight;
        this.itemTranslateYPercent = -(halfHeight - offsetY) / halfHeight;
      } else if (offsetY > halfHeight) {
        this.rotateX = (-this.rotate * (offsetY - halfHeight)) / halfHeight;
        this.itemTranslateYPercent = (offsetY - halfHeight) / halfHeight;
      }
    }, 50),
    clear() {
      this.rotateX = 0;
      this.rotateY = 0;
      this.itemTranslateXPercent = 0;
      this.itemTranslateYPercent = 0;
    },
    handleMouseenter() {
      this.$emit("mouseenter");
      this.isInBox = true;
    },
    handleMouseleave() {
      this.$emit("mouseleave");
      this.isInBox = false;
      this.clear();
    },
  },
};
</script>

<style lang="less" scoped>
.box-wrap {
  width: 100%;
  height: 100%;
  perspective: 1000px;
  transform: perspective(1000px);
  display: inline-block;
  .box {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    will-change: transform;
    transition: 350ms ease-out;
  }
}
</style>
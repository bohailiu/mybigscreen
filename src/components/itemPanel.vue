<template>
  <div class="panel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "itemPanel",
};
</script>

<style lang="less">
.panel {
  position: relative;
  height: 3.425rem;
  // height: 4.375rem;
  // background-color: ;
  border: 1px solid rgba(6, 68, 110);
  padding: 0 0.2375rem 0.1875rem;
  margin-bottom: 0.4375rem;

  &::after {
    //&表示引用父元素
    position: absolute;
    top: 0;
    right: 0;
    width: 0.3125rem;
    height: 0.3125rem;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: "";
  }

  .panel-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;

    &::before {
      //&表示引用父元素
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0.3125rem;
      height: 0.3125rem;
      border-left: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
      content: "";
    }
  }
}
</style>
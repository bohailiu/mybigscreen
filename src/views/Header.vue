<template>
  <header>
    <!-- 头部标题和时间 -->
    <!-- 时间 -->
    <div class="showTime">
      <div class="leftTime"></div>
      <div class="rightTime">
        <div class="week"></div>
        <div class="date"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
header {
  // 顶部75px
  height: 0.9375rem;
  position: relative;

  // 时间
  .showTime {
    // 时间容器宽320px
    width: 3.05rem;
    // width: 3.05rem;
    // 高75px
    height: 0.9375rem;
    // background-color: #fff;
    position: absolute;
    // top: 30px;
    right: 0.3rem;
    color: rgba(96, 228, 240);
    font-size: 25px;
    display: flex;

    .leftTime {
      position: absolute;
      left: 0.625rem;
      bottom: 0;
      flex: 1;
      // font-size: 25px;
      // background-color: #fff;
    }

    .rightTime {
      position: absolute;
      right: 0;
      bottom: 0;
      flex: 1;
      font-size: 0.2rem;

      &::before {
        position: absolute;
        content: "";
        width: 1px;
        height: 0.5rem;
        background-color: rgba(96, 228, 240);
        left: -0.25rem;
        bottom: 0;
      }
    }
  }
}
</style>
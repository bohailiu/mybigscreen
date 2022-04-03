<template>
  <div class="map">
    <div class="title">设备辐射</div>
    <div class="chia-map"></div>
    <div class="number"></div>
    <div class="news"></div>
  </div>
</template>

<script>
export default {
  name: "CenterTop",
};
</script>

<style lang="less">
.map {
  color: rgb(69, 143, 185);
  // border: solid 1px red;
  height: 7.275rem;
  margin-bottom: 0.4375rem;
  font-size: 0.375rem;

  .title {
    width: 2.5rem;
    border: solid 2px rgba(6, 68, 110);
    line-height: 0.4625rem;
    // position: absolute;
  }
}
</style>
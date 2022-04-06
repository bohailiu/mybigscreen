<template>
  <div class="device">
    <h2></h2>
    <div class="chart">
      <div class="device-out-ring">
        <div class="img1-wrapper">
          <img class="img1" src="@/assets/imgbox/lefttop/fan.png" alt="" />
        </div>
        <div class="img2-wrapper">
          <img class="img2" src="@/assets/imgbox/lefttop/fan.png" alt="" />
        </div>
        <div class="img3-wrapper">
          <img class="img3" src="@/assets/imgbox/lefttop/fan.png" alt="" />
        </div>
        <div class="img4-wrapper">
          <img class="img4" src="@/assets/imgbox/lefttop/fan.png" alt="" />
        </div>
        <div class="img5-wrapper">
          <img class="img5" src="@/assets/imgbox/lefttop/fan.png" alt="" />
        </div>
        <div class="device-in-ring"></div>
      </div>
      <div class="data-ring"></div>
      <div class="data-rect">
        <dv-border-box-11 
        title="dv-border-box-11"
        >
        dv-border-box-11
        </dv-border-box-11>
      </div>
    </div>
    <!-- 底部左边角 -->
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: "LeftTop",
};
</script>

<style lang="less" scoped>
// 旋转未选中扇形
.device-out-ring {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  // border: solid 1px rgb(7, 116, 145);
  border-radius: 50%;
  margin-top: 15px;

  .device-in-ring {
    width: 0.9375rem;
    height: 0.9375rem;
    // border: solid 1px rgb(7, 116, 145);
    border-radius: 50%;
  }

  div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  img {
    position: absolute;
    left: 50%;
    top: -3px;
    transform: translateX(-50%);
  }

  .img2-wrapper {
    width: 100%;
    height: 100%;
    transform: rotateZ(72deg);
  }

  .img3-wrapper {
    width: 100%;
    height: 100%;
    transform: rotateZ(144deg);
  }

  .img4-wrapper {
    width: 100%;
    height: 100%;
    transform: rotateZ(216deg);
  }

  .img5-wrapper {
    width: 100%;
    height: 100%;
    transform: rotateZ(288deg);
  }
}

</style>
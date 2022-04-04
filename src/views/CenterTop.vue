<template>
  <div class="map">
    <!-- 外层轮播图 -->
    <div class="block">
      <el-carousel 
      trigger="click" 
      height="5.45rem" 
      :interval="90000000"
      :initial-index = '1'
      >
        <!-- 1.轮播图 -->
        <el-carousel-item>
          <ImgSlide />
        </el-carousel-item>
        <!-- 2.设备辐射 -->
        <el-carousel-item>
          <DeviceMap />
        </el-carousel-item>
        <el-carousel-item> </el-carousel-item>
        <el-carousel-item> </el-carousel-item>
      </el-carousel>
    </div>

    <div class="number"></div>
    <div class="news"></div>
  </div>
</template>

<script>
import ImgSlide from "../components/ImgSlide";
import DeviceMap from "../components/DeviceMap";
export default {
  name: "CenterTop",
  components: {
    ImgSlide,
    DeviceMap,
  },
};
</script>

<style lang="less" scoped>
.map {
  color: rgb(69, 143, 185);
  border: solid 1px red;
  height: 7.275rem;
  // width: 8.4375rem;
  margin-bottom: 0.4375rem;
}

.el-carousel {
  /deep/.el-carousel__indicators {
    // 指示器
    left: unset;
    transform: unset;
    right: 0;
    top: -0.125rem;
  }
  /deep/.el-carousel__button {
    // 指示器按钮
    width: 0.25rem;
    height: 0.25rem;
    // border: none;
    border-radius: 50%;
    background-color: rgb(0, 120, 255);
  }
  /deep/.is-active .el-carousel__button {
    // 指示器激活按钮
    background: rgb(1, 251, 246);
  }
}
</style>
<template>
  <div class="map">
    <!-- 外层轮播图 -->
    <div class="block">
      <el-carousel
        trigger="click"
        height="5.45rem"
        :interval="90000000"
        :initial-index="1"
      >
        <!-- 1.轮播图 -->
        <el-carousel-item>
          <ImgSlide />
        </el-carousel-item>
        <!-- 2.设备辐射 -->
        <el-carousel-item>
          <DeviceMap />
        </el-carousel-item>
        <!-- 3.视频 -->
        <el-carousel-item>
          <Video />
        </el-carousel-item>

        <el-carousel-item> </el-carousel-item>
      </el-carousel>
    </div>

    <div class="mapFooter">
      <div class="usage">
        <div>访问人数</div>
        <div>注册人数</div>
        <div>发证人数</div>
        <div>培训场次</div>
        <div>考核人数</div>
        <div>使用人数</div>
        <section>11111</section>
        <section>222222</section>
        <section>333333</section>
        <section>444444</section>
        <section>555555</section>
        <section>666666</section>
      </div>

      <div class="news">
        <marquee>
          "近日，教育部印发《关于开展2022年“师生健康中国健康”主题健康教育活动的通知》
          部署2022年全年在全国校园继续深入开展“师生健康中国健康”主题健康教育活动，
          旨在深入贯彻落实《“健康中国2030”规划纲要》
          《教育部等五部门关于全面加强和改进新时代学校卫生与健康教育工作的意见》要求，
          牢固树立健康第一的教育理念，
          构建新时代、现代化、高质量学校健康教育体系，
          培养师生健康意识、观念和生活方式，提高师生健康素养。"
        </marquee>
      </div>
    </div>
  </div>
</template>

<script>
import ImgSlide from "../components/ImgSlide";
import DeviceMap from "../components/DeviceMap";
import Video from "../components/Video";
export default {
  name: "CenterTop",
  components: {
    ImgSlide,
    DeviceMap,
    Video,
  },
};
</script>

<style lang="less" scoped>
.map {
  color: rgb(69, 143, 185);
  border: solid 1px rgb(1, 251, 246);
  height: 7.275rem;
  width: 8.5375rem;
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

.mapFooter {
  // border: solid blue 1px;
  margin-top: 0.6rem;
  height: 1.175rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.usage {
  // border: solid yellow 1px;
  width: 100%;
  height: 0.5625rem;
  background: url(../assets/imgbox/usageIcon.png) no-repeat left bottom;
  background-size: 8.575rem 0.5625rem;
  // background-size: cover;
  position: relative;
  div {
    position: absolute;
    transform: scale(0.6);
    color: #fff;
    top: -2px;
  }
  div:nth-child(1) {
    left: 0.6rem;
  }
  div:nth-child(2) {
    left: 2.09rem;
  }
  div:nth-child(3) {
    left: 3.53rem;
  }
  div:nth-child(4) {
    left: 4.99rem;
  }
  div:nth-child(5) {
    left: 6.45rem;
  }
  div:nth-child(6) {
    left: 7.885rem;
  }

  section {
    position: absolute;
    top: 20px;
    color: rgb(207, 203, 203);
  }

  section:nth-child(7) {
    left: 0.625rem;
  }
  section:nth-child(8) {
    left: 2.1rem;
  }
  section:nth-child(9) {
    left: 3.575rem;
  }
  section:nth-child(10) {
    left: 5.05rem;
  }
  section:nth-child(11) {
    left: 6.525rem;
  }
  section:nth-child(12) {
    left: 7.9375rem;
  }
}

.news {
  height: 0.4rem;
  // border: solid orange 1px;
  color: #fff;
  line-height: 0.4rem;
  background-image: linear-gradient(
    to right,
    rgba(1,176,223,.1),
    rgba(1,176,223,.6),
    rgba(1,176,223,.1),
  );
}
</style>
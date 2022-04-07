<template>
  <div>
    <Background />
    <div class="content">
      <Header />
      <!-- 主体结构 -->
      <section class="mainbox">
        <!-- 左中右三栏 -->
        <!-- 左栏 -->
        <div class="column">
          <!-- 公共盒子样式 -->
          <itemPanel>
             <LeftTop/>
          </itemPanel>
          <!-- 垂直柱状图 -->
          <itemPanel>
            <LeftCenter />
          </itemPanel>
          
          <!-- 扇形图 -->
          <itemPanel>
            <LeftBottom />
          </itemPanel>
          
        </div>
        <!-- 中栏 -->
        <div class="column">
          <!-- 地图模块 -->
          <CenterTop />
          <!-- 底部折线图模块 -->
          <itemPanel>
            <CenterBottom />
          </itemPanel>
          
        </div>
        <!-- 右栏 -->
        <div class="column">
          <itemPanel>
            <RightTop />
          </itemPanel>
          
          <!-- 水平柱状图 -->
          <itemPanel>
            <RightCenter />
          </itemPanel>
          
          <!-- 表格 -->
          <itemPanel>
            <RightBottom />
          </itemPanel>
          
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Background from "./Background.vue";
import CenterBottom from "./CenterBottom.vue";
import CenterTop from "./CenterTop.vue";
import Header from "./Header.vue";
import LeftTop from "./LeftTop.vue";
import LeftBottom from "./LeftBottom.vue";
import LeftCenter from "./LeftCenter.vue";
import RightBottom from "./RightBottom.vue";
import RightCenter from "./RightCenter.vue";
import RightTop from "./RightTop.vue";
import itemPanel from '../components/itemPanel.vue'
export default {
  name: "index",
  components: {
    Background,
    CenterBottom,
    RightTop,
    RightCenter,
    RightBottom,
    CenterTop,
    Header,
    LeftTop,
    LeftCenter,
    LeftBottom,
    itemPanel
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; //width=border+padding+content
}

.content {
  position: absolute;
  top: 0;
  // width: 100%;
  // height: 100%;
  height: 100vh;
  width: 100vw;
  // left: .0625rem
  // right: -0.125rem;
}

.mainbox {
  // min-width: 1024px;
  max-width: 1920px;
  // height: 1080px;
  margin: 0 auto;
  // background-color: pink;
  padding: 0.825rem 0.9375rem 0.9375rem 0.9375rem;
  // background-color: skyblue;
  display: flex;

  .column {
    flex: 3;
  }

  .column:nth-child(2) {
    position: relative; //给zhexian定位
    flex: 4;
    // background-color: #fff;
    margin: 0 0.4375rem;
  }

  .chart {
    height: 2.8rem;
  }

  h2 {
    height: .375rem;
    background-color: rgb(11, 38, 77);
    color: rgb(69, 143, 185);
    font-size: 0.25rem;
    font-weight: 400;
  }
}
</style>
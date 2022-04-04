<template>
  <div>
    <div class="title">设备辐射</div>
    <div class="deviceChinaMap"></div>
  </div>
</template>

<script>
// 引入中国地图
import { mapData } from "../assets/mapData";
export default {
  name: "DeviceMap",
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(
        document.querySelector(".deviceChinaMap")
      );

      // 注册要使用的地图
      this.$echarts.registerMap("chinaMap", mapData);
      let option = {
        geo: {
          //地理坐标组件
          type: "map", //图标类型
          map: "chinaMap",
          roam:true,//平移缩放
          zoom:1
        },
      };

      myChart.setOption(option);

      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style lang='less' scoped>
.title {
  font-size: 0.375rem;
  width: 2.5rem;
  border: solid 2px rgba(6, 68, 110);
  line-height: 0.4625rem;
}

.deviceChinaMap {
  height: 5.4625rem;
  border: solid yellow 1px;
}
</style>
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
        title: {
          text: "设备辐射区域",
          textStyle: {
            color: "rgb(215, 100, 119)",
            fontSize: 15,
          },
          right: "0",
          bottom: "10%",
        },
        geo: {
          //地理坐标组件
          type: "map", //图标类型
          map: "chinaMap",
          roam: true, //是否可平移缩放
          zoom: 1.5, //初始化大小
          center: [104.890355, 33.840683], //初始中心点
          itemStyle: {
            areaColor: "transparent", //透明背景
            borderColor: "rgb(13, 205, 253)", //边框
          },
        },
        tooltip:{
          triger:'item'
        },
        // 散点图
        series: [
          {
            type: "effectScatter", //涟漪效果散点图
            coordinateSystem: "geo",
            data: [
              { name: "北京", value: [116.4, 39.9] },
              { name: "天津", value: [117.2, 39.12] },
              { name: "上海", value: [121.47, 31.23] },
              { name: "重庆", value: [106.55, 29.57] },
              { name: "河北", value: [114.52, 38.05] },
              { name: "河南", value: [113.62, 34.75] },
              { name: "云南", value: [102.72, 25.05] },
              { name: "辽宁", value: [123.43, 41.8] },
              { name: "黑龙江", value: [126.53, 45.8] },
              { name: "湖南", value: [112.93, 28.23] },
              { name: "安徽", value: [117.25, 31.83] },
              { name: "山东", value: [116.98, 36.67] },
              { name: "新疆", value: [87.62, 43.82] },
              { name: "江苏", value: [118.78, 32.07] },
              { name: "浙江", value: [120.15, 30.28] },
              { name: "江西", value: [115.85, 28.68] },
              { name: "湖北", value: [114.3, 30.6] },
              { name: "广西", value: [108.37, 22.82] },
              { name: "甘肃", value: [103.82, 36.07] },
              { name: "山西", value: [112.55, 37.87] },
              { name: "内蒙古", value: [111.73, 40.83] },
              { name: "陕西", value: [108.93, 34.27] },
              { name: "吉林", value: [125.32, 43.9] },
              { name: "福建", value: [119.3, 26.08] },
              { name: "贵州", value: [106.63, 26.65] },
              { name: "广东", value: [113.27, 23.13] },
              { name: "青海", value: [101.78, 36.62] },
              { name: "西藏", value: [91.13, 29.65] },
              { name: "四川", value: [104.07, 30.67] },
              { name: "宁夏", value: [106.28, 38.47] },
              { name: "海南", value: [110.32, 20.03] },
              { name: "台湾", value: [121.5, 25.03] },
              { name: "香港", value: [114.08, 22.2] },
              { name: "澳门", value: [113.33, 23.13] },
            ],
            // 涟漪效果配置
            rippleEffect: {
              number: 2, //波纹数量
              scale: 2, //大小
            },
            itemStyle: {
              color: "rgb(215, 100, 119)",
            },
          },
        ],
      };

      myChart.setOption(option);

      window.addEventListener("resize", () => {
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
  width: 8.5125rem;
  // border: solid yellow 1px;
}
</style>
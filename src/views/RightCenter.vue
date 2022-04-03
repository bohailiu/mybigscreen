<template>
  <div class="device-bar">
    <h2>设备在线时长详情</h2>
    <div class="chart"></div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: "RightCenter",
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(document.querySelector(".device-bar .chart"));
      let option = {
        title: {
          text: "设备",
          textStyle: {
            color: "rgb(47, 173, 204)",
            fontSize: 12,
          },
          left: "10%",
          top: "10%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "1%",
          right: "15%",
          bottom: "1%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "value",
            // boundaryGap: [0, 0.01],
            boundaryGap: ["20%", "20%"],
            splitLine: {
              show: false,
            },
            axisLine: {
              show: true,
            },
            axisLabel: {
              color: "rgb(97,137,166)",
            },
            splitNumber: 2, //轴刻度分割，1：分一次，得到2段，2:分两次，得到3段
          },
        ],
        yAxis: {
          type: "category",
          data: ["其他设备", "创伤救护", "心脏复苏", "气道异物梗阻"],
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#fff",
          },
          // max:'20000',
          // max:'7
          // min: function (value) {
          //     // return value.min + ;
          // }
        },
        series: [
          {
            name: "今日在线时长",
            type: "bar",
            data: [10000, 10000, 10000, 9000],
            barWidth: "22%",
            itemStyle: {
              color: "rgb(0, 246, 255)",
            },
          },
          {
            name: "平均在线时长",
            type: "bar",
            data: [4000, 4000, 10000, 2500],
            barWidth: "22%",
            itemStyle: {
              color: "rgb(0, 78, 255)",
            },
          },
        ],
        legend: {
          // 设置系列图例样式
          textStyle: {
            fontSize: 10,
            // color:function(params){},设置图例文字和图例颜色一样
            color: [],
          },
          icon: "rect", //设置图例形状为矩形
          itemWidth: 14,
          itemHeight: 10,
          top: 10,
          right: 10,
        },
      };
      // 设置配置项给实例对象
      myChart.setOption(option);
      // 监听窗口大小图表自适应
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style>
</style>
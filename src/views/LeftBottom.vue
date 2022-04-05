<template>
  <div class="course">
    <h2>课程统计数据</h2>
    <div class="course-list">
      <h3>热门课程排行榜</h3>
      <ul>
        <li>烧烫伤</li>
        <li>心脏复苏理论</li>
        <li>气道异物梗阻</li>
        <li>急救概念与程序</li>
        <li>创伤类型</li>
      </ul>
    </div>
    <div class="course-pie"></div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: "LeftBottom",
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(
        document.querySelector(".course-pie")
      );
      let option = {
        title: {
          text: "课程学习占比",
          textStyle: {
            color: "rgb(4,175,186)",
            fontSize: 16,
          },
          // 标题位置
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          textStyle: {
            color: "#fff",
            fontSize: 10,
          },
          right: 0,
          bottom: 20,
          icon: "rect",
          itemHeight: 8,
          itemWidth: 8,
          itemStyle: {
            // padding:[2],
            borderWidth: 1,
            borderColor: "rgb(0,42,186)",
          },
          // legend显示样式
          formatter: function (name) {
            // 获取legend显示内容
            let data = option.series[0].data;
            let total = 0;
            let tarValue = 0;
            for (let i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            let p = tarValue;
            // return name + ' ' + ' ' + p + '%';
            return `${name}  ${p}%`;
          },
        },
        series: [
          {
            // name: 'Access From',
            type: "pie",
            radius: "65%",
            center: ["28%", "55%"],
            data: [
              { value: 25, name: "急救基础知识" },
              { value: 34, name: "CPR+AED" },
              { value: 18, name: "日常急诊" },
              { value: 13, name: "意外伤害" },
              { value: 10, name: "创伤救护" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            label: {
              show: false,
              // formatter: '{d}%' //只要百分比
            },
            startAngle: -90, //起始角度,默认水平向右为0
            clockwise: false, //生长方向，是否顺时针
          },
        ],
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

<style lang="less" scoped>
.course-pie {
  // 课程扇形图位置
  position: absolute;
  right: 0.225rem;
  bottom: 0.1875rem;
  // 大小
  width: 3.325rem;
  height: 2.5rem;
  border: solid 1px rgb(4, 175, 186);
  // 内边距：扇形图占据空间
  padding: 0.1125rem 0.15rem 0.1875rem;
}
</style>
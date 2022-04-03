<template>
  <div class="bar">
    <h2>师生配比数据</h2>
    <div class="chart"></div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://dsj.ppaa66.com/index.php/api/index";
export default {
  name: "LeftCenter",
  data() {
    return {};
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(document.querySelector(".bar .chart"));
      axios.get("/ssmatching").then(
        (response) => {
          console.log("请求成功了", response.data.content.data);
          let arr = response.data.content.data;
          // arr.forEach(i => {
          //   console.log(i)
          // });
          let studentData = [
            arr[0].student,
            arr[1].student,
            arr[2].student,
            arr[3].student,
            arr[4].student,
            arr[5].student,
            arr[6].student,
            arr[7].student,
            arr[8].student,
          ];
          let teacherData = [
            arr[0].teacher,
            arr[1].teacher,
            arr[2].teacher,
            arr[3].teacher,
            arr[4].teacher,
            arr[5].teacher,
            arr[6].teacher,
            arr[7].teacher,
            arr[8].teacher,
          ];

          let option = {
            title: {
              text: "区 域",
              textStyle: {
                color: "rgb(47, 173, 204)",
                fontSize: 10,
              },
              right: "8%",
              bottom: "4%",
            },
            tooltip: {
              trigger: "axis",
              // 坐标轴指示器，坐标轴触发有效
              axisPointer: {
                type: "shadow", //默认为line，可改为'line'
              },
            },
            grid: {
              left: "3%",
              right: "15%",
              bottom: "3%",
              containLabel: true,
            },
            xAxis: [
              {
                // 轴类型：类目轴
                type: "category",
                data: [
                  "北京市",
                  "天津市",
                  "河北省",
                  "山西省",
                  "辽宁省",
                  "吉林省",
                  "浙江省",
                  "江西省",
                  "内蒙古",
                ],

                //坐标轴刻度设置
                axisTick: {
                  //设置刻度线与标签对齐
                  alignWithLabel: true,
                },
                // 修改刻度标签
                axisLabel: {
                  color: "rgb(47, 173, 204)",
                  fontSize: "10",
                  /*
                    坐标轴刻度标签的显示间隔，在类目轴中有效。
                    默认会采用标签不重叠的策略间隔显示标签。
                    可以设置成 0 强制显示所有标签。
                    如果设置为 1，表示『隔一个标签显示一个标签』，
                    如果值为 2，表示隔两个标签显示一个标签，以此类推。
                    */
                  interval: 0,
                },
              },
            ],
            yAxis: [
              {
                type: "value",
                // 修改刻度标签
                axisLabel: {
                  color: "rgb(47, 173, 204)",
                  fontSize: "12",
                },
                axisLine: {
                  show: true, // 是否显示y轴竖线样式
                  lineStyle: {
                    color: "rgb(110, 112, 121)",
                  },
                },
                // y轴分割线
                splitLine: {
                  show: false,
                },
              },
            ],
            series: [
              // 学生系列
              {
                name: "学生",
                type: "bar",
                barWidth: "28%", //修改柱子宽度
                // data: [390, 400, 350, 450, 490, 440, 410, 190, 420],
                data: studentData,
                itemStyle: {
                  // 修改柱子圆角
                  // barBorderRadius:5
                  // 修改颜色
                  color: "rgb(0, 200, 252)",
                  // 边框色
                  borderColor: "",
                  // 边框宽
                  // borderWidth:10,
                },
              },
              // 老师系列
              {
                name: "老师",
                type: "bar",
                barWidth: "28%",
                // data: [500, 470, 280, 450, 340, 400, 380, 500, 300],
                data:teacherData,
                itemStyle: {
                  color: "rgb(0, 109, 232)",
                },
              },
            ],
            // 图例组件
            legend: {
              data: ["学生", "老师"],
              // 设置系列图例样式
              textStyle: {
                fontSize: 12,
                color: [],
              },
              icon: "rect", //设置图例形状为矩形
              itemWidth: 14,
              itemHeight: 10,
              top: 18,
              right: 10,
              orient: "vertical",
            },
          };
          // 设置配置项给实例对象
          myChart.setOption(option);
          // 监听窗口大小图表自适应
          window.addEventListener("resize", function () {
            myChart.resize();
          });
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="line-chart">
    <h2>在线体验人数统计</h2>
    <div class="chart"></div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: "CenterBottom",
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(document.querySelector(".line-chart .chart"));
      let option = {
        // title:{
        //     text:'时长',
        //     textStyle: {
        //         color: 'rgb(47, 173, 204)',
        //         fontSize: 12,
        //     },
        //     left: '3%',
        //     top: '10%'
        // },
        grid: {
            left: '1%',
            right: '8%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: {
            name: '日期',//x轴名称
            type: 'category',
            boundaryGap: false,
            data: ['3.22', '3.23', '3.24', '3.25', '3.26', '3.27', '3.28', '3.29'],
            axisLabel: {
                color: '#fff'
            }
        },
        yAxis: {
            // y轴名称设置
            name: '时长',
            nameTextStyle: {
                color: 'rgb(47, 173, 204)',
                fontSize: 12,
                align: 'right'
            },
            type: 'value',
            axisLine: {
                show: true
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                splitNumber: 2,
            },
            axisTick: {
                show: true
            },
        },
        series: [
            {
                data: [1600, 1400, 2600, 3000, 1400, 500, 500, 500],
                type: 'line',
                areaStyle: {//填充区域
                    color: 'rgb(7,62,95)'
                },
                smooth: true,//平滑连接
                symbol: 'diamond',//标记形状
                symbolSize: 15,//标记大小
                itemStyle: {
                    borderWidth: 1,//标记边框宽
                    borderColor: '#rba(42,112,252)',//标记边框颜色
                    color: 'rgb(0,246,255)'//标记颜色
                },
                lineStyle: {
                    color: 'rgb(7,62,95)'//连接线颜色
                },
            }
        ]
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

<style lang='less' scoped>

</style>
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

      <div class="data-ring">
        <div class="ringOne"></div>
        <div class="ringTwo"></div>
      </div>

      <div class="data-rect">
        <div>
          <span>所有设备总数</span>
          <h3>28881</h3>
        </div>
        <div>
          <span>当前设备数</span>
          <h3>5944</h3>
        </div>
        <div>
          <span>当前在线设备数</span>
          <h3>10159</h3>
        </div>
      </div>
    </div>
    <!-- 底部左边角 -->
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: "LeftTop",
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const myChart = new this.$Charts(
        document.querySelector(".data-ring .ringOne")
      );
      const myChart2 = new this.$Charts(
        document.querySelector(".data-ring .ringTwo")
      );
      myChart.setOption({
        title: {
          text: "当前设备占比",
          style: {
            fill: "rgb(121,176,197)",
            fontSize: "0.15rem",
          },
          offset: [0, -45],
        },
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 2, //-90deg开始
            endAngle: Math.PI * 1.5, //270deg结束
            arcLineWidth: 15, //仪表盘圆弧线条宽度
            data: [
              {
                name: "itemA",
                value: 65,
                gradient: ["rgb(255,222,0)"], //圆弧渐变色
              },
            ],
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
            },
            dataItemStyle: {
              lineCap: "round",
            },
            details: {
              show: true,
              formatter: "{value}%",
              style: {
                fill: "rgb(255,222,0)",
                fontSize: 20,
                fontWeight: 200,
              },
            },
            radius: "75%",
          },
        ],
      });
      myChart2.setOption({
        title: {
          text: "当前设备使用率",
          style: {
            fill: "rgb(121,176,197)",
            fontSize: 12,
          },
          offset: [0, -45],
        },
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 2, //-90deg开始
            endAngle: Math.PI * 1.5, //270deg结束
            arcLineWidth: 15, //仪表盘圆弧线条宽度
            data: [
              {
                name: "itemA",
                value: 61,
                gradient: ["rgb(122,250,4)"], //圆弧渐变色
              },
            ],
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
            },
            dataItemStyle: {
              lineCap: "round",
            },
            details: {
              show: true,
              formatter: "{value}%",
              style: {
                fill: "rgb(122,250,4)",
                fontSize: 20,
                fontWeight: 200,
              },
            },
            radius: "75%",
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
        myChart2.resize();
      });
    },
  },
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

.data-ring {
  width: 3.25rem;
  height: 1.875rem;
  // border: solid red 1px;
  position: absolute;
  top: .625rem;
  left: 3rem;
  display: flex;
  // div{
  //   border: solid yellow 1px;
  // }
  .ringOne {
    flex: 1;
  }
  .ringTwo {
    flex: 1;
  }
}
.data-rect {
  color: rgb(1, 162, 200);
  position: absolute;
  top: 2.5rem;
  left: 2.9375rem;
  width: 3.025rem;
  width: 3.3rem;
  height: 0.5rem;
  display: flex;
  div {
    flex: 1;
    height: 0.5rem;
    border: rgb(9, 97, 148) solid 1px;
    text-align: center;
    box-shadow: 0px 0px 30px rgb(9, 97, 148) inset;
    margin-left: 2px;
    span {
      display: block;
      transform: scale(0.7);
      color: rgb(193, 190, 190);
    }
  }
}
</style>
<template>
  <div class="course">
    <h2>课程统计数据</h2>
    <div class="course-list">
      <h3>热门课程排行榜</h3>
      <ul>
        <li v-for="(item, index) in data" :key="item.id">
          <span>Top{{ index + 1 }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.num }}</span>
        </li>
      </ul>
    </div>

    <div class="course-pie"></div>

    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: "LeftBottom",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.courseRanking();
    // setInterval(() => {
    //   this.courseRanking();
    // }, 30000);

    this.coursePie();
  },
  methods: {
    courseRanking() {
      this.$axios.get("/courseRanking").then(
        (response) => {
          console.log("leftBottomCourseRanking请求成功了");
          this.data = response.data.content.data;
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    coursePie() {
      this.$axios.get("/courseProportion").then(
        (response) => {
          let arr = response.data.content.data;

          console.log("courseProportion请求成功了",arr);

          // const arr2 = JSON.parse(JSON.stringify(arr).replace(/percentage/g,'value'))
          const arr2 = arr.map(item =>{
            return {value:item.percentage,name:item.name}
          })
          console.log(arr2)
          // 做到了这
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );

      let myChart = this.$echarts.init(
        document.querySelector(".course .course-pie")
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
            fontSize: "0.125rem",
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
      myChart.setOption(option);

      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.course-list {
  color: #fff;
  font-size: 0.175rem;
  h3 {
    color: rgb(118, 194, 214);
    margin-top: 0.4rem;
    margin-bottom: 0.1rem;
    font-size: 0.1875rem;
  }

  ul {
    width: 2.5rem;
    height: 1.9rem;
    font-size: 0.2rem;
    // border: red solid 1px;
  }
  li {
    list-style: none;
    margin-bottom: 0.125rem;
    position: relative;
    span {
      margin-right: 0.125rem;
    }

    span:nth-child(3) {
      position: absolute;
      right: -0.1875rem;
    }
  }
}
.course-pie {
  // 课程扇形图位置
  position: absolute;
  right: 0.15rem;
  bottom: 0.1875rem;
  // 大小
  width: 3.325rem;
  height: 2.5rem;
  border: solid 1px rgb(4, 175, 186);
  // 内边距：扇形图占据空间
  padding: 0.1125rem 0.15rem 0.1875rem;
}
</style>
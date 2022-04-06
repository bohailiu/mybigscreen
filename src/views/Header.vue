<template>
  <div>
    <header>
      <!-- 时间 -->
      <div class="showTime">
        <div class="leftTime">{{ dateDay }}</div>
        <div class="rightTime">
          <div class="week">{{ dateWeek }}</div>
          <div class="date">{{ dateYear }}</div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      dateDay: null,
      dateWeek: null,
      dateYear:null,
      weekDay: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ],
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      const date = this.$dayjs();
      this.dateDay = date.format("HH:mm:ss");
      this.dateYear = date.format("YYYY/MM/DD");
      this.dateWeek = date.format(this.weekDay[date.day()]);
    }, 1000);
  },
  beforeDestroy(){
    if(this.timer){
      clearInterval(this.timer)
    }
  }
};
</script>

<style lang="less" scoped>
// 头部
header {
  // 顶部75px
  height: 0.9375rem;
  position: relative;

  // 时间
  .showTime {
    // 时间容器宽320px
    width: 3.05rem;
    // 高75px
    height: 0.9375rem;
    position: absolute;
    right: 0.3rem;
    color: rgba(96, 228, 240);
    font-size: 25px;
    display: flex;

    .leftTime {
      position: absolute;
      bottom: 0;
      flex: 1;
    }

    .rightTime {
      position: absolute;
      right: 0;
      bottom: 0;
      flex: 1;
      font-size: 0.2rem;

      &::before {
        position: absolute;
        content: "";
        width: 1px;
        height: 0.5rem;
        background-color: rgba(96, 228, 240);
        left: -0.25rem;
        bottom: 0;
      }
    }
  }
}
</style>
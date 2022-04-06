<template>
  <div>
    <h2>注册人数详情</h2>

    <div class="chart">
      <div class="doubleCircle">
        <img src="@/assets/imgbox/righttop/1.png" alt="" />
      </div>
      <div class="activCircle">
        <img src="@/assets/imgbox/righttop/2.png" alt="" />
        <!-- 注册老师总数 -->
      </div>
      <div class="boolIcon">
        <img src="@/assets/imgbox/righttop/8.png" alt="" />
      </div>
      <div class="lineOne">
        <img src="@/assets/imgbox/righttop/3.png" alt="" />
      </div>
      <div class="lineTwo">
        <img src="@/assets/imgbox/righttop/4.png" alt="" />
      </div>
      <div class="lineThree">
        <img src="@/assets/imgbox/righttop/5.png" alt="" />
      </div>
      <div class="lineFour">
        <img src="@/assets/imgbox/righttop/6.png" alt="" />
      </div>
      <div class="lineFive">
        <img src="@/assets/imgbox/righttop/7.png" alt="" />
      </div>
      <div class="totalNumber">
        <section>
          <span>注册总人数</span>
          <h3>111</h3>
        </section>
        <section>
          <span>注册老师总数</span>
          <h3>111</h3>
        </section>
        <section>
          <span>注册学生总数</span>
          <h3>111</h3>
        </section>
        <section>
          <span>注册专家总数</span>
          <h3>111</h3>
        </section>
        <section>
          <span>其它注册总数</span>
          <h3>111</h3>
        </section>
      </div>
    </div>

    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: "RightTop",
};
</script>

<style lang='less' scoped>
.chart {
  // border: red 1px solid;
  position: relative;
  color: rgb(230, 222, 222);
  div {
    position: absolute;
  }
  .doubleCircle {
    left: 0.85rem;
    top: 0.1875rem;
  }
  .activCircle {
    left: 0.85rem;
    top: 0.3125rem;
  }
  .boolIcon {
    left: 0.3125rem;
    top: 0.85rem;
  }
  .lineOne {
    left: 0.625rem;
    top: 0.125rem;
  }
  .lineTwo {
    left: 1.7125rem;
    top: 0.775rem;
  }
  .lineThree {
    left: 1.8625rem;
    top: 1.375rem;
  }
  .lineFour {
    top: 1.875rem;
    left: 1.6875rem;
  }
  .lineFive {
    top: 2.5625rem;
    left: 0.725rem;
  }

  .totalNumber{
    // border: yellow solid 1px;
    width: 3.5625rem;
    height: 2.75rem;
    display: flex;
    flex-direction: column;
    left: 3rem;
    section{
      flex: 1;
      // border: solid orange 1px;
      display: flex;
      // justify-content: space-evenly;
      span,h3{
        flex: 1;
        text-align: center;
        line-height: .5875rem;
      }
      span{
        font-size: .175rem;
      }

      h3{
        font-size: .3125rem;
        font-weight: 350;
      }
    }
  }
}
</style>
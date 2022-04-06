<template>
  <div class="first-slide">
    <el-carousel
      :interval="3000"
      indicator-position="none"
      arrow="never"
      type="card"
      height="5.45rem"
    >
      <el-carousel-item v-for="item in imgbox" :key="item.id">
          <img :src="item.idView">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "ImgSlide",
    data() {
        return {
            imgbox:[
                {id:0,idView:require('../assets/imgbox/1.jpg')},
                {id:1,idView:require('../assets/imgbox/2.jpg')},
                {id:2,idView:require('../assets/imgbox/3.jpg')}
            ]
        }
    },
};
</script>

<style lang='less' scoped>
.el-carousel__item {
  height: 4.7625rem;
  width: 7.65rem;
  left: -1.525rem;
  top: .6875rem;
  img{
      height: 100%;
  }
}
</style>
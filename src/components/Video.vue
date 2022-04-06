<template>
  <div class="video-box">
      <video
        class="video"
        preload="auto"
        loop
        playsinline
        autoplay
        src="../assets/videobox/yanxi.mp4"
        tabindex="-1"
        muted="muted"
      ></video>
    </div>
</template>

<script>
export default {
    name:'Video'
}
</script>

<style lang="less" scoped>
    .video{
        width: 100%;
        margin-top: .625rem;
    }
</style>
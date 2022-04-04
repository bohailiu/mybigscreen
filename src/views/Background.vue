<template>
  <div class="video-box">
      <video
        class="video-background"
        preload="auto"
        loop
        playsinline
        autoplay
        src="../assets/bg.mp4"
        tabindex="-1"
        muted="muted"
      ></video>
    </div>
</template>

<script>
export default {
    name:'Background'
}
</script>

<style lang="less" scoped>
.video-box {
    position: relative;
    height: 100vh;
    width: 100vw;
    min-width: 1024px;
    max-width: 1920px;
}

.video-box .video-background {
    position: absolute;
    width: 100%;
    /*保证视频充满屏幕*/
    object-fit: cover;
    z-index: -1
}
</style>>
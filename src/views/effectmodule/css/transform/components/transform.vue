<template>
  <div>
    <div class="flex">
      <div class="message">
        <h1>transform-origin</h1>
        <div>设置旋转元素的基点位置（rotate3D处有说明）</div>
        <xh-Img :src="require('../img/transformOrigin.png')" :height="500"/>
      </div>
      <div class="message">
        <h1>transform-style</h1>
        <div>让转换的子元素保留3D转换</div>
        <h1>语法</h1>
        <div>transform-style: flat|preserve-3d;</div>
        <xh-Img :src="require('../img/transformStyle.png')" :height="100"/>
      </div>
    </div>
  </div>
</template>

<script>
import xhImg from "@/components/xhImg"
export default {
  components: {
    xhImg
  }
}
</script>

<style lang="less" scoped>
.message{
  width: 40%;
  font-size: 20px;
  margin-right: 20px;
}
</style>
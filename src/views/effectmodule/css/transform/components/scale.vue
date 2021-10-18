<template>
  <a-tabs default-active-key="scaleX" tabPosition="left">
    <a-tab-pane :key="item.name" :tab="item.name" v-for="item in tabs">
      <p class="message">{{ item.message }}</p>
      <xh-img :src="item.img" style="margin-bottom: 20px"/>
      <template v-if="item.message2">
        <p class="message">{{ item.message2 }}</p>
        <xh-img :src="item.img2" />
      </template>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import xhImg from "@/components/xhImg"
export default {
  components: {
    xhImg
  },
  data() {
    return {
      tabs: [
        {
          name: 'scaleX',
          message: '缩放该元素，>1放大，<1 缩小，默认值是 1',
          img: require('../img/scale1.png'),
          message2: '其实，他改变的不是元素的宽高，而是x 和 y 轴的刻度 ↓ ',
          img2: require('../img/scale2.png')
        },
        {
          name: 'scaleY',
          message: '缩放该元素，>1放大，<1 缩小，默认值是 1',
          img: require('../img/scale1.png'),
          message2: '其实，他改变的不是元素的宽高，而是x 和 y 轴的刻度 ↓ ',
          img2: require('../img/scale2.png')
        },
        {
          name: 'scale',
          message: '这个是上面两个的合体，也就是 参数 第一个是x 第二个是y',
          img: require('../img/scale3.png')
        },
        {
          name: 'scale3d',
          message: '第一个参数是 x  第二个参数是y  第三个参数是z ，也就是scalex scaley scalez 的结合体'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.message{
  font-size: 18px;
  line-height: 20px;
}
</style>
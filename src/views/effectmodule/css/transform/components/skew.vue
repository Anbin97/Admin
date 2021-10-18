<template>
  <a-tabs default-active-key="skewX" tabPosition="left">
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
          name: 'skewX',
          message: '倾斜该元素，里面填的是角度,随着元素被倾斜，高度不变（y轴被拉伸了）,改变的是轴的刻度',
          img: require('../img/skewX.gif')
        },
        {
          name: 'skewY',
          message: '参照skewX'
        },
        {
          name: 'skew',
          message: '如果使用单个参数，那跟单独使用 skewx 和 skewy是一样的效果',
          img: require('../img/skew1.png'),
          message2: '如果同时使用两个参数，那么跟同时使用skewx 和 skewy 时有一点差异的,skewX(40deg), skewY(40deg)的执行顺序是先按照 X轴斜切 40deg，然后再按照Y斜切40deg，但skew(40deg, 40deg)是同时进行操作的，所以结果略有不同',
          img2: require('../img/skew2.png')
        },
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
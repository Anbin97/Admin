<template>
  <a-tabs default-active-key="translateX" tabPosition="left">
    <a-tab-pane :key="item.name" :tab="item.name" v-for="item in tabs">
      <p class="message">{{ item.message }}</p>
      <p class="message">{{ item.message2 }}</p>
      <p class="message">{{ item.message3 }}</p>
      <xh-img :src="item.img" />
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
          name: 'translateX',
          message: '向X轴平移，填正数往右平移，填负数，往左平移',
          img: require('../img/translateX.gif')
        },
        {
          name: 'translateY',
          message: '向Y轴平移，填正数往下平移，填负数，往上平移',
          img: require('../img/translateY.gif')
        },
        {
          name: 'translateZ',
          message: '向Z轴平移。首先Z轴是朝向我们的，所以看不出效果，但是我们把它转个身，让Z轴面对右边，就可以了。',
          img: require('../img/translateZ.gif')
        },
        {
          name: 'translate3d',
          message: 'translate是同时设置translateX和translateY，所以里面可以填两个参数，第一个值X第二个Y',
          message2: 'translate3d是同时设置translateX，translateY和translateZ所以里面可以填三个参数',
          message3: '只不过有点不同的是，translate如果第二个参数不填的话，默认是0，不过translate3d的话，人家就不同意你不填了，你三个参数必须都给我填。',
          img: require('../img/translate3d.gif')
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
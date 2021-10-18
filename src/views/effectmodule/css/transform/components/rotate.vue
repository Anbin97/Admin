<template>
  <a-tabs default-active-key="rotate" tabPosition="left">
    <a-tab-pane :key="item.name" :tab="item.name" v-for="item in tabs">
      <div class="content">
        <p class="message">{{ item.message }}</p>
        <xh-img :src="item.img" style="margin-bottom: 20px;"/>
        <template v-if="item.message2">
          <p class="message">{{ item.message2 }}</p>
          <xh-img :src="item.img2" />
        </template>
      </div>
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
          name: 'rotate',
          message: '旋转该元素，配合着transform-origin属性，transform-origin 是设置旋转点的。(没有设置transform-origin 属性也可以，只不过是根据该元素的中心点旋转，也就是center center)',
          img: require('../img/rotate1.gif'),
          message2: '加上 transform-origin 设置旋转点。transform-origin 是根据自己而定位的，所以 0px 0px 就是左上角那个点。',
          img2: require('../img/rotate2.gif')
        },
        {
          name: 'rotateX',
          message: '在transform里面，x y z 轴是下图这样的',
          img: require('../img/rotateX1.gif'),
          message2: 'rotateX的x大小写都可以没有影响，加上rotateX属性之后，这个元素，就会以 X 轴 旋转，里面填的是角度。',
          img2: require('../img/rotateX2.gif')
        },
        {
          name: 'rotateY',
          message: '参考rotateX,沿Y轴旋转',
          img: require('../img/rotateY.gif')
        },
        {
          name: 'rotateZ',
          message: '参考rotateX,沿Z轴旋转',
          img: require('../img/rotateZ.gif')
        },
        {
          name: 'rotate3D',
          message: '设置一条主轴，然后根据这条轴旋转',
          img: require('../img/rotate3D.gif'),
          message2: '可这么理解：P(x,y,z)  rotate3d(P, angle) 即，原点 O(0,0,0) 到点 P(x,y,z) 旋转 angle 度',
          img2: require('../img/rotate3D2.png'),

        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  max-height: 80vh;
  overflow-y: auto;
  .message{
    font-size: 18px;
    line-height: 20px;
  }
}
</style>
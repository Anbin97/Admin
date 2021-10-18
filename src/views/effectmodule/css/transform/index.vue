<template>
  <div>
    <a-tabs default-active-key="transform">
      <a-tab-pane :key="item.key" v-for="item in tabs">
        <span slot="tab">
          {{ item.name }}
        </span>
        <component :is="item.key"/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import transform from './components/transform'
import translate from './components/translate'
import rotate from './components/rotate'
import scale from './components/scale'
import skew from './components/skew'
export default {
  components: {
    transform,
    translate,
    rotate,
    scale,
    skew
  },
  data() {
    return {
      tabs: [
        { name: '主属性', key: 'transform' },
        { name: '移动', key: 'translate' },
        { name: '旋转', key: 'rotate' },
        { name: '缩放', key: 'scale' },
        { name: '倾斜', key: 'skew' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
<template>
  <a-tabs default-active-key="shades" tabPosition="left">
    <a-tab-pane :key="item.key" :tab="item.name" v-for="item in tabs">
      <component :is="item.key"/>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import shades from "./components/shades"
import cube from "./components/cube"
export default {
  components: {
    shades,
    cube
  },
  data() {
    return {
      tabs: [
        {
          key: 'shades',
          name: '百叶窗'
        },
        {
          key: 'cube',
          name: '旋转正方体'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
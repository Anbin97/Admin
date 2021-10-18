<template>
  <div>
    <a-tabs default-active-key="animation">
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
import animation from './components/animation'
import transition from './components/transition'
import demo from './components/demo/index'
export default {
  components: {
    animation,
    transition,
    demo
  },
  data() {
    return {
      tabs: [
        { name: 'animation', key: 'animation' },
        { name: 'transition', key: 'transition' },
        { name: 'demo', key: 'demo' },
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
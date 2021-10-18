<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import { deviceEnquire, DEVICE_TYPE } from '@/utils/device'

export default {
  data () {
    return {
      locale: zhCN
    }
  },
  mounted () {
    const { $store } = this
    deviceEnquire(deviceType => {
      switch (deviceType) {
        case DEVICE_TYPE.DESKTOP:
          $store.dispatch('app/ToggleDevice', 'desktop')
          $store.dispatch('app/setSidebar', true)
          break
        case DEVICE_TYPE.TABLET:
          $store.dispatch('app/ToggleDevice', 'tablet')
          $store.dispatch('app/setSidebar', false)
          break
        case DEVICE_TYPE.MOBILE:
        default:
          $store.dispatch('app/ToggleDevice', 'mobile')
          $store.dispatch('app/setSidebar', true)
          break
      }
    })
  }
}
</script>
<style lang="less">
#app {
  height: 100%;
}
</style>

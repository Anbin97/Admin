<template>
  <div style="text-align: center">
    <collapse-panel>
       <div v-show="show">
        <div style="border: 1px solid #000">
          风科技的结果符合风科技的结果符合<br>
          风科技的结果符合风科技的结果符合<br>
          风科技的结果符合风科技的结果符合<br>
          风科技的结果符合风科技的结果符合<br>
          风科技的结果符合风科技的结果符合<br>
          风科技的结果符合风科技的结果符合<br>
          风科技的结果符合风科技的结果符合<br>
          风科技的结果符合风科技的结果符合<br>
        </div>
      </div>
    </collapse-panel>
    <a @click="show = !show">{{ show ? '收起' : '展开' }}</a>
  </div>
</template>

<script>
import collapsePanel from "@/components/collapsePanel"
export default {
  components: {
    collapsePanel
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

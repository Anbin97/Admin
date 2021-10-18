<template>
  <div ref="drag" class="flex drag">
    <div class="ball" ref="ball"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.move(this.$refs.ball)
  },
  methods: {
    // TODO
    move(e) {
      const attributeObj = {
        height: e.offsetHeight,
        width: e.offsetWidth,
        left: e.offsetLeft,
        top: e.offsetTop,
      }
      e.onmousedown = (e) => {
        // 新建一个dom节点
        let dragElement = document.createElement('div');
        dragElement.style.width = attributeObj.width + 'px'
        dragElement.style.height = attributeObj.height + 'px'
        dragElement.style.top = attributeObj.top + 'px'
        dragElement.style.left = attributeObj.left + 'px'
        dragElement.style.background = this.randomRgbaColor()
        dragElement.style.position = 'absolute'
        this.$refs.drag.appendChild(dragElement)

        const attributeDrag = {
          disX: e.clientX - dragElement.offsetLeft,
          disY: e.clientY - dragElement.offsetTop
        }
        document.onmousemove = (em) => {
          dragElement.style.left = em.clientX - attributeDrag.disX + 'px'
          dragElement.style.top = em.clientY - attributeDrag.disY + 'px'
          dragElement.cancelBubble = true;//阻止事件冒泡，防止冲突
        }
        document.onmouseup = () => {
          e.onmousedown = null
          dragElement.onmousemove = null
          try {
            this.$refs.drag.removeChild(dragElement)
          } catch {(e) => {}}
        };
      }
    },
    randomRgbaColor() { //随机生成RGBA颜色
      var r = Math.floor(Math.random() * 256); //随机生成256以内r值
      var g = Math.floor(Math.random() * 256); //随机生成256以内g值
      var b = Math.floor(Math.random() * 256); //随机生成256以内b值
      return `rgb(${r},${g},${b})`; //返回rgba(r,g,b,a)格式颜色
    }
  }
}
</script>

<style lang="less" scoped>
.drag{
  position: relative;
  .ball{
    // margin: 10px 20px;
    height: 100px;
    width: 100px;
    border: 1px solid #000;
  }
  .box{
    margin-left: 100px;
    height: 300px;
    width: 200px;
    border: 1px solid #000;
  }
}
</style>
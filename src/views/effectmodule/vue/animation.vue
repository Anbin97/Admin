<template>
  <div>
    <div class="content">
      <a-button @click="show = !show">点击</a-button>
      <transition name="move">
        <div class="box" v-show="show">航</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  margin: 200px;
  text-align: center;
}
.box{
  margin: 0 auto;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: rebeccapurple;
  border-radius: 50%;
  color: #fff;
}
// 进入过程
.move-enter-active{
  transition: all 3s linear;
}
// 离开过程
.move-leave-active{
  transition: all 1s linear;
}
// 动画效果
.move-enter{
  opacity: 0;
  transform: rotate(360deg) translate3d(300px, 0, 0);
}
.move-leave-to{
  opacity: 0;
  transform: translate3d(300px, 0, 0) rotate(360deg);
}
</style>
<template>
  <div>
    <div class="box">
      <div class="mian1"></div>
      <div class="mian2"></div>
      <div class="mian3"></div>
      <div class="mian4"></div>
      <div class="mian5"></div>
      <div class="mian6"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.box{
  width:300px;
  height:300px;
  position:fixed;
  left:0;
  right:0;
  top:100px;
  bottom:0;
  margin:auto;
  /* 3D的空间 */
  transform-style: preserve-3d;
  /* 为了方便观察让3D舞台转动角度 */
  // transform:rotateX(20deg) rotateY(30deg);
  transition:2s;
  // animation-name: box;
  // animation-duration: 5s;
  // animation-timing-function: linear;
  // animation-iteration-count: infinite;
  &:hover{
    transform: rotate3d(1,1,0, 360deg)
  }
  div{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
  }
  .mian1{
    background: red;
    transform: translateZ(150px);
  }
  .mian2{
    background: blue;
    transform: translateZ(-150px);
  }
  .mian3{
    background: yellow;
    transform: rotateX(90deg) translateZ(150px);
  }
  .mian4{
    background: green;
    transform: rotateX(90deg) translateZ(-150px);
  }
  .mian5{
    background: palevioletred;
    transform: rotateY(90deg) translateZ(-150px);
  }
  .mian6{
    background: orange;
    transform: rotateY(90deg) translateZ(-150px);
  }
}
@keyframes box{
  0% {transform: rotate(0deg)}
  50% {transform: rotate3d(1,1,1, 360deg)}
  100% {transform: rotate(0deg)}
}
</style>
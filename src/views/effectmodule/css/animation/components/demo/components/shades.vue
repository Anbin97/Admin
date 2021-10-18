<template>
  <div>
    <div class="container">
      <ul>
        <li v-for="(item, key) in list" :key="key">
          <img :src="item.src" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { src: require('./img/1.jpg') },
        { src: require('./img/2.jpg') },
        { src: require('./img/3.jpg') },
        { src: require('./img/4.jpg') },
        { src: require('./img/5.jpg') }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.container{
  margin: 0 auto;
  border: 2px solid #568bc7;
  width: 640px;
  height: 300px;
  overflow: hidden;
  ul{
    display: flex;
    &:hover li{
      width: 40px;
    }
    li{
      width: 128px;
      height: 300px;
      list-style: none;
      border-left: 1px solid #194b8d;
      box-shadow: 0 0 25px #000;
      transition: all 0.5s;
      img{
        display: block;
        height: 300px;
        width: 480px;
      }
      &:hover{
        width: 480px;
      }
    }
  }
}
</style>
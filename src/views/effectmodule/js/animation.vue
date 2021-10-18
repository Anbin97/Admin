<template>
  <div>
    <div class="map" ref="map">
      <div class="pao" ref="pao"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null
    }
  },
  mounted() {
    this.movePao()
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    movePao() {
      const map = this.$refs.map
      const pao = this.$refs.pao
      map.onmousemove = (e) => {
        const deg = this.getAngle(e.offsetX, e.offsetY - (pao.offsetTop+pao.offsetHeight/2))
        pao.style.transform = `rotate(${deg}deg)`
        map.onmousedown = (e) => {
          let div = document.createElement('div')
          div.style.width = 30 + 'px'
          div.style.height = 30 + 'px'
          div.style.background = this.randomRgbaColor()
          div.style.borderRadius = '50%'
          div.style.position = 'absolute'
          div.style.top = pao.offsetTop + 'px'
          div.style.left = pao.offsetWidth/2 - 30 + 'px'
          div.style.transformOrigin = '-20px center'
          div.style.transform = `rotate(${deg}deg)`
          map.appendChild(div)
          this.move(div, 3, deg)
        }
      }
    },
    //运动函数
    move(el, speed, deg) {
      const map = this.$refs.map
      // 横向速度
      const speedX = Math.abs(speed*Math.cos(deg* Math.PI / 180))
      // 竖向速度
      const speedY = speed*Math.sin(deg* Math.PI / 180)
      // 重力加速度
      const g = 10
      // 摩擦加速度
      const xg = 2
      let suduX = speedX
      this.timer = setInterval(() => {
        // 横向运动
        if (el.offsetLeft + el.offsetWidth >= map.offsetWidth) {
          suduX = -1 * speedX
        } else if (el.offsetLeft <= 0) {
          suduX = speedX
        }
        el.style.left = el.offsetLeft + suduX + 'px'
        //纵向运动
        
      }, 10)
    },
    //随机生成RGBA颜色
    randomRgbaColor() {
      var r = Math.floor(Math.random() * 256); //随机生成256以内r值
      var g = Math.floor(Math.random() * 256); //随机生成256以内g值
      var b = Math.floor(Math.random() * 256); //随机生成256以内b值
      return `rgb(${r},${g},${b})`; //返回rgba(r,g,b,a)格式颜色
    },
    // 获取角度
    getAngle(x, y) {
      var radian = Math.atan(y / x);//弧度
      var angle = Math.floor(180 / (Math.PI / radian));//弧度转角度
      if (x < 0) {//x小于0的时候加上180°，即实际角度
          angle = angle + 180;
      }
      return angle;
    }
  }
}
</script>

<style lang="less" scoped>
.map{
  width: 100%;
  height: 500px;
  border: 1px solid #000;
  overflow: hidden;
  position: relative;
  .pao{
    width: 100px;
    height: 30px;
    border: 1px solid red;
    position: absolute;
    top: 45%;
    left: -50px;
    transform-origin: 50px 15px;
  }
}
</style>
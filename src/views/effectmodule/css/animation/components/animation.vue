<template>
  <div>

    <div class="massage">
      <div>当在 @keyframes 创建动画，把它绑定到一个选择器，否则动画不会有任何效果。指定至少这两个CSS3的动画属性绑定向一个选择器。</div>
      <ul>
        <li>规定动画的名称</li>
        <li>规定动画的时长</li>
      </ul>
      <div class="animated_div">
        css3动画
      </div>
    </div>
    <div class="flex">
      <pre class="code">
div{
  animation-name: myfirst;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes myfirst
  {
    0%   {background: red; left:0px; top:0px;}
    25%  {background: yellow; left:200px; top:0px;}
    50%  {background: blue; left:200px; top:200px;}
    75%  {background: green; left:0px; top:200px;}
    100% {background: red; left:0px; top:0px;}
  }
      </pre>
      <a-table
        class="flex-1"
        bordered
        :columns="columns"
        :pagination="false"
        :rowKey="record => record.name"
        :dataSource="list">
      </a-table>
    </div>
  </div>
</template>

<script>
import { list } from "@/information/css3Animation.js"
export default {
  data() {
    return {
      list,
      columns: [
        {
          title: '属性',
          dataIndex: 'name',
          width: 200,
          customRender: (text, record) => {
            return <a target="_blank" href={record.src}>{ text }</a>
          }
        },
        { title: '描述', dataIndex: 'describe' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.massage{
  font-size: 16px;
  position: relative;
  ul{
    margin-left:20px;
    margin-top: 20px;
    list-style: disc;
  }
  .animated_div{
    width: 100px;
    height: 47px;
    background: #92B901;
    color: #ffffff;
    position: absolute;
    font-weight: bold;
    font-size: 20px;
    top: 44px;
    left: 157px;
    z-index: 9;
    padding: 10px;
    border-radius: 5px;
    animation-name: animated_div;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes animated_div{
    0% {transform: rotate(0deg);left: 157px;}
    25% {transform: rotate(20deg);left: 157px;}
    50% {transform: rotate(0deg);left: 1000px;}
    55% {transform: rotate(0deg);left: 1000px;}
    70% {transform: rotate(0deg);left: 1000px;background: #1ec7e6;}
    100% {transform: rotate(-360deg);left: 157px;}
  }
}
.code{
  padding: 20px;
  border: 1px solid #ccc;
  background: @gray-2;
  max-width: 500px;
  margin-right: 30px;
}
</style>
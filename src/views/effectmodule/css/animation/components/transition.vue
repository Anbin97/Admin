<template>
  <div>
    <div class="flex">
      <div class="massage">
        <div>把鼠标指针放到div元素上，其宽度会从100px逐渐变为300px</div>
        <pre class="code">
div
{
  width:100px;
  transition: width 2s;
}
div:hover
{
  width:300px;
}
        </pre>
        <div>transition 属性是一个简写属性，用于设置四个过渡属性：</div>
        <ul>
          <li>transition-property</li>
          <li>transition-duration</li>
          <li>transition-timing-function</li>
          <li>transition-delay</li>
        </ul>
      </div>
      <div>
        <div class="demo">鼠标放上来</div>
        <a-table
          class="flex-1"
          bordered
          :columns="columns"
          :pagination="false"
          :rowKey="record => record.name"
          :dataSource="list2">
          <template slot="expandedRowRender" slot-scope="record">
            <xh-Img :src="record.expandedRowRender" :height="record.height"/>
          </template>
        </a-table>
     </div>
    </div>
  </div>
</template>

<script>
import xhImg from "@/components/xhImg"
import { list2 } from "@/information/css3Animation.js"
export default {
  components: { xhImg },
  data() {
    return {
      list2,
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
  max-width: 350px;
  ul{
    margin-left:20px;
    margin-top: 20px;
    list-style: disc;
  }
  .code{
    padding: 20px;
    border: 1px solid #ccc;
    background: @gray-2;
    margin-right: 30px;
  }
}
.demo{
  color: #fff;
  line-height: 30px;
  text-align: center;
  margin-bottom: 30px;
  width:100px;
  transition: all 2s;
  height: 30px;
  background: @gray-6;
  &:hover{
    width:300px;
    height: 50px;
    line-height: 50px;
  }
}
</style>
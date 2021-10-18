<template>
  <div>
    <a-table
      bordered
      :columns="columns"
      :pagination="false"
      :rowKey="record => record.name"
      :dataSource="list">
      <template slot="expandedRowRender" slot-scope="record">
        <xh-Img :src="record.expandedRowRender"/>
      </template>
    </a-table>
  </div>
</template>

<script>
import xhImg from "@/components/xhImg"
import { list } from "@/information/distance.js"
export default {
  components: { xhImg },
  data() {
    return {
      list,
      columns: [
        {
          title: '属性',
          dataIndex: 'name',
          width: 200
        },
        { title: '描述', dataIndex: 'effect' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
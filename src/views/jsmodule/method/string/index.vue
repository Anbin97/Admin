<template>
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="字符串方法">
        <a-row class="message">
          <a-col :span="12">
            <a-input
              allowClear
              v-model="serchValue"
              style="width: 50%"
              placeholder="请输入方法名">
              <a-tooltip slot="suffix" title="输入搜索">
                <a-icon type="search" />
              </a-tooltip>
            </a-input>
          </a-col>
          <a-col :span="12">
            <div class="right">
              重点已用<span class="red">红色</span>标出
              <span>（ </span>
                <a-checkbox :checked="keynote" @change="onChange">只看重点</a-checkbox>
              <span> ）</span>
            </div>
          </a-col>
        </a-row>
        <a-table
          bordered
          :columns="columns"
          :pagination="false"
          :rowKey="record => record.name"
          :dataSource="list">
          <template slot="expandedRowRender" slot-scope="record">
            <div class="code">
              <div v-html="record.expandedRowRender"></div>
            </div>
          </template>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="正则" force-render>
        <a-table
          bordered
          :columns="columns"
          :pagination="false"
          :rowKey="record => record.name"
          :dataSource="list2">
          <template slot="expandedRowRender" slot-scope="record">
            <div class="code">
              <div v-html="record.expandedRowRender"></div>
            </div>
          </template>
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { list1, list2 } from "@/information/string.js"
export default {
  data() {
    return {
      keynote: false,
      serchValue: '',
      list1,
      list2,
      columns: [
        {
          title: '方法名',
          dataIndex: 'name',
          width: 150,
          customRender: (text, record) => {
            return record.important ? <span style="color: red">{text}</span> : text
          }
        },
        { title: '功能', dataIndex: 'effect' }
      ]
    }
  },
  computed: {
    list() {
      const arr1 = this.keynote ? this.list1.filter(item => {
        return item.important
      }) : this.list1
      const arr2 = arr1.filter(item => {
        return item.name.indexOf(this.serchValue) > -1
      })
      return arr2
    }
  },
  mounted() {
    this.setLight()
  },
  methods: {
    onChange(e) {
      this.keynote = e.target.checked
    }
  }
}
</script>
<style lang="less">
pre{
  margin-bottom: 0;
}
.message{
  margin-bottom: 5px;
}
</style>
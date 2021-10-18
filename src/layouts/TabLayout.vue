<template>
  <div>
    <div class="tab-box flex flex-between">
      <div class="content">
        <a-tabs v-model="activeKey" hide-add type="editable-card" @change="tabClick" @edit="remove">
          <a-tab-pane v-for="pane in routerTab" :key="pane.name" :tab="pane.meta.title" :closable="closable(pane.name)"></a-tab-pane>
        </a-tabs>
      </div>
      <div class="right-but flex">
        <a-dropdown>
          <div class="right-but-card">
            Close
            <a-icon type="down" />
          </div>
          <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
            <a-menu-item key="0">
              <div @click="closeAll">
                <a-icon type="user"/>
                <span>close all tab</span>
              </div>
            </a-menu-item>
            <a-menu-divider/>
            <a-menu-item key="1">
              <div @click="closeOther">
                <a-icon type="setting"/>
                <span>close other tab</span>
              </div>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <div class="right-but-card">
          <a-icon type="import" />
          Logout
        </div>
      </div>
    </div>
    <div class="tab-border"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeKey: "",
      router: this.$router.options.routes[0].children
    };
  },
  computed: {
    ...mapGetters(['routerTab'])
  },
  created() {
    this.getKey()
  },
  watch: {
    $route: function () {
      this.getKey()
    }
  },
  methods: {
    closable(val) {
      return val !== "home"
    },
    getKey() {
      this.activeKey = this.$route.name
    },
    tabClick(val) {
      this.$router.push({
        name: val
      })
    },
    remove(key) {
      let index
      const arr = []
      this.routerTab.forEach((item, i) => {
        if (item.name === key) {
          index = i
        } else {
          arr.push(item)
        }
      })
      if (key === this.activeKey) {
        try {
          this.activeKey = this.routerTab[index + 1].name
        }
        catch{
          this.activeKey = this.routerTab[index-1].name
        }
        // 关闭本身切换到周围
        this.$router.push({
          name: this.activeKey
        })
      }
      this.$store.dispatch("app/editRouterTab", arr)
    },
    closeAll() {
      this.$router.push({name: "home"})
      this.$store.dispatch("app/editRouterTab", [this.router[0]])
    },
    closeOther() {
      const name = this.$route.fullPath
      const arr = [this.router[0]]
      this.routerTab.forEach(item => {
        item.path === name && (arr.push(item))
      })
      this.$store.dispatch("app/editRouterTab", arr)
    }
  },
};
</script>

<style lang="less" scoped>
@tab-box-heigh: 50px;
@right-card-width: 80px;
.tab-box {
  background: @contentBackgroundCOlor;
  border-left: 2px solid @gray-2;
  width: 100%;
  height: @tab-box-heigh;
  .content{
    padding: 10px 10px 0;
    .ant-tabs {
      margin-left: 10px;
      /deep/.ant-tabs-bar {
        margin-bottom: 0;
      }
      /deep/.ant-tabs-tab-active{
        background: @sideTabColor;
        color: #fff;
        .anticon-close{
          color: #fff;
        }
      }
    }
  }
  .right-but{
    height: 100%;
    .right-but-card{
      line-height: @tab-box-heigh;
      text-align: center;
      height: 100%;
      width: @right-card-width;
      border-left: 1px solid #ccc;
      // border-right: 1px solid #ccc;
      cursor: pointer;
    }
  }
}
.tab-border{
  height: 3px;
  background: @sideTabColor;
  position: relative;
  top: -1px;
}
</style>
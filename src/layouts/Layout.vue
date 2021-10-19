<template>
  <a-layout class="app-layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible width="220px">
      <logo />
      <a-menu
        theme="dark"
        mode="inline"
        :selectedKeys="selectKeys"
        :openKeys="openKeys"
        :style="{ borderRight: 0 }"
        @openChange="openChange"
      >
        <template v-for="item in list">
          <a-sub-menu :key="item.name" v-if="item.children">
            <span slot="title">
              <a-icon :type="item.meta.icon" />
              <span>{{ item.meta.title }}</span>
            </span>
            <a-menu-item v-for="val in item.children" :key="val.name">
              <router-link :to="{name: val.name}">
                {{ val.meta.title }}
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item :key="item.name" v-else>
            <router-link :to="{name: item.name}">
              <a-icon :type="item.meta.icon" />
              <span>{{ item.meta.title }}</span>
            </router-link>
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout style="height: 100%">
      <a-layout-header>
        <a-button
          type="primary"
          @click="checkCollapsed"
        >
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          />
        </a-button>
      </a-layout-header>
      <a-layout-content>
        <tab-layout />
        <div :style="{ padding: '24px', background: '#fff', minHeight: '280px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import TabLayout from "./TabLayout"
import Logo from "./Logo.vue"
import { mapState } from 'vuex'
export default {
  components: {
    TabLayout,
    Logo
  },
  computed: {
    ...mapState({
      sidebarOpened: state => state.app.sidebar
    })
  },
  data() {
    return {
      collapsed: false,
      list: [],
      openKeys: [],
      selectKeys: [],
      breadcrumbList: []
    }
  },
  watch: {
    sidebarOpened (val) {
      this.collapsed = !val
      this.getMenu()
    },
    $route: function () {
      this.getMenu()
    }
  },
  created() {
    this.getMenu()
    this.collapsed = !this.sidebarOpened
  },
  methods: {
    checkCollapsed() {
      this.collapsed = !this.collapsed
      this.$store.dispatch('app/setSidebar', !this.collapsed)
    },
    getMenu() {
      const routers = this.$router.options.routes[0].children
      const route = this.$route
      const name = route.fullPath.split("/")
      this.$set(this, "list", routers)
      // // 面包屑
      // this.breadcrumbList = []
      // route.matched.forEach(item => {
      //   item.meta.title && this.breadcrumbList.push(item)
      // })
      // 获取选中
      this.list.forEach(item => {
        if(name.length === 2 && item.path === name[1]) {
          this.selectKeys = [item.name]
        } else if(name.length === 3 && item.path === name[1]){
          this.openKeys = [item.name]
          item.children.forEach(val => {
            item.path === name[1] && val.path === name[2] && (this.selectKeys = [val.name])
          })
        }
      })
      this.collapsed && (this.openKeys = [])
    },
    openChange(val) {
      this.openKeys = val
    }
  }
};
</script>
<style lang="less" scoped>
.app-layout{
  height: 100vh;
  .ant-layout-sider{
    font-weight: bold;
    /deep/.ant-layout-sider-children{
      background: @leftSideBackground;
    }
    .ant-menu{
      height: calc(100vh - @logoHeight);
      background: @leftSideBackground;
      .ant-menu-item{
        margin: 0;
        height: 50px;
        line-height: 50px;
        a{
          color: #fff;
        }
      }
      /deep/.ant-menu-submenu-title{
        height: 50px;
        line-height: 50px;
      }
      .ant-menu-submenu-active,.ant-menu-item-active,.ant-menu-item-selected{
        background: @leftSideActiveBackground;
      }
      .ant-menu-submenu-open{
        background: @leftSideSubmenuOpenBackground;
      }
      /deep/.ant-menu-sub{
        background: @leftSideSubmenuOpenBackground;
      }
    }
  }
  .ant-layout-content{
    background: @systemBackgroundColor;
  }
  .ant-layout-header{
    padding: 0 24px;
    height: @sideTopHeight;
    line-height: @sideTopHeight;
    background: @sideTopBackground;
    border-bottom: 1px solid #ccc;
  }
}
</style>
